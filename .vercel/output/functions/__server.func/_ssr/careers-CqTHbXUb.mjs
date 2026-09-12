import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHeader } from "./PageHeader-B3ioFt9R.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Mail, l as HardHat, n as Users, r as Truck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers-CqTHbXUb.js
var import_jsx_runtime = require_jsx_runtime();
function Careers() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Engage us / Employment",
		title: "Work with Pro Mactar",
		intro: "We're a construction and surface-development team building roads, paving, driveways and tennis courts. Skilled, dependable people are central to the quality we deliver."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HardHat, { className: "h-6 w-6 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-xl",
							children: "Who we look for"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "We're interested in people with experience in road construction, asphalt surfacing, brick paving, earthworks and site preparation, as well as tennis court and driveway construction. Reliability, attention to detail and pride in quality workmanship matter to us as much as technical skill."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-6 w-6 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-xl",
							children: "The work"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Projects span residential, commercial, industrial and infrastructure environments. Our process focuses on proper site preparation, quality workmanship and precise surface finishing, with reduced processing time and no unnecessary hold-ups."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-dark mt-8 rounded-2xl p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-6 w-6 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-2xl text-primary",
						children: "Submit your details"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm text-asphalt-foreground/80",
						children: "Send your CV and a short note on your experience to the email below. We keep details on file for current openings and future opportunities, and we'll be in touch when a suitable role comes up."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "mailto:info@promactar.co.za?subject=Employment%20enquiry",
						className: "mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-105",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " info@promactar.co.za"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-asphalt-foreground/60",
						children: "Prefer to call? Reach us on +27 74 287 8233 during working hours."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-sm text-muted-foreground",
				children: [
					"Want to talk about a project instead?",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "font-bold uppercase tracking-wide text-primary",
						children: "Go to contact"
					})
				]
			})
		]
	})] });
}
//#endregion
export { Careers as component };
