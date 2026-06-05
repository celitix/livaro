"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

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
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/images/hero/headerLogoBlack.png" 
            alt="LIVARO Logo"
            width={240}
            height={200}
            className="object-cover"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-semibold text-ink/75">
          <Link href="/" className="hover:text-deepTeal transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-deepTeal transition-colors">
            About
          </Link>
          <Link
            href="/modular-kitchens"
            className="hover:text-deepTeal transition-colors"
          >
            Modular Kitchens
          </Link>
          <Link
            href="/wardrobes"
            className="hover:text-deepTeal transition-colors"
          >
            Wardrobes
          </Link>

          <div className="relative group">
            <button className="flex items-center gap-1.5 hover:text-deepTeal transition-all duration-300">
              Furniture
              <ChevronDown
                size={16}
                className="transition duration-300 group-hover:rotate-180"
              />
            </button>

            {/* PREMIUM DROPDOWN */}
            <div className="absolute left-1/2 top-full z-50 hidden w-[280px] -translate-x-1/2 overflow-hidden rounded-3xl border border-white/20 bg-white/95 backdrop-blur-xl shadow-[0_25px_80px_rgba(17,17,17,.18)] group-hover:block">
              <div className="h-1 bg-gradient-to-r from-luxuryGold via-softGold to-luxuryGold" />
              <div className="p-2">
                <div className="mt-0.5">
                  <Link
                    href="/furniture/home"
                    className="group/item flex items-center justify-between rounded-2xl px-4 py-4 transition-all duration-300 hover:bg-deepTeal hover:shadow-lg"
                  >
                    <div>
                      <p className="font-medium text-ink group-hover/item:text-white">
                        Home Furniture
                      </p>
                      <p className="text-xs text-ink/45 group-hover/item:text-white/70">
                        Explore collection
                      </p>
                    </div>
                    <span className="text-luxuryGold text-lg transition-transform duration-300 group-hover/item:translate-x-1">
                      →
                    </span>
                  </Link>

                  <Link
                    href="/furniture/office"
                    className="group/item flex items-center justify-between rounded-2xl px-4 py-4 transition-all duration-300 hover:bg-deepTeal hover:shadow-lg"
                  >
                    <div>
                      <p className="font-medium text-ink group-hover/item:text-white">
                        Office Furniture
                      </p>
                      <p className="text-xs text-ink/45 group-hover/item:text-white/70">
                        Explore collection
                      </p>
                    </div>
                    <span className="text-luxuryGold text-lg transition-transform duration-300 group-hover/item:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/projects"
            className="hover:text-deepTeal transition-colors"
          >
            Projects
          </Link>
          <Link href="/blog" className="hover:text-deepTeal transition-colors">
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-deepTeal transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link href="/contact" className="btn-secondary !py-3">
            Free Consultation
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t bg-white px-5 py-5 shadow-xl">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block py-3 text-sm font-semibold"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="block py-3 text-sm font-semibold"
          >
            About
          </Link>
          <Link
            href="/modular-kitchens"
            onClick={() => setOpen(false)}
            className="block py-3 text-sm font-semibold"
          >
            Modular Kitchens
          </Link>
          <Link
            href="/wardrobes"
            onClick={() => setOpen(false)}
            className="block py-3 text-sm font-semibold"
          >
            Wardrobes
          </Link>

          <div>
            <div className="py-3 text-sm font-semibold text-deepTeal">
              Furniture
            </div>
            <div className="pl-4 border-l border-concrete">
              <Link
                href="/furniture/home"
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-ink/80 hover:text-deepTeal"
              >
                Home Furniture
              </Link>
              <Link
                href="/furniture/office"
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-ink/80 hover:text-deepTeal"
              >
                Office Furniture
              </Link>
            </div>
          </div>

          <Link
            href="/projects"
            onClick={() => setOpen(false)}
            className="block py-3 text-sm font-semibold"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            onClick={() => setOpen(false)}
            className="block py-3 text-sm font-semibold"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block py-3 text-sm font-semibold"
          >
            Contact
          </Link>

          <Link href="/contact" className="btn-primary mt-4">
            Free Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
