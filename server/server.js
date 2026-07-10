import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import helmet from "helmet";
import dns from 'dns';

dns.setServers(['8.8.8.8', '8.8.4.4']);

import { connectDB } from "./config/db.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Security middleware
app.use(helmet());
app.use(cors());

// Parse JSON
app.use(express.json());

// API routes
app.use("/api/products", postRoutes);

// Serve Vite build
app.use(express.static(path.join(__dirname, "dist")));

// Catch-all route for SPA (Express 5 compatible)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});


// Start server only after DB connects
const startServer = async () => {
  try {
    await connectDB();
    console.log("MongoDB connected");

    const server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    // Graceful shutdown for Fly.io
    process.on("SIGTERM", () => {
      console.log("Shutting down gracefully");
      server.close(() => process.exit(0));
    });

  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
};

startServer();
