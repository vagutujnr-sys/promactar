import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as PageHeader } from "./PageHeader-B3ioFt9R.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sitemap-CBwwXnUf.js
var import_jsx_runtime = require_jsx_runtime();
var pageGroups = [
	{
		title: "Explore Pro Mactar",
		links: [
			{
				to: "/",
				label: "Home"
			},
			{
				to: "/about",
				label: "About Us"
			},
			{
				to: "/services",
				label: "Our Services"
			},
			{
				to: "/road-construction",
				label: "Asphalt & Road Construction"
			},
			{
				to: "/gallery",
				label: "Project Gallery"
			}
		]
	},
	{
		title: "Start a Conversation",
		links: [
			{
				to: "/site-visit",
				label: "Book a Site Visit"
			},
			{
				to: "/contact",
				label: "Get In Touch"
			},
			{
				to: "/careers",
				label: "Careers"
			}
		]
	},
	{
		title: "Information",
		links: [{
			to: "/privacy",
			label: "Privacy Policy"
		}, {
			to: "/terms",
			label: "Terms & Conditions"
		}]
	}
];
function Sitemap() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Navigate / Site map",
		title: "Find your way around",
		intro: "Explore Pro Mactar's construction services, project work, company information and contact options."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-4 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-8 md:grid-cols-3",
			children: pageGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t-4 border-primary pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: group.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3",
					children: group.links.map((page) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: page.to,
						className: "inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), page.label]
					}) }, page.to))
				})]
			}, group.title))
		})
	})] });
}
//#endregion
export { Sitemap as component };
