import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { buildQuoteWhatsAppUrl, QUOTE_SERVICES } from "@/lib/quote-whatsapp";

type QuoteDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  service: "",
  location: "",
  details: "",
};

export function QuoteDialog({ open, onOpenChange }: QuoteDialogProps) {
  const [form, setForm] = useState(emptyForm);

  function update<K extends keyof typeof emptyForm>(key: K, value: (typeof emptyForm)[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const url = buildQuoteWhatsAppUrl({
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      service: String(data.get("service") ?? ""),
      location: String(data.get("location") ?? ""),
      details: String(data.get("details") ?? ""),
    });
    window.open(url, "_blank", "noopener,noreferrer");
    setForm(emptyForm);
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[min(92dvh,880px)] w-[calc(100vw-1rem)] max-w-lg flex-col gap-0 overflow-hidden rounded-2xl p-0 sm:w-full [&>button]:z-10 [&>button]:text-asphalt-foreground [&>button]:hover:text-primary">
        <div className="hazard-stripe h-1" />
        <DialogHeader className="surface-dark space-y-2 px-5 py-5 text-left sm:px-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
            Request a quote
          </p>
          <DialogTitle className="text-2xl text-asphalt-foreground">
            Tell us about your project
          </DialogTitle>
          <DialogDescription className="text-sm text-asphalt-foreground/70">
            Fill in the form and we will open WhatsApp with a ready-to-send message to Pro Mactar.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-5 py-5 sm:px-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="quote-name">Full name *</Label>
              <Input
                id="quote-name"
                name="name"
                autoComplete="name"
                required
                value={form.name}
                onChange={(event) => update("name", event.target.value)}
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quote-phone">Phone number *</Label>
              <Input
                id="quote-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                value={form.phone}
                onChange={(event) => update("phone", event.target.value)}
                placeholder="074 287 8233"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quote-email">Email</Label>
            <Input
              id="quote-email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(event) => update("email", event.target.value)}
              placeholder="you@email.com"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="quote-service">Service needed *</Label>
              <select
                id="quote-service"
                name="service"
                required
                value={form.service}
                onChange={(event) => update("service", event.target.value)}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {QUOTE_SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quote-location">Project location</Label>
              <Input
                id="quote-location"
                name="location"
                autoComplete="address-level2"
                value={form.location}
                onChange={(event) => update("location", event.target.value)}
                placeholder="Suburb or city"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quote-details">Project notes *</Label>
            <Textarea
              id="quote-details"
              name="details"
              required
              rows={4}
              value={form.details}
              onChange={(event) => update("details", event.target.value)}
              placeholder="Size, surface type, timeline, or anything we should know."
              className="min-h-24 resize-y"
            />
          </div>

          <div className="sticky bottom-0 -mx-5 mt-1 border-t border-border bg-background px-5 pt-4 pb-1 sm:-mx-6 sm:px-6">
            <Button
              type="submit"
              className="h-11 w-full rounded-md bg-primary text-sm font-bold uppercase tracking-wide"
            >
              <MessageCircle className="h-4 w-4" />
              Send via WhatsApp
            </Button>
            <p className="mt-2 pb-2 text-center text-xs text-muted-foreground">
              Opens WhatsApp with a formatted quote request to +27 74 287 8233
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
