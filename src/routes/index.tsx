import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import {
  CATEGORIES,
  ITEMS,
  PICKUP_LOCATION,
  WHATSAPP_NUMBER,
  whatsappLink,
  type Category,
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

type Filter = "All" | Category;

function Index() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(
    () => (filter === "All" ? ITEMS : ITEMS.filter((i) => i.category === filter)),
    [filter],
  );

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: ITEMS.length };
    CATEGORIES.forEach((c) => (map[c] = ITEMS.filter((i) => i.category === c).length));
    return map;
  }, []);

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
            <span className="h-1.5 w-1.5 rounded-full bg-whatsapp" />
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

          <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border bg-card p-4">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Items</dt>
              <dd className="mt-1 font-display text-2xl">{ITEMS.length}</dd>
            </div>
            <div className="rounded-xl border bg-card p-4">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Categories</dt>
              <dd className="mt-1 font-display text-2xl">{CATEGORIES.length}</dd>
            </div>
            <div className="col-span-2 rounded-xl border bg-card p-4 sm:col-span-1">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Policy</dt>
              <dd className="mt-1 font-display text-lg">First come, first serve</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Items */}
      <section id="items" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="flex items-end justify-between gap-4 pb-6">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">Available Items</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Tap an item to enquire via WhatsApp.
            </p>
          </div>
        </div>

        {/* Category filter */}
        <div className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          {(["All", ...CATEGORIES] as Filter[]).map((c) => {
            const active = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:bg-secondary"
                }`}
              >
                {c}
                <span className={`ml-2 text-xs ${active ? "opacity-80" : "text-muted-foreground"}`}>
                  {counts[c]}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item) => (
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
              Quickest replies on WhatsApp. Serious buyers only, please.
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
