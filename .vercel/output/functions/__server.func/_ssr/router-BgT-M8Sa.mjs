import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, l as Slot, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Phone, c as MapPin, f as Globe, l as Mail, o as MessageCircle, s as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BgT-M8Sa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DsJhQHlC.css";
var promactar_logo_default = "/assets/promactar-logo-CGiVnToR.png";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-[100] bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-[100] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var OWNER_WHATSAPP_NUMBER = "27742878233";
var QUOTE_SERVICES = [
	"Brick Paving",
	"Earthworks & Site Preparation",
	"Domestic Driveways",
	"Tennis Courts",
	"Industrial Driveways & Surfaces",
	"Asphalt & Road Construction",
	"Other / Not sure"
];
function line(label, value) {
	const trimmed = value.trim();
	return trimmed ? `• *${label}:* ${trimmed}` : "";
}
function formatQuoteWhatsAppMessage(data) {
	const clientLines = [
		line("Name", data.name),
		line("Phone", data.phone),
		line("Email", data.email)
	].filter(Boolean);
	const projectLines = [line("Service", data.service), line("Location", data.location)].filter(Boolean);
	const details = data.details.trim();
	return [
		"🏗️ *NEW QUOTE REQUEST*",
		"_Pro Mactar Civil Construction_",
		"",
		"👤 *Client details*",
		...clientLines,
		"",
		"🛠️ *Project details*",
		...projectLines,
		"",
		"📝 *Project notes*",
		details || "No additional notes provided.",
		"",
		"──────────────",
		"Sent from the Pro Mactar website",
		"www.promactar.co.za"
	].join("\n");
}
function buildQuoteWhatsAppUrl(data) {
	const text = formatQuoteWhatsAppMessage(data);
	return `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
var emptyForm = {
	name: "",
	phone: "",
	email: "",
	service: "",
	location: "",
	details: ""
};
function QuoteDialog({ open, onOpenChange }) {
	const [form, setForm] = (0, import_react.useState)(emptyForm);
	function update(key, value) {
		setForm((current) => ({
			...current,
			[key]: value
		}));
	}
	function handleSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const url = buildQuoteWhatsAppUrl({
			name: String(data.get("name") ?? ""),
			phone: String(data.get("phone") ?? ""),
			email: String(data.get("email") ?? ""),
			service: String(data.get("service") ?? ""),
			location: String(data.get("location") ?? ""),
			details: String(data.get("details") ?? "")
		});
		window.open(url, "_blank", "noopener,noreferrer");
		setForm(emptyForm);
		onOpenChange(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "flex max-h-[min(92dvh,880px)] w-[calc(100vw-1rem)] max-w-lg flex-col gap-0 overflow-hidden rounded-2xl p-0 sm:w-full [&>button]:z-10 [&>button]:text-asphalt-foreground [&>button]:hover:text-primary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hazard-stripe h-1" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "surface-dark space-y-2 px-5 py-5 text-left sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-bold uppercase tracking-[0.3em] text-primary",
							children: "Request a quote"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "text-2xl text-asphalt-foreground",
							children: "Tell us about your project"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "text-sm text-asphalt-foreground/70",
							children: "Fill in the form and we will open WhatsApp with a ready-to-send message to Pro Mactar."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-5 py-5 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "quote-name",
									children: "Full name *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "quote-name",
									name: "name",
									autoComplete: "name",
									required: true,
									value: form.name,
									onChange: (event) => update("name", event.target.value),
									placeholder: "Your name"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "quote-phone",
									children: "Phone number *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "quote-phone",
									name: "phone",
									type: "tel",
									inputMode: "tel",
									autoComplete: "tel",
									required: true,
									value: form.phone,
									onChange: (event) => update("phone", event.target.value),
									placeholder: "074 287 8233"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "quote-email",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "quote-email",
								name: "email",
								type: "email",
								autoComplete: "email",
								value: form.email,
								onChange: (event) => update("email", event.target.value),
								placeholder: "you@email.com"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "quote-service",
									children: "Service needed *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: "quote-service",
									name: "service",
									required: true,
									value: form.service,
									onChange: (event) => update("service", event.target.value),
									className: "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										disabled: true,
										children: "Select a service"
									}), QUOTE_SERVICES.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: service,
										children: service
									}, service))]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "quote-location",
									children: "Project location"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "quote-location",
									name: "location",
									autoComplete: "address-level2",
									value: form.location,
									onChange: (event) => update("location", event.target.value),
									placeholder: "Suburb or city"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "quote-details",
								children: "Project notes *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "quote-details",
								name: "details",
								required: true,
								rows: 4,
								value: form.details,
								onChange: (event) => update("details", event.target.value),
								placeholder: "Size, surface type, timeline, or anything we should know.",
								className: "min-h-24 resize-y"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sticky bottom-0 -mx-5 mt-1 border-t border-border bg-background px-5 pt-4 pb-1 sm:-mx-6 sm:px-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								className: "h-11 w-full rounded-md bg-primary text-sm font-bold uppercase tracking-wide",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), "Send via WhatsApp"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 pb-2 text-center text-xs text-muted-foreground",
								children: "Opens WhatsApp with a formatted quote request to +27 74 287 8233"
							})]
						})
					]
				})
			]
		})
	});
}
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
	const [quoteOpen, setQuoteOpen] = (0, import_react.useState)(false);
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
						}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setQuoteOpen(true),
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setOpen(false);
								setQuoteOpen(true);
							},
							className: "mt-3 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wide text-primary-foreground",
							children: "Get a Quote"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+27742878233",
							className: "mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold uppercase text-primary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " 074 287 8233"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hazard-stripe h-1" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteDialog, {
				open: quoteOpen,
				onOpenChange: setQuoteOpen
			})
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "surface-dark",
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
							},
							{
								to: "/sitemap",
								label: "Sitemap"
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Pro Mactar Civil Construction (Pty) Ltd. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 uppercase tracking-[0.2em] text-asphalt-foreground/40",
					children: "Developed by CodemathPHP"
				})]
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
		console.error(error);
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
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Pro Mactar | Paving & Road Construction" },
			{
				name: "author",
				content: "Pro Mactar Civil Construction (Pty) Ltd"
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				name: "theme-color",
				content: "#e85b2a"
			},
			{
				name: "geo.region",
				content: "ZA-GP"
			},
			{
				name: "geo.placename",
				content: "Alberton, Gauteng, South Africa"
			},
			{
				name: "description",
				content: "Pro Mactar Civil Construction: brick paving, road construction, driveways and tennis courts across Gauteng since 2013."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Pro Mactar Civil Construction"
			},
			{
				property: "og:locale",
				content: "en_ZA"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@promactar"
			}
		],
		links: [
			{
				rel: "canonical",
				href: "https://www.promactar.co.za/"
			},
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
	const { queryClient } = Route$11.useRouteContext();
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
var $$splitComponentImporter$10 = () => import("./routes--kvBuCEC.mjs");
var Route$10 = createFileRoute("/")({
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
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./about-CVQxMOsu.mjs");
var Route$9 = createFileRoute("/about")({
	head: () => ({
		meta: [
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
		],
		links: [{
			rel: "canonical",
			href: "https://www.promactar.co.za/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./careers-CqTHbXUb.mjs");
var Route$8 = createFileRoute("/careers")({
	head: () => ({
		meta: [
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
		],
		links: [{
			rel: "canonical",
			href: "https://www.promactar.co.za/careers"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./contact-B0B5ljiL.mjs");
var Route$7 = createFileRoute("/contact")({
	head: () => ({
		meta: [
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
		],
		links: [{
			rel: "canonical",
			href: "https://www.promactar.co.za/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./gallery-B3md76XZ.mjs");
var Route$6 = createFileRoute("/gallery")({
	head: () => ({
		meta: [
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
		],
		links: [{
			rel: "canonical",
			href: "https://www.promactar.co.za/gallery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./privacy-DAcMVc1T.mjs");
var Route$5 = createFileRoute("/privacy")({
	head: () => ({
		meta: [
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
		],
		links: [{
			rel: "canonical",
			href: "https://www.promactar.co.za/privacy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./road-construction-BnjoDOq1.mjs");
var Route$4 = createFileRoute("/road-construction")({
	head: () => ({
		meta: [
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
		],
		links: [{
			rel: "canonical",
			href: "https://www.promactar.co.za/road-construction"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./services-B8-l1JDL.mjs");
var Route$3 = createFileRoute("/services")({
	head: () => ({
		meta: [
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
		],
		links: [{
			rel: "canonical",
			href: "https://www.promactar.co.za/services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./site-visit-C0E_iSER.mjs");
var Route$2 = createFileRoute("/site-visit")({
	head: () => ({
		meta: [
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
		],
		links: [{
			rel: "canonical",
			href: "https://www.promactar.co.za/site-visit"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./sitemap-CBwwXnUf.mjs");
var Route$1 = createFileRoute("/sitemap")({
	head: () => ({
		meta: [
			{ title: "Sitemap | Pro Mactar Civil Construction" },
			{
				name: "description",
				content: "Browse the Pro Mactar Civil Construction website, including our services, projects, company information and contact pages."
			},
			{
				property: "og:title",
				content: "Sitemap | Pro Mactar"
			},
			{
				property: "og:description",
				content: "Browse all public pages on the Pro Mactar website."
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.promactar.co.za/sitemap"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./terms-D3iRwNu0.mjs");
var Route = createFileRoute("/terms")({
	head: () => ({
		meta: [
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
		],
		links: [{
			rel: "canonical",
			href: "https://www.promactar.co.za/terms"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$10.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$11
	}),
	AboutRoute: Route$9.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$11
	}),
	CareersRoute: Route$8.update({
		id: "/careers",
		path: "/careers",
		getParentRoute: () => Route$11
	}),
	ContactRoute: Route$7.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$11
	}),
	GalleryRoute: Route$6.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$11
	}),
	PrivacyRoute: Route$5.update({
		id: "/privacy",
		path: "/privacy",
		getParentRoute: () => Route$11
	}),
	RoadConstructionRoute: Route$4.update({
		id: "/road-construction",
		path: "/road-construction",
		getParentRoute: () => Route$11
	}),
	ServicesRoute: Route$3.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$11
	}),
	SiteVisitRoute: Route$2.update({
		id: "/site-visit",
		path: "/site-visit",
		getParentRoute: () => Route$11
	}),
	SitemapRoute: Route$1.update({
		id: "/sitemap",
		path: "/sitemap",
		getParentRoute: () => Route$11
	}),
	TermsRoute: Route.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$11
	})
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
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
