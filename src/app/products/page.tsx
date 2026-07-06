import { ProductInterface } from "@/types/product.type";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

const NAVY = "#0f2244";

export default async function Products() {
  const response = await fetch(`${process.env.BASE_URL}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  const products: ProductInterface[] = data.data;

  return (
    <>
      <main className="bg-slate-50/50">
        <div className="container mx-auto pt-10 pb-16 px-6">
          {/* Page heading */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="h-1.5 w-8 rounded-full"
                style={{ backgroundColor: NAVY }}
              />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: NAVY }}
              >
                Catalog
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
              All Products
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              {products.length} items available
            </p>
          </div>

          <div className="grid gap-6 grid-cols-3 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12">
            {products.map((product) => (
              <React.Fragment key={product._id}>
                <div className="col-span-3">
                  <Card className="group py-0 gap-0 overflow-hidden rounded-2xl border-slate-100 shadow-[0_1px_3px_rgba(15,34,68,0.06)] transition-all duration-300 hover:shadow-[0_16px_32px_rgba(15,34,68,0.12)] hover:-translate-y-1">
                    {/* Image */}
                    <Link
                      href={`/products/${product._id}`}
                      className="relative h-90 overflow-hidden bg-slate-50"
                    >
                      <div className="relative h-90 overflow-hidden bg-slate-50">
                        <Image
                          src={product.imageCover}
                          alt={product.title}
                          width={1000}
                          height={1000}
                          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        {/* Category badge */}
                        <span
                          className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full text-white shadow-sm"
                          style={{ backgroundColor: NAVY }}
                        >
                          {product.category.name}
                        </span>
                        {/* Floating wishlist */}
                        <button
                          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-slate-500 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:text-[#0f2244]"
                          aria-label="Add to wishlist"
                        >
                          <Heart className="size-4" />
                        </button>
                      </div>
                    </Link>

                    <CardHeader className="pt-4 pb-0">
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        {product.brand.name}
                      </div>
                      <CardTitle className="text-lg font-bold text-slate-900 leading-snug line-clamp-1">
                        {product.title}
                      </CardTitle>
                      <CardDescription className="text-xs text-slate-400">
                        {product.category.name}
                      </CardDescription>

                      <div className="flex items-center gap-1 pt-1">
                        {[0, 1, 2, 3, 4].map((star, index) => {
                          const filledStar =
                            index < Math.floor(product.ratingsAverage);
                          return (
                            <Star
                              key={index}
                              className={`${
                                filledStar
                                  ? "text-amber-400 fill-amber-400"
                                  : "text-slate-200"
                              } size-4`}
                            />
                          );
                        })}
                        <h4 className="text-xs text-slate-400 ml-1">
                          ({product.ratingsAverage})
                        </h4>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-3 pb-0">
                      <p
                        className="text-lg font-extrabold"
                        style={{ color: NAVY }}
                      >
                        EGP {product.price.toFixed(2)}
                      </p>
                    </CardContent>

                    <CardFooter className="gap-2 pt-4 pb-5">
                      <Button
                        className="grow text-white rounded-full font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                        style={{ backgroundColor: NAVY }}
                      >
                        <ShoppingCart className="size-4" />
                        Add to Cart
                      </Button>
                      <button
                        className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors duration-200 hover:bg-[#0f2244] hover:border-transparent hover:text-white cursor-pointer"
                        aria-label="Add to wishlist"
                      >
                        <Heart className="size-4" />
                      </button>
                    </CardFooter>
                  </Card>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
