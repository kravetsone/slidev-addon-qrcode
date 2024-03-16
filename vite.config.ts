import { defineConfig } from "vite";

export default defineConfig({
	optimizeDeps: {
		include: ["slidev-addon-qrcode > qr-code-styling"],
	},
});
