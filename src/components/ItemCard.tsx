import { useState, useEffect } from "react";
import { MessageCircle, Ruler, ChevronLeft, ChevronRight } from "lucide-react";
import type { SaleItem } from "@/lib/sale-data";
import { whatsappLink } from "@/lib/sale-data";

const conditionStyles: Record<string, string> = {
  "Like New":
    "bg-green-200 text-green-900 border border-green-300",

  "Excellent":
    "bg-blue-100 text-blue-500 border border-blue-200",

  "Good":
    "bg-yellow-100 text-yellow-800 border border-yellow-200",

  "Fair":
    "bg-orange-100 text-orange-800 border border-orange-200",
};

const statusStyles: Record<string, string> = {
  Available: "bg-[#ebe4d8]/80 text-[#5f5245] border border-[#d8d0c4] backdrop-blur-sm",
  Sold: "bg-red-100 text-red-700 border border-red-200",
};

export function ItemCard({ item }: { item: SaleItem }) {
  const hasPrice = item.price > 0;
  const images = item.images ?? [];
  const hasImages = images.length > 0;
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => {
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape" && open) {
      setOpen(false);
    }
  };

  window.addEventListener("keydown", handleEsc);

  return () => {
    window.removeEventListener("keydown", handleEsc);
  };
}, [open]);

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
  <>
    <article
  onClick={() => setOpen(true)}
  className={`group flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-card transition-all hover:-translate-y-1 hover:shadow-lg ${
    item.status === "Sold" ? "opacity-60 grayscale" : ""
  }`}
>
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#efe9df] text-6xl">
        {hasImages ? (
          <>
            <img
              src={images[idx]}
              alt={`${item.name} photo ${idx + 1}`}
              className="h-full w-full object-contain bg-[#efe9df] transition-transform duration-300 group-hover:scale-105"
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
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold leading-tight text-card-foreground">
              {item.name}
            </h3>

            <span className="shrink-0 rounded-full bg-[#ebe4d8] px-2.5 py-1 text-[10px] font-medium text-[#5f5245]">
              {item.availableFrom ?? "01 Jul 2026"}
            </span>
          </div>
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
            onClick={(e) => e.stopPropagation()}
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

    {open && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      >
        <div
          className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-3xl bg-[#f7f3ec] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 z-50 rounded-full bg-white p-2 shadow-lg hover:scale-105"
          >
            ✕
          </button>

          <div className="grid gap-6 p-6 md:grid-cols-2">
            {/* LEFT SIDE IMAGES */}
            <div className="relative">
              <img
                src={images[idx]}
                alt={item.name}
                className="max-h-[75vh] w-full rounded-2xl object-contain bg-[#efe9df] p-2"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prev();
                    }}
                    className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg"
                  >
                    <ChevronLeft className="h-5 w-5 text-black" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      next();
                    }}
                    className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg"
                  >
                    <ChevronRight className="h-5 w-5 text-black" />
                  </button>
                </>
              )}

              <div className="mt-3 flex gap-2 overflow-x-auto">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIdx(i);
                    }}
                    className={`h-20 w-20 cursor-pointer rounded-xl object-contain bg-[#efe9df] border-2 ${
                      idx === i ? "border-black" : "border-transparent"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT SIDE DETAILS */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold shadow-sm ${conditionStyles[item.condition]}`}
                  >
                    {item.condition}
                  </span>

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold shadow-sm ${statusStyles[item.status]}`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-4xl font-bold leading-tight text-[#2b2118]">
                    {item.name}
                  </h2>

                  <span className="shrink-0 rounded-full bg-[#ebe4d8] px-4 py-2 text-sm font-semibold text-[#5f5245] shadow-sm">
                    {item.availableFrom ?? "01 Jul 2026"}
                  </span>
                </div>

                {item.brand && (
                  <p className="mt-6 text-lg text-gray-700">
                    {item.brand}
                  </p>
                )}

                {item.dimensions && (
                  <div className="mt-4 flex items-center gap-2 text-gray-600">
                    <Ruler className="h-4 w-4" />
                    <span>{item.dimensions}</span>
                  </div>
                )}

                <div className="mt-8">
                  <p className="text-sm text-gray-500">Price</p>

                  {hasPrice ? (
                    <p className="text-4xl font-bold text-[#2b2118]">
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>
                  ) : (
                    <p className="text-2xl font-semibold">
                      Make an offer
                    </p>
                  )}
                </div>
              </div>

              <a
                onClick={(e) => e.stopPropagation()}
                href={whatsappLink(item.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-700"
              >
                <MessageCircle className="h-5 w-5" />
                Contact on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);
}
