import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHeader } from "./PageHeader-B3ioFt9R.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Phone, m as CalendarClock, p as ClipboardList, s as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-visit-C0E_iSER.js
var import_jsx_runtime = require_jsx_runtime();
function SiteVisit() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Engage us / Site visits",
		title: "Book a site visit",
		intro: "We assess each project on site before quoting, so the work is planned around the real conditions of your ground, surfaces and access."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-8 md:grid-cols-3",
			children: [
				{
					Icon: ClipboardList,
					title: "1. Tell us about the site",
					text: "Share the location and the type of work — road construction, paving, a driveway, earthworks or a tennis court."
				},
				{
					Icon: MapPin,
					title: "2. We assess on site",
					text: "Our team inspects ground conditions, access and surface requirements to determine the right construction approach."
				},
				{
					Icon: CalendarClock,
					title: "3. You get a clear plan",
					text: "We follow up with a scope and quotation based on what the site actually needs — no unnecessary hold-ups."
				}
			].map(({ Icon, title, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-lg",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: text
					})
				]
			}, title))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "surface-dark mt-10 rounded-2xl p-8 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl text-primary",
					children: "Ready to arrange a visit?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 max-w-xl text-sm text-asphalt-foreground/75",
					children: "Call us directly or send the details by email. We cover residential, commercial, industrial and infrastructure projects across Gauteng."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "tel:+27742878233",
						className: "inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-105",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " +27 74 287 8233"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-asphalt-foreground transition-colors hover:bg-white/10",
						children: "Email the team"
					})]
				})
			]
		})]
	})] });
}
//#endregion
export { SiteVisit as component };
