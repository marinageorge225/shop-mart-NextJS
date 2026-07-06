import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Truck, RotateCcw, ShieldCheck, Headphones, Send } from "lucide-react";

const NAVY = "#0f2244";

const footerLinks = {
  shop: [
    { label: "All Products", href: "/products" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Best Sellers", href: "/best-sellers" },
    { label: "Deals & Offers", href: "/deals" },
    { label: "Gift Cards", href: "/gift-cards" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Press", href: "/press" },
    { label: "Sustainability", href: "/sustainability" },
  ],
  support: [
    { label: "Help Center", href: "/help" },
    { label: "Track Your Order", href: "/orders/track" },
    { label: "Shipping Info", href: "/shipping" },
    { label: "Returns & Exchanges", href: "/returns" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const trustBadges = [
  {
    icon: Truck,
    title: "Free Shipping",
    subtitle: "On orders over $50",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    subtitle: "Within 30 days",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    subtitle: "100% protected",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    subtitle: "We're here to help",
  },
];

const Footer = () => {
  return (
    <footer className="mt-16">
      {/* Trust badges bar */}
      <div style={{ backgroundColor: NAVY }} className="text-white">
        <div className="container mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustBadges.map(({ icon: Icon, title, subtitle }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="h-10 w-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-xs text-white/60">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-slate-900 text-slate-300">
        <div className="container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand + newsletter */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center group w-fit">
              <Avatar
                className="mr-2.5 text-white shadow-md ring-2 ring-white/10 transition-transform duration-300 group-hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${NAVY}, #3b6ea5)`,
                }}
              >
                <AvatarFallback className="bg-transparent font-semibold">
                  S
                </AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-extrabold tracking-tight text-white">
                Shop<span className="text-[#5b8fd1]">Mart</span>
              </h2>
            </Link>

            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xs">
              Curated essentials across fashion, tech, and home — quality you
              can trust, delivered to your door.
            </p>

            <div className="mt-6">
              <p className="text-sm font-semibold text-white mb-2">
                Get 10% off your first order
              </p>
              <form className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 min-w-0 rounded-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#5b8fd1] transition-colors duration-200"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="rounded-full shrink-0 text-white transition-transform duration-200 hover:scale-105"
                  style={{ backgroundColor: "#5b8fd1" }}
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-white mb-4">
              Get in Touch
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Have a question? Our team is available around the clock.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Support: <br />
              <span className="text-white font-medium">(123) 456-7890</span>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} ShopMart. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-slate-500">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="hover:text-white transition-colors duration-200"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
