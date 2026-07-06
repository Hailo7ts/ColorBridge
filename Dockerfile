# ---------- Base builder image ----------
FROM node:20-alpine AS base
WORKDIR /app
ENV NODE_ENV=production

# ---------- Build client (Vite) ----------
FROM node:20-alpine AS client-build
WORKDIR /app/client

COPY client/package*.json ./
RUN npm ci

COPY client/ ./
RUN npm run build

# ---------- Build server (Express) ----------
FROM base AS server-build
WORKDIR /app/server

COPY server/package*.json ./
RUN npm ci --omit=dev

COPY server/ ./

COPY --from=client-build /app/client/dist ./dist

# ---------- Runtime image ----------
FROM node:20-alpine AS runtime
WORKDIR /app/server
ENV NODE_ENV=production

COPY --from=server-build /app/server ./

ENV PORT=8080
EXPOSE 8080

CMD ["node", "server.js"]
