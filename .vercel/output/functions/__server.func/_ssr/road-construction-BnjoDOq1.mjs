import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as PageHeader } from "./PageHeader-B3ioFt9R.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as WhatsApp_Image_2026_09_10_at_08_43_30_default, r as WhatsApp_Image_2026_09_10_at_08_43_31_1_default, t as WhatsApp_Image_2026_09_10_at_08_43_29_1_default } from "./WhatsApp_Image_2026-09-10_at_08.43.31_1-CzUc23K0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/road-construction-BnjoDOq1.js
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		img: WhatsApp_Image_2026_09_10_at_08_43_29_1_default,
		title: "Road Construction",
		text: "Construction of new roads and access routes from groundwork through to completed surfacing."
	},
	{
		img: WhatsApp_Image_2026_09_10_at_08_43_31_1_default,
		title: "Asphalt Surfacing",
		text: "Professional asphalt application to create smooth, durable and functional road surfaces."
	},
	{
		img: WhatsApp_Image_2026_09_10_at_08_43_30_default,
		title: "Road Base & Preparation",
		text: "Preparing and developing the underlying layers required to support a strong finished surface."
	}
];
function Roads() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "We are into",
			title: "Asphalt & road construction",
			intro: "Building the roads that move people, business and communities."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-4xl px-4 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl",
				children: "Proper site preparation"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-muted-foreground",
				children: "At ProMactar, we are into the construction and development of durable road surfaces that connect communities, support businesses and keep infrastructure moving. Our asphalt and road construction work combines proper site preparation, quality workmanship and precise surface finishing to deliver roads designed for dependable everyday performance."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "surface-dark",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-6 px-4 py-20 md:grid-cols-3",
				children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group overflow-hidden rounded-2xl border border-white/10 bg-white/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: i.img,
						alt: i.title,
						width: 1200,
						height: 900,
						loading: "lazy",
						className: "h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg",
							children: i.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-asphalt-foreground/70",
							children: i.text
						})]
					})]
				}, i.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/gallery",
				className: "inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-105",
				children: ["View our project gallery ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
			})
		})
	] });
}
//#endregion
export { Roads as component };
