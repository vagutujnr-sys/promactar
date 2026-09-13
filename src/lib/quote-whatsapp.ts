export const OWNER_WHATSAPP_NUMBER = "27742878233";

export const QUOTE_SERVICES = [
  "Brick Paving",
  "Earthworks & Site Preparation",
  "Domestic Driveways",
  "Tennis Courts",
  "Industrial Driveways & Surfaces",
  "Asphalt & Road Construction",
  "Other / Not sure",
] as const;

export type QuoteRequest = {
  name: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  details: string;
};

function line(label: string, value: string) {
  const trimmed = value.trim();
  return trimmed ? `• *${label}:* ${trimmed}` : "";
}

export function formatQuoteWhatsAppMessage(data: QuoteRequest) {
  const clientLines = [
    line("Name", data.name),
    line("Phone", data.phone),
    line("Email", data.email),
  ].filter(Boolean);

  const projectLines = [
    line("Service", data.service),
    line("Location", data.location),
  ].filter(Boolean);

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
    "www.promactar.co.za",
  ].join("\n");
}

export function buildQuoteWhatsAppUrl(data: QuoteRequest) {
  const text = formatQuoteWhatsAppMessage(data);
  return `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
