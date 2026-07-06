"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";

interface Product {
  id: string;
  title: string;
  price: number;
  priceAfterDiscount?: number;
  imageCover: string;
  ratingsAverage: number;
  brand: string;
  sold: number;
}

const products: Product[] = [
  {
    id: "6428e7ecdc1175abc65ca090",
    title: "Woman Bordeaux Long Sleeve Blouse",
    price: 499,
    priceAfterDiscount: 349,
    imageCover:
      "https://ecommerce.routemisr.com/Route-Academy-products/1680402411833-cover.jpeg",
    ratingsAverage: 4.3,
    brand: "DeFacto",
    sold: 762,
  },
  {
    id: "6428def9dc1175abc65ca061",
    title: "Orca Leather Boots Anthracite",
    price: 4829,
    priceAfterDiscount: 3064,
    imageCover:
      "https://ecommerce.routemisr.com/Route-Academy-products/1680400120400-cover.jpeg",
    ratingsAverage: 4.3,
    brand: "Jack & Jones",
    sold: 497,
  },
  {
    id: "6408e05d6406cd15828e8f16",
    title: "Galaxy Buds 2 Graphite",
    price: 3999,
    imageCover:
      "https://ecommerce.routemisr.com/Route-Academy-products/1678303324588-cover.jpeg",
    ratingsAverage: 2.7,
    brand: "SONY",
    sold: 338,
  },
  {
    id: "6428cd70dc1175abc65ca03d",
    title: "React Live Sneakers Black/White",
    price: 4639,
    priceAfterDiscount: 3759,
    imageCover:
      "https://ecommerce.routemisr.com/Route-Academy-products/1680395631938-cover.jpeg",
    ratingsAverage: 4.3,
    brand: "Adidas",
    sold: 189,
  },
  {
    id: "6408de536406cd15828e8f10",
    title: "WH-CH510 Wireless On-Ear Headphones",
    price: 1949,
    imageCover:
      "https://ecommerce.routemisr.com/Route-Academy-products/1678302803089-cover.jpeg",
    ratingsAverage: 3.5,
    brand: "SONY",
    sold: 300,
  },
  {
    id: "6428dd2edc1175abc65ca055",
    title: "ESS Big Logo Hoodie Puma Black",
    price: 2649,
    priceAfterDiscount: 2599,
    imageCover:
      "https://ecommerce.routemisr.com/Route-Academy-products/1680399661234-cover.jpeg",
    ratingsAverage: 4.2,
    brand: "Puma",
    sold: 341,
  },
  {
    id: "6408e43a6406cd15828e8f22",
    title: "EOS M50 Mark II Mirrorless Camera",
    price: 19699,
    priceAfterDiscount: 19199,
    imageCover:
      "https://ecommerce.routemisr.com/Route-Academy-products/1678304313006-cover.jpeg",
    ratingsAverage: 3.8,
    brand: "Canon",
    sold: 233,
  },
  {
    id: "6428cb19dc1175abc65ca031",
    title: "Salah Track Top",
    price: 1749,
    priceAfterDiscount: 1094,
    imageCover:
      "https://ecommerce.routemisr.com/Route-Academy-products/1680395032949-cover.jpeg",
    ratingsAverage: 5,
    brand: "Adidas",
    sold: 157,
  },
];

const NAVY = "#0f2244";

const TrendingProducts = () => {
  const [itemsPerView, setItemsPerView] = useState(4);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const maxIndex = Math.max(products.length - itemsPerView, 0);

  // Responsive items-per-view
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 900) setItemsPerView(2);
      else if (window.innerWidth < 1200) setItemsPerView(3);
      else setItemsPerView(4);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3200);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, maxIndex]);

  const goTo = (i: number) => setIndex(Math.min(Math.max(i, 0), maxIndex));
  const next = () => goTo(index >= maxIndex ? 0 : index + 1);
  const prev = () => goTo(index <= 0 ? maxIndex : index - 1);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="h-1.5 w-8 rounded-full"
                style={{ backgroundColor: NAVY }}
              />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: NAVY }}
              >
                This week
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Trending Right Now
            </h2>
            <p className="text-slate-500 mt-1 text-sm">
              Top picks that everyone is loving this week.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous products"
              className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all duration-200 hover:text-white hover:border-transparent"
              style={{ ["--hover-bg" as any]: NAVY }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = NAVY)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next products"
              className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all duration-200 hover:text-white hover:border-transparent"
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = NAVY)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel viewport */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(-${index * (100 / itemsPerView)}%)`,
            }}
          >
            {products.map((product) => {
              const hasDiscount =
                !!product.priceAfterDiscount &&
                product.priceAfterDiscount < product.price;
              const discountPct = hasDiscount
                ? Math.round(
                    ((product.price - product.priceAfterDiscount!) /
                      product.price) *
                      100,
                  )
                : 0;

              return (
                <div
                  key={product.id}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <Link
                    href={`/products/${product.id}`}
                    className="group block rounded-2xl border border-slate-100 bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    style={{ boxShadow: "0 1px 3px rgba(15,34,68,0.06)" }}
                  >
                    {/* Image */}
                    <div className="relative aspect-square bg-slate-50 overflow-hidden">
                      {hasDiscount && (
                        <span
                          className="absolute top-3 left-3 z-10 text-white text-xs font-bold px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: NAVY }}
                        >
                          -{discountPct}%
                        </span>
                      )}
                      <button
                        aria-label="Add to wishlist"
                        className="absolute top-3 right-3 z-10 h-8 w-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-slate-500 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:text-[#0f2244]"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                      <Image
                        src={product.imageCover}
                        alt={product.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        {product.brand}
                      </span>
                      <h3 className="mt-1 text-sm font-semibold text-slate-800 line-clamp-1">
                        {product.title}
                      </h3>

                      <div className="flex items-center gap-1 mt-1.5">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-medium text-slate-600">
                          {product.ratingsAverage.toFixed(1)}
                        </span>
                        <span className="text-xs text-slate-400">
                          · {product.sold} sold
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-baseline gap-1.5">
                          <span
                            className="text-base font-bold"
                            style={{ color: NAVY }}
                          >
                            EGP{" "}
                            {(
                              product.priceAfterDiscount ?? product.price
                            ).toLocaleString()}
                          </span>
                          {hasDiscount && (
                            <span className="text-xs text-slate-400 line-through">
                              {product.price.toLocaleString()}
                            </span>
                          )}
                        </div>
                        <button
                          aria-label="Add to cart"
                          className="h-9 w-9 flex items-center justify-center rounded-full text-white transition-transform duration-200 hover:scale-110"
                          style={{ backgroundColor: NAVY }}
                          onClick={(e) => e.preventDefault()}
                        >
                          <ShoppingCart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === index ? 24 : 8,
                backgroundColor: i === index ? NAVY : "#e2e8f0",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
