import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as PageHeader } from "./PageHeader-B3ioFt9R.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as paving_default, r as tennis_court_default, t as driveway_default } from "./tennis-court-CCMjGlZW.mjs";
import { t as industrial_default } from "./industrial-BqJgcHyt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-B8-l1JDL.js
var import_jsx_runtime = require_jsx_runtime();
var services = [
	{
		img: paving_default,
		title: "Brick Paving",
		text: "Professional paving solutions for residential, commercial and outdoor spaces."
	},
	{
		img: "/assets/earthworks-6u7g0Zxl.jpg",
		title: "Earthworks & Site Preparation",
		text: "Professional paving solutions for residential, commercial and outdoor spaces."
	},
	{
		img: driveway_default,
		title: "Domestic Driveways",
		text: "Durable and attractive driveway construction for residential properties."
	},
	{
		img: tennis_court_default,
		title: "Tennis Courts",
		text: "Professional construction and surface development for tennis and recreational facilities."
	},
	{
		img: industrial_default,
		title: "Industrial Driveways & Surfaces",
		text: "Practical, hard-wearing surfaces designed for demanding industrial environments."
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Our services / What we do",
		title: "Construction solutions",
		intro: "At ProMactar, we provide a range of construction and surface-development services designed to meet the needs of residential, commercial, industrial and infrastructure clients."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-4 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
			children: [services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "group overflow-hidden rounded-2xl border border-border bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: s.img,
					alt: s.title,
					width: 1200,
					height: 900,
					loading: "lazy",
					className: "h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t-4 border-primary p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg",
						children: s.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: s.text
					})]
				})]
			}, s.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center rounded-2xl surface-dark p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: "Asphalt & road construction"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-asphalt-foreground/75",
						children: "Building the roads that move people, business and communities."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/road-construction",
						className: "mt-6 inline-flex items-center gap-2 font-bold uppercase tracking-wide text-primary",
						children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			})]
		})
	})] });
}
//#endregion
export { Services as component };
