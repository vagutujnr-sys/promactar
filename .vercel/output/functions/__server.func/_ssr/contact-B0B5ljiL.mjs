import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHeader } from "./PageHeader-B3ioFt9R.mjs";
import { a as Phone, c as Mail, d as Globe, s as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-B0B5ljiL.js
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Get in touch",
			title: "Let's talk about your project",
			intro: "Reach the ProMactar team by phone or email, or visit our office in Alberton."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-20 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-6 w-6 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-lg",
							children: "Physical Address"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: [
								"KG Centre",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Van Riebeeck Avenue",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Alberton 1450",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Gauteng ZA"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-6 w-6 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-lg",
							children: "Cell / Mobile"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+27742878233",
							className: "mt-2 inline-block text-sm font-semibold text-foreground hover:text-primary",
							children: "+27 74 287 8233"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-6 w-6 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-lg",
							children: "Email Address"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex flex-col text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:info@promactar.co.za",
								className: "hover:text-primary",
								children: "info@promactar.co.za"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:promactar@gmail.com",
								className: "hover:text-primary",
								children: "promactar@gmail.com"
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-dark rounded-2xl p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-6 w-6 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-xl",
							children: "www.promactar.co.za"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm text-asphalt-foreground/75",
							children: [
								"Pro Mactar Civil Construction (Pty) Ltd",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Registration Number: 2013/035446/07"
							]
						})
					]
				})
			})
		})
	] });
}
//#endregion
export { Contact as component };
