import { ProductInterface } from "@/types/product.type";
import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Heart,
  ShoppingCart,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProductGallery from "@/components/product/ProductGallery";

const NAVY = "#0f2244";
const SKY = "#3b6ea5";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const response = await fetch(`${process.env.BASE_URL}/products/${productId}`);
  const data = await response.json();
  const product: ProductInterface = data.data;

  const gallery =
    product.images && product.images.length > 0
      ? product.images
      : [product.imageCover];

  return (
    <>
      <main className="bg-slate-50/50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-10">
          {/* Breadcrumb */}
          <Breadcrumb className="pb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  render={
                    <Link
                      href="/"
                      className="text-slate-500 hover:text-[#0f2244] transition-colors"
                    >
                      Home
                    </Link>
                  }
                />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  render={
                    <Link
                      href="/products"
                      className="text-slate-500 hover:text-[#0f2244] transition-colors"
                    >
                      Products
                    </Link>
                  }
                />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-slate-900 font-semibold text-lg">
                  {product.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Main card */}
          <Card className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-3xl border-slate-100 shadow-[0_1px_3px_rgba(15,34,68,0.06)] py-0 gap-y-0">
            {/* Gallery (client component) */}
            <div className="p-6 md:p-8">
              <ProductGallery
                images={gallery}
                title={product.title}
                categoryName={product.category.name}
              />
            </div>

            {/* Info */}
            <div className="border-t md:border-t-0 md:border-l border-slate-100">
              <CardHeader className="pt-8 px-6 md:px-8 pb-0">
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: SKY }}
                  >
                    {product.brand.name}
                  </span>
                  {product.quantity > 0 ? (
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                      In Stock
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-red-600 bg-red-50 px-2.5 py-1 rounded-full">
                      Out of Stock
                    </span>
                  )}
                </div>

                <CardTitle className="text-2xl font-bold text-slate-900 leading-snug mt-2">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-sm text-slate-400">
                  {product.category.name}
                </CardDescription>

                <div className="flex items-center gap-1 pt-2">
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
                  <span className="text-xs text-slate-400 ml-1">
                    {product.ratingsAverage} · {product.sold ?? 0} sold
                  </span>
                </div>
              </CardHeader>

              <CardContent className="px-6 md:px-8 pt-5 pb-0">
                <p className="text-3xl font-extrabold" style={{ color: NAVY }}>
                  EGP {product.price.toFixed(2)}
                </p>

                <p className="text-sm text-slate-500 leading-relaxed mt-4 line-clamp-4">
                  {product.description}
                </p>
              </CardContent>

              <CardFooter className="flex-col items-stretch gap-4 px-6 md:px-8 pt-6 pb-8">
                <div className="flex items-center gap-2">
                  <Button
                    className="grow text-white rounded-full font-semibold h-12 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                    style={{ backgroundColor: NAVY }}
                  >
                    <ShoppingCart className="size-4" />
                    Add to Cart
                  </Button>
                  <button
                    className="h-12 w-12 shrink-0 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors duration-200 hover:bg-[#0f2244] hover:border-transparent hover:text-white cursor-pointer"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="size-4" />
                  </button>
                </div>

                {/* Trust row */}
                <div className="grid grid-cols-3 gap-3 pt-2 border-t border-slate-100">
                  {[
                    { icon: Truck, label: "Free Shipping" },
                    { icon: RotateCcw, label: "30-Day Returns" },
                    { icon: ShieldCheck, label: "Secure Payment" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center text-center gap-1.5 pt-3"
                    >
                      <Icon className="size-4" style={{ color: SKY }} />
                      <span className="text-[11px] text-slate-500">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </CardFooter>
            </div>
          </Card>

          {/* Full description */}
          <div className="mt-8 rounded-3xl bg-white border border-slate-100 p-6 md:p-8 shadow-[0_1px_3px_rgba(15,34,68,0.06)]">
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              Product Details
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetails;
