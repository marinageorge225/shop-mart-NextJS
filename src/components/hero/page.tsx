import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const NAVY = "#0f2244";
const SKY = "#3b6ea5";

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl mx-4 md:mx-6 mt-4">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #eaf1fb 0%, #f5f8fc 55%, #ffffff 100%)",
        }}
      />

      {/* Decorative ring */}
      <div
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-40 blur-3xl"
        style={{ backgroundColor: "#cfe0f5" }}
      />

      <div className="relative grid md:grid-cols-2 items-center gap-10 px-8 md:px-16 py-16 md:py-20">
        {/* Left: copy */}
        <div className="max-w-lg">
          <div className="flex items-center gap-2 mb-5">
            <Sparkles className="w-4 h-4" style={{ color: SKY }} />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: SKY }}
            >
              New Collection
            </span>
          </div>

          <h1
            className="font-serif text-[2.75rem] md:text-5xl leading-[1.1] tracking-tight"
            style={{ color: NAVY }}
          >
            Everything You Need,{" "}
            <span className="italic font-serif" style={{ color: SKY }}>
              Better Living
            </span>
          </h1>

          <p className="mt-5 text-slate-500 text-base leading-relaxed">
            Curated essentials across fashion, tech, and home — all in one
            place, all worth trusting.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg"
              style={{
                backgroundColor: NAVY,
                boxShadow: "0 8px 24px rgba(15,34,68,0.25)",
              }}
            >
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/deals"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border transition-colors duration-200"
              style={{ borderColor: NAVY, color: NAVY }}
            >
              Explore Deals
            </Link>
          </div>

          {/* Small trust row */}
          <div className="mt-10 flex items-center gap-6 text-xs text-slate-400">
            <span>Free shipping over $50</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>Easy 30-day returns</span>
          </div>
        </div>

        {/* Right: product cluster */}
        <div className="relative flex justify-center md:justify-end">
          {/* Blob backdrop behind products */}
          <div
            className="absolute w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-[40%_60%_55%_45%/45%_40%_60%_55%]"
            style={{
              background: "linear-gradient(160deg, #dbe8f7 0%, #c4d9f0 100%)",
            }}
          />

          <div className="relative flex items-end gap-4 md:gap-6 pt-10">
            {/* Backpack */}
            <div className="relative w-28 md:w-36 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shadow-slate-300/40 -mb-4">
              <Image
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80"
                alt="Backpack"
                fill
                sizes="150px"
                className="object-cover"
              />
            </div>

            {/* Headphones - largest, center */}
            <div className="relative w-36 md:w-44 aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-slate-400/40 z-10">
              <Image
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80"
                alt="Headphones"
                fill
                sizes="180px"
                className="object-cover"
              />
            </div>

            {/* Watch */}
            <div className="relative w-24 md:w-32 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shadow-slate-300/40 mb-6">
              <Image
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80"
                alt="Smart watch"
                fill
                sizes="130px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Floating price/rating chip */}
          <div className="absolute -bottom-2 left-2 md:left-8 bg-white rounded-2xl shadow-lg shadow-slate-300/50 px-4 py-3 flex items-center gap-3">
            <div
              className="h-9 w-9 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: NAVY }}
            >
              4.8
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-800">
                Trusted by 20k+
              </p>
              <p className="text-[11px] text-slate-400">Verified buyers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
