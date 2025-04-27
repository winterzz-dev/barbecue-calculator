import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { type ManifestOptions, VitePWA } from "vite-plugin-pwa";

const manifest: Partial<ManifestOptions> = {
	theme_color: "#1e2939",
	background_color: "#1e2939",
	icons: [
		{
			purpose: "maskable",
			sizes: "512x512",
			src: "icon512_maskable.png",
			type: "image/png",
		},
		{
			purpose: "any",
			sizes: "512x512",
			src: "icon512_rounded.png",
			type: "image/png",
		},
	],
	orientation: "any",
	display: "standalone",
	lang: "ru",
	name: "Калькулятор шашлыка",
	short_name: "Калькулятор шашлыка",
	start_url: "/",
};

export default defineConfig({
	esbuild: {
		jsxFactory: "h",
		jsxFragment: "hf",
		jsxInject: `import { h, hf } from "@reatom/jsx";`,
	},
	plugins: [
		tailwindcss(),
		VitePWA({
			manifest,
			registerType: "autoUpdate",
			injectRegister: false,

			workbox: {
				globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
				cleanupOutdatedCaches: true,
				clientsClaim: true,
			},

			devOptions: {
				enabled: false,
				navigateFallback: "index.html",
				suppressWarnings: true,
				type: "module",
			},
		}),
	],
});
