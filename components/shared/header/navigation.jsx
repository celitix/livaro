"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/constants";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);

    on();
    window.addEventListener("scroll", on);

    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/88 shadow-[0_10px_40px_rgba(17,17,17,.08)] backdrop-blur-xl"
          : "bg-white/65 backdrop-blur-md"
      }`}
    >
      <div className="container-lux flex h-20 items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-deepTeal text-white font-semibold tracking-[-.05em]">
            L
          </span>

          <span>
            <span className="block text-xl tracking-[.16em] font-semibold">
              LIVARO
            </span>

            <span className="block text-[10px] uppercase tracking-[.22em] text-luxuryGold">
              Kitchen | Wardrobes | Furniture
            </span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-semibold text-ink/75">

          {navItems.map((item) =>
            item.children ? (

              <div
                key={item.label}
                className="relative group"
              >

                <button className="flex items-center gap-1.5 hover:text-deepTeal transition-all duration-300">

                  {item.label}

                  <ChevronDown
                    size={16}
                    className="transition duration-300 group-hover:rotate-180"
                  />

                </button>

                {/* PREMIUM DROPDOWN */}
                <div className="absolute left-1/2 top-full z-50  hidden w-[280px] -translate-x-1/2 overflow-hidden rounded-3xl border border-white/20 bg-white/95 backdrop-blur-xl shadow-[0_25px_80px_rgba(17,17,17,.18)] group-hover:block">

                  <div className="h-1 bg-gradient-to-r from-luxuryGold via-softGold to-luxuryGold" />

                  <div className="p-2">

                    

                    <div className="mt-0.5">

                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="group/item flex items-center justify-between rounded-2xl px-4 py-4 transition-all duration-300 hover:bg-deepTeal hover:shadow-lg"
                        >

                          <div>

                            <p className="font-medium text-ink group-hover/item:text-white">
                              {child.label}
                            </p>

                            <p className="text-xs text-ink/45 group-hover/item:text-white/70">
                              Explore collection
                            </p>

                          </div>

                          <span className="text-luxuryGold text-lg transition-transform duration-300 group-hover/item:translate-x-1">
                            →
                          </span>

                        </Link>
                      ))}

                    </div>

                  </div>

                </div>

              </div>

            ) : (

              <Link
                key={item.label}
                href={item.href}
                className="hover:text-deepTeal transition-colors"
              >
                {item.label}
              </Link>

            )
          )}

        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="btn-secondary !py-3"
          >
            Free Consultation
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t bg-white px-5 py-5 shadow-xl">

          {navItems.map((item) =>
            item.children ? (

              <div key={item.label}>

                <div className="py-3 text-sm font-semibold text-deepTeal">
                  {item.label}
                </div>

                <div className="pl-4 border-l border-concrete">

                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-sm text-ink/80 hover:text-deepTeal"
                    >
                      {child.label}
                    </Link>
                  ))}

                </div>

              </div>

            ) : (

              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-semibold"
              >
                {item.label}
              </Link>

            )
          )}

          <Link
            href="/contact"
            className="btn-primary mt-4"
          >
            Free Consultation
          </Link>

        </div>
      )}

    </header>
  );
}