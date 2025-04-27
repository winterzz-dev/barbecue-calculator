import "./styles.css";
import { registerSW } from "virtual:pwa-register";
import { connectLogger } from "@reatom/framework";
import { ctx, mount } from "@reatom/jsx";
import { App } from "./app";

registerSW({
	immediate: true,
});

if (import.meta.env.MODE === "development") {
	connectLogger(ctx);
}

const appRoot = document.getElementById("app");

if (appRoot) {
	mount(appRoot, <App />);
}
