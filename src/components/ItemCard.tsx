import { useState, useEffect } from "react";
import { MessageCircle, Ruler, ChevronLeft, ChevronRight } from "lucide-react";
import type { SaleItem } from "@/lib/sale-data";
import { whatsappLink } from "@/lib/sale-data";

const conditionStyles: Record<string, string> = {
  "Like New":
    "bg-[#eadccf] text-[#5c4632]",
  "Excellent":
    "bg-[#ebe4d8] text-[#5f5245]",
  "Good":
    "bg-[#e5dfd5] text-[#5e5a54]",
  "Fair":
    "bg-[#d8d2c9] text-[#4f4b45]",
};

const statusStyles: Record<string, string> = {
  Available: "bg-green-100 text-green-700 border border-green-200",
  Sold: "bg-red-100 text-red-700 border border-red-200",
};

export function ItemCard({ item }: { item: SaleItem }) {
  const hasPrice = item.price > 0;
  const images = item.images ?? [];
  const hasImages = images.length > 0;
  const [idx, setIdx] = useState(0);

  // Preload all images so transitions are instant
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <article className={`group flex flex-col overflow-hidden rounded-2xl border bg-card transition-all hover:-translate-y-1 hover:shadow-lg ${
  item.status === "Sold" ? "opacity-60 grayscale" : ""
}`}>
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#efe9df] text-6xl">
        {hasImages ? (
          <>
            <img
              src={images[idx]}
              alt={`${item.name} photo ${idx + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            {images.length > 1 && (
              <>

                <button

                  type="button"

                  onClick={(e) => {

                    e.stopPropagation();

                    prev();

                  }}

                  aria-label="Previous photo"

                  className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition hover:bg-white hover:scale-105"

                >

                  <ChevronLeft className="h-5 w-5 text-black" />

                </button>

                <button

                  type="button"

                  onClick={(e) => {

                    e.stopPropagation();

                    next();

                  }}

                  aria-label="Next photo"

                  className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition hover:bg-white hover:scale-105"

                >

                  <ChevronRight className="h-5 w-5 text-black" />

                </button>

                <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-2.5 py-1 text-xs font-medium text-white">

                  {idx + 1} / {images.length}

                </span>

              </>
            )}
          </>
        ) : (
          <span aria-hidden className="transition-transform duration-300 group-hover:scale-110">
            {item.emoji}
          </span>
        )}
        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">

          <span

            className={`rounded-full px-3 py-1 text-sm font-semibold shadow-sm ${conditionStyles[item.condition]}`}

          >

            {item.condition}

          </span>

          <span

            className={`rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${statusStyles[item.status]}`}

          >

            {item.status}

          </span>

</div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex-1">
          <h3 className="text-base font-semibold leading-tight text-card-foreground">
            {item.name}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
            {item.category}
          </p>
          {item.brand && (
            <p className="mt-2 line-clamp-2 text-sm text-foreground/80">
              {item.brand}
            </p>
          )}
          {item.dimensions && (
            <p className="mt-1 flex items-start gap-1 text-xs text-muted-foreground">
              <Ruler className="mt-0.5 h-3 w-3 shrink-0" />
              <span>{item.dimensions}</span>
            </p>
          )}
        </div>
        <div className="flex items-end justify-between gap-2">
          <div>
            <p className="text-xs text-muted-foreground">Price</p>
            {hasPrice ? (
              <p className="font-display text-2xl text-foreground">
                ₹{item.price.toLocaleString("en-IN")}
              </p>
            ) : (
              <p className="font-display text-lg text-foreground">Make an offer</p>
            )}
          </div>
          <a
            href={whatsappLink(item.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-whatsapp px-3.5 py-2 text-sm font-medium text-whatsapp-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            Contact
          </a>
        </div>
      </div>
    </article>
  );
}
