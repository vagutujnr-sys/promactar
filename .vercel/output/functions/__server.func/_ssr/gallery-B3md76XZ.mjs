import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHeader } from "./PageHeader-B3ioFt9R.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as paving_default, r as tennis_court_default, t as driveway_default } from "./tennis-court-CCMjGlZW.mjs";
import { t as industrial_default } from "./industrial-BqJgcHyt.mjs";
import { n as WhatsApp_Image_2026_09_10_at_08_43_30_default, r as WhatsApp_Image_2026_09_10_at_08_43_31_1_default, t as WhatsApp_Image_2026_09_10_at_08_43_29_1_default } from "./WhatsApp_Image_2026-09-10_at_08.43.31_1-CzUc23K0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-B3md76XZ.js
var import_jsx_runtime = require_jsx_runtime();
var shots = [
	{
		img: "/assets/WhatsApp_Image_2026-09-10_at_08.43.29-IewzSohW.jpeg",
		alt: "ProMactar road milling works"
	},
	{
		img: WhatsApp_Image_2026_09_10_at_08_43_29_1_default,
		alt: "ProMactar road works with milling machine"
	},
	{
		img: WhatsApp_Image_2026_09_10_at_08_43_30_default,
		alt: "ProMactar crew preparing a road base"
	},
	{
		img: WhatsApp_Image_2026_09_10_at_08_43_31_1_default,
		alt: "ProMactar asphalt compaction works"
	},
	{
		img: "/assets/WhatsApp_Image_2026-09-10_at_08.43.32_3-DYOXoZtg.jpeg",
		alt: "ProMactar asphalt paving crew"
	},
	{
		img: "/assets/WhatsApp_Image_2026-09-10_at_08.43.33-10JQVCAI.jpeg",
		alt: "ProMactar road roller compacting asphalt"
	},
	{
		img: paving_default,
		alt: "Brick paving being laid"
	},
	{
		img: driveway_default,
		alt: "Completed residential paved driveway"
	},
	{
		img: tennis_court_default,
		alt: "Newly surfaced tennis court"
	},
	{
		img: industrial_default,
		alt: "Industrial yard surface"
	}
];
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Our work",
		title: "Project gallery",
		intro: "A selection of our construction and surface-development works."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5",
				children: shots.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: s.img,
					alt: s.alt,
					width: 1200,
					height: 900,
					loading: "lazy",
					className: "w-full break-inside-avoid rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.02]"
				}, s.alt))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 border-l-4 border-primary bg-card p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg",
					children: "Special note"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "The photographs featured in our corporate profile gallery were captured by members of our project teams during ongoing works. As a result, image quality and resolution may vary. The selection represents only a small sample of the projects and work undertaken by the ProMactar Team."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/contact",
				className: "mt-10 inline-flex items-center gap-2 font-bold uppercase tracking-wide text-primary",
				children: ["Start your project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
			})
		]
	})] });
}
//#endregion
export { Gallery as component };
