"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const NAVY = "#0f2244";

interface ProductGalleryProps {
  images: string[];
  title: string;
  categoryName: string;
}

const ProductGallery = ({
  images,
  title,
  categoryName,
}: ProductGalleryProps) => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % images.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div>
      {/* Main image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 group">
        <span
          className="absolute top-4 left-4 z-10 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
          style={{ backgroundColor: NAVY }}
        >
          {categoryName}
        </span>

        <button
          className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-slate-500 transition-colors duration-200 hover:text-[#0f2244]"
          aria-label="Add to wishlist"
        >
          <Heart className="size-4" />
        </button>

        {/* Sliding track */}
        <div
          className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="relative shrink-0 w-full h-full">
              <Image
                src={img}
                alt={`${title} ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-[#0f2244]"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-[#0f2244]"
            >
              <ChevronRight className="size-4" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`relative shrink-0 h-16 w-16 rounded-xl overflow-hidden bg-slate-50 border-2 transition-colors duration-200 ${
                i === active ? "border-[#0f2244]" : "border-transparent"
              }`}
            >
              <Image
                src={img}
                alt={`${title} thumbnail ${i + 1}`}
                fill
                sizes="64px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
