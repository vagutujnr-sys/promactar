import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Phone, c as Mail, d as Globe, o as Menu, s as MapPin, t as X } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BYvbQmzs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-WurVarPL.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var promactar_logo_default = "/assets/promactar-logo-CGiVnToR.png";
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/road-construction",
		label: "Roads & Asphalt"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var topLinks = [
	{
		to: "/site-visit",
		label: "Site Visits"
	},
	{
		to: "/careers",
		label: "Employment"
	},
	{
		to: "/privacy",
		label: "Privacy Policy"
	},
	{
		to: "/terms",
		label: "Terms & Conditions"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "surface-dark",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-1.5 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 text-asphalt-foreground/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+27742878233",
							className: "flex items-center gap-1.5 transition-colors hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5" }), " +27 74 287 8233"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:info@promactar.co.za",
							className: "hidden items-center gap-1.5 transition-colors hover:text-primary sm:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5" }), " info@promactar.co.za"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 text-asphalt-foreground/80 sm:gap-4",
						children: [topLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "hidden transition-colors hover:text-primary md:inline",
							activeProps: { className: "text-primary font-semibold" },
							activeOptions: { exact: false },
							children: l.label
						}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-105",
							children: "Get a Quote"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-border/60 bg-background/90 backdrop-blur",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "flex items-center",
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: promactar_logo_default,
								alt: "Pro Mactar Civil Construction",
								className: "h-11 w-auto max-w-52 object-contain"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-6 lg:flex",
							children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: "rounded-full px-3 py-2 text-sm font-semibold uppercase tracking-wide text-foreground/80 transition-colors hover:bg-secondary hover:text-primary",
								activeProps: { className: "bg-primary text-primary-foreground shadow-sm hover:bg-primary hover:text-primary-foreground" },
								activeOptions: { exact: item.to === "/" },
								children: item.label
							}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+27742878233",
								className: "inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-105",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " 074 287 8233"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "lg:hidden",
							"aria-label": "Toggle menu",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					]
				}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "border-t border-border bg-background px-4 pb-4 lg:hidden",
					children: [
						nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							onClick: () => setOpen(false),
							className: "my-1 block rounded-full px-4 py-3 text-sm font-semibold uppercase tracking-wide",
							activeProps: { className: "bg-primary text-primary-foreground" },
							activeOptions: { exact: item.to === "/" },
							children: item.label
						}, item.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2 border-t border-border pt-4",
							children: topLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								onClick: () => setOpen(false),
								className: "rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-foreground/80",
								children: l.label
							}, l.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+27742878233",
							className: "mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold uppercase text-primary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " 074 287 8233"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hazard-stripe h-1" })
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "surface-dark mt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hazard-stripe h-1" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: promactar_logo_default,
							alt: "Pro Mactar Civil Construction logo",
							className: "h-16 w-auto max-w-64 object-contain",
							loading: "lazy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xs text-sm text-asphalt-foreground/70",
							children: "Construction and surface-development since 2013. Road construction, brick paving, tennis courts, domestic and industrial driveways."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs uppercase tracking-widest text-asphalt-foreground/50",
							children: "CK Reg No. 2013/035446/07"
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm tracking-widest",
						children: "Pages"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm text-asphalt-foreground/75",
						children: [
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
							},
							{
								to: "/contact",
								label: "Get In Touch"
							}
						].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "transition-colors hover:text-primary",
							children: l.label
						}) }, l.to))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm tracking-widest",
						children: "Get In Touch"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-sm text-asphalt-foreground/75",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"KG Centre, Van Riebeeck Avenue",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Alberton 1450, Gauteng ZA"
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+27742878233",
									className: "hover:text-primary",
									children: "+27 74 287 8233"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex flex-col",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:info@promactar.co.za",
										className: "hover:text-primary",
										children: "info@promactar.co.za"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:promactar@gmail.com",
										className: "hover:text-primary",
										children: "promactar@gmail.com"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-4 w-4 shrink-0 text-primary" }), "www.promactar.co.za"]
							})
						]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-white/10 py-5 text-center text-xs text-asphalt-foreground/50",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Pro Mactar Civil Construction (Pty) Ltd. All rights reserved."
				]
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Pro Mactar | Paving & Road Construction" },
			{
				name: "description",
				content: "Pro Mactar Civil Construction: brick paving, road construction, driveways and tennis courts across Gauteng since 2013."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Barlow:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	(0, import_react.useEffect)(() => {
		const scriptId = "tawk-to-widget";
		if (document.getElementById(scriptId)) return;
		const script = document.createElement("script");
		script.id = scriptId;
		script.async = true;
		script.src = "https://embed.tawk.to/6aa4f25ff3e7093443b30521/1k2a55ifn";
		script.charset = "UTF-8";
		script.setAttribute("crossorigin", "*");
		document.body.appendChild(script);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		})
	});
}
var $$splitComponentImporter$9 = () => import("./routes--kvBuCEC.mjs");
var Route$9 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Pro Mactar | Paving & Road Construction in Gauteng" },
		{
			name: "description",
			content: "Established 2013, Pro Mactar delivers brick paving, road construction, driveways and tennis courts for residential, commercial and industrial clients."
		},
		{
			property: "og:title",
			content: "Pro Mactar | Where Quality Meets Construction"
		},
		{
			property: "og:description",
			content: "Brick paving, asphalt and road construction, driveways and tennis courts across Gauteng."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./about-CVQxMOsu.mjs");
var Route$8 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Pro Mactar | Construction & Surface Development" },
		{
			name: "description",
			content: "Established in 2013, Pro Mactar delivers durable, functional and safe surfaces with quality workmanship and sound planning."
		},
		{
			property: "og:title",
			content: "About Pro Mactar"
		},
		{
			property: "og:description",
			content: "Our background, mission, vision and operational approach to construction."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./careers-CqTHbXUb.mjs");
var Route$7 = createFileRoute("/careers")({
	head: () => ({ meta: [
		{ title: "Employment & Careers | Pro Mactar Civil Construction" },
		{
			name: "description",
			content: "Pro Mactar welcomes skilled construction, paving and road-building professionals. Submit your details for current and future opportunities."
		},
		{
			property: "og:title",
			content: "Employment | Pro Mactar"
		},
		{
			property: "og:description",
			content: "Join Pro Mactar — construction and surface-development work across Gauteng."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./contact-B0B5ljiL.mjs");
var Route$6 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Get In Touch | Pro Mactar Civil Construction" },
		{
			name: "description",
			content: "Contact Pro Mactar in Alberton, Gauteng: +27 74 287 8233 or info@promactar.co.za for paving and road construction enquiries."
		},
		{
			property: "og:title",
			content: "Get In Touch | Pro Mactar"
		},
		{
			property: "og:description",
			content: "KG Centre, Van Riebeeck Avenue, Alberton 1450, Gauteng ZA."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./gallery-B3md76XZ.mjs");
var Route$5 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Project Gallery | Pro Mactar Construction" },
		{
			name: "description",
			content: "A selection of our construction and surface-development works: roads, paving, driveways, tennis courts and industrial surfaces."
		},
		{
			property: "og:title",
			content: "Pro Mactar Project Gallery"
		},
		{
			property: "og:description",
			content: "A selection of our construction and surface-development works."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./privacy-DAcMVc1T.mjs");
var Route$4 = createFileRoute("/privacy")({
	head: () => ({ meta: [
		{ title: "Privacy Policy | Pro Mactar Civil Construction" },
		{
			name: "description",
			content: "How Pro Mactar Civil Construction collects, uses and protects information provided through this website and project enquiries."
		},
		{
			property: "og:title",
			content: "Privacy Policy | Pro Mactar"
		},
		{
			property: "og:description",
			content: "Pro Mactar privacy policy for website visitors and project enquiries."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./road-construction-BnjoDOq1.mjs");
var Route$3 = createFileRoute("/road-construction")({
	head: () => ({ meta: [
		{ title: "Asphalt & Road Construction | Pro Mactar" },
		{
			name: "description",
			content: "Road construction, asphalt surfacing and road base preparation built for dependable everyday performance."
		},
		{
			property: "og:title",
			content: "Asphalt & Road Construction | Pro Mactar"
		},
		{
			property: "og:description",
			content: "Building the roads that move people, business and communities."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./services-B8-l1JDL.mjs");
var Route$2 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Our Services | Brick Paving, Driveways & Tennis Courts" },
		{
			name: "description",
			content: "Brick paving, earthworks and site preparation, domestic driveways, tennis courts and industrial surfaces by Pro Mactar."
		},
		{
			property: "og:title",
			content: "Pro Mactar Services"
		},
		{
			property: "og:description",
			content: "Construction and surface-development services for residential, commercial, industrial and infrastructure clients."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./site-visit-C0E_iSER.mjs");
var Route$1 = createFileRoute("/site-visit")({
	head: () => ({ meta: [
		{ title: "Site Visits | Pro Mactar Civil Construction" },
		{
			name: "description",
			content: "Request a site visit from Pro Mactar. We assess road, paving, driveway and tennis court projects on site before quoting."
		},
		{
			property: "og:title",
			content: "Site Visits | Pro Mactar"
		},
		{
			property: "og:description",
			content: "Book a site assessment for your construction or surface-development project."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./terms-D3iRwNu0.mjs");
var Route = createFileRoute("/terms")({
	head: () => ({ meta: [
		{ title: "Terms & Conditions | Pro Mactar Civil Construction" },
		{
			name: "description",
			content: "Terms and conditions governing use of the Pro Mactar website and enquiries for construction and surface-development services."
		},
		{
			property: "og:title",
			content: "Terms & Conditions | Pro Mactar"
		},
		{
			property: "og:description",
			content: "Terms governing website use and project enquiries with Pro Mactar."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$9.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$10
	}),
	AboutRoute: Route$8.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$10
	}),
	CareersRoute: Route$7.update({
		id: "/careers",
		path: "/careers",
		getParentRoute: () => Route$10
	}),
	ContactRoute: Route$6.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$10
	}),
	GalleryRoute: Route$5.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$10
	}),
	PrivacyRoute: Route$4.update({
		id: "/privacy",
		path: "/privacy",
		getParentRoute: () => Route$10
	}),
	RoadConstructionRoute: Route$3.update({
		id: "/road-construction",
		path: "/road-construction",
		getParentRoute: () => Route$10
	}),
	ServicesRoute: Route$2.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$10
	}),
	SiteVisitRoute: Route$1.update({
		id: "/site-visit",
		path: "/site-visit",
		getParentRoute: () => Route$10
	}),
	TermsRoute: Route.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$10
	})
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
