import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import {
  ITEMS,
  SORTED_ITEMS,
  PICKUP_LOCATION,
  WHATSAPP_NUMBER,
  whatsappLink,
} from "../lib/sale-data";
import { ItemCard } from "../components/ItemCard";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Moving Out Sale — Furniture, Appliances & Electronics" },
      {
        name: "description",
        content:
          "Quality household items available at discounted prices before relocation. Furniture, appliances, bedding and more. First come first serve.",
      },
      { property: "og:title", content: "Moving Out Sale — Furniture, Appliances & Electronics" },
      {
        property: "og:description",
        content: "Quality household items at discounted prices. First come first serve.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="font-display text-xl tracking-tight">
            Moving<span className="text-muted-foreground">·</span>Sale
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-whatsapp px-3 py-1.5 text-sm font-medium text-whatsapp-foreground transition-opacity hover:opacity-90 sm:px-4 sm:py-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Chat</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-accent)_/_0.18,_transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse" />
            Live — Pickup available now
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            Moving Out Sale — Furniture, Appliances &amp; Electronics
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Quality household items available at discounted prices before relocation.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-medium text-whatsapp-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <a
              href="#items"
              className="inline-flex items-center gap-2 rounded-full border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Browse {ITEMS.length} items
            </a>
          </div>
        </div>
      </section>

      {/* Items */}
      <section id="items" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">

        {/* Category filter */}

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SORTED_ITEMS.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
          <div>
            <h3 className="font-display text-xl">Get in touch</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Quickest replies on WhatsApp. Serious buyers only.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-medium text-whatsapp-foreground hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              {WHATSAPP_NUMBER}
            </a>
          </div>
          <div>
            <h3 className="font-display text-xl">Pickup</h3>
            <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {PICKUP_LOCATION}
            </p>
            <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              {WHATSAPP_NUMBER}
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl">Policy</h3>
            <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" />
              First come, first serve. Cash or UPI on pickup.
            </p>
          </div>
        </div>
        <div className="border-t">
          <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted-foreground sm:px-6">
            © {new Date().getFullYear()} Moving Out Sale. All items sold as-is.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
