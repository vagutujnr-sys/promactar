import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as Clock, h as ArrowRight, i as ShieldCheck, l as HardHat, u as Handshake } from "../_libs/lucide-react.mjs";
import { n as paving_default, r as tennis_court_default, t as driveway_default } from "./tennis-court-CCMjGlZW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes--kvBuCEC.js
var import_jsx_runtime = require_jsx_runtime();
var hero_road_default = "/assets/hero-road-VBa_I2EZ.jpg";
var asphalt_default = "/assets/asphalt-TcQn2ggx.jpg";
var values = [
	{
		icon: ShieldCheck,
		title: "Quality",
		text: "We believe quality should be evident in every stage of our work."
	},
	{
		icon: Handshake,
		title: "Integrity",
		text: "We conduct our business with honesty, accountability and professionalism."
	},
	{
		icon: Clock,
		title: "Reliability",
		text: "Our clients need a construction partner they can depend on."
	},
	{
		icon: HardHat,
		title: "Professionalism",
		text: "We approach our work with discipline, attention to detail and respect for our clients."
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden surface-dark",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_road_default,
					alt: "Road roller compacting a newly laid asphalt road at sunset",
					width: 1920,
					height: 1088,
					className: "animate-slow-zoom absolute inset-0 h-full w-full object-cover opacity-45"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-asphalt via-asphalt/80 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex max-w-6xl flex-col justify-center px-4 py-10 md:py-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "animate-rise text-xs font-bold uppercase tracking-[0.35em] text-primary",
							children: "Est. 2013 · Alberton, Gauteng"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "animate-rise mt-4 max-w-3xl text-4xl leading-tight md:text-6xl",
							style: { animationDelay: "120ms" },
							children: ["Building surfaces.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-primary",
								children: "Building confidence."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "animate-rise mt-6 max-w-xl text-lg text-asphalt-foreground/80",
							style: { animationDelay: "240ms" },
							children: "Road construction, brick paving, tennis courts and domestic & industrial driveways for residential, commercial, industrial and infrastructure environments."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-rise mt-9 flex flex-wrap gap-3",
							style: { animationDelay: "360ms" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-105",
								children: ["Get in touch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								className: "inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 font-bold uppercase tracking-wide transition-colors hover:border-primary hover:text-primary",
								children: "Our services"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "road-dashes relative opacity-40" })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-[0.3em] text-primary",
						children: "About us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl md:text-4xl",
						children: "More than completing a project"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted-foreground",
						children: "ProMactar is a construction and surface-development company established in 2013, providing practical and professional construction solutions across residential, commercial, industrial and infrastructure environments, with a particular focus on road construction, paving, driveways, tennis courts and related surface works."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "From preparation and groundwork through to construction, finishing and completion, our objective is to deliver work that meets the needs and expectations of our clients."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/about",
						className: "mt-6 inline-flex items-center gap-2 font-bold uppercase tracking-wide text-primary",
						children: ["Read our story ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-4",
					children: values.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { className: "h-6 w-6 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-base",
								children: v.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: v.text
							})
						]
					}, v.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "surface-dark",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-[0.3em] text-primary",
						children: "What we do"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl md:text-4xl",
						children: "Construction solutions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 md:grid-cols-3",
						children: [
							{
								img: paving_default,
								title: "Brick Paving",
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
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group overflow-hidden rounded-2xl border border-white/10 bg-white/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.img,
								alt: s.title,
								width: 1200,
								height: 900,
								loading: "lazy",
								className: "h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg",
									children: s.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-asphalt-foreground/70",
									children: s.text
								})]
							})]
						}, s.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						className: "mt-8 inline-flex items-center gap-2 font-bold uppercase tracking-wide text-primary",
						children: ["View all services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: asphalt_default,
				alt: "Asphalt being laid by a paver machine with road crew",
				width: 1200,
				height: 900,
				loading: "lazy",
				className: "rounded-2xl object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold uppercase tracking-[0.3em] text-primary",
					children: "We are into"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl md:text-4xl",
					children: "Asphalt & road construction"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-muted-foreground",
					children: "Building the roads that move people, business and communities. Our asphalt and road construction work combines proper site preparation, quality workmanship and precise surface finishing to deliver roads designed for dependable everyday performance."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/road-construction",
					className: "mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-105",
					children: ["Explore road works ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "hazard-stripe",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-asphalt/90 px-4 py-16 text-center text-asphalt-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl",
						children: "Where quality meets construction"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-xl text-asphalt-foreground/75",
						children: "Tell us about your surface, driveway, paving or road project and we will advise on the right construction approach."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3 font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-105",
						children: ["Contact Pro Mactar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			})
		})
	] });
}
//#endregion
export { Home as component };
