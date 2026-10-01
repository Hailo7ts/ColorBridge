import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(),
		tailwindcss(),
		"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add these if your frontend is in a subfolder:
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
    "./client/index.html",
	],
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:5000",
			},
		},
	},
});
