import Link from "next/link";
import { brand, navItems } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink text-white border-t border-white/10">
      <div className="container-lux py-20 grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]">
        {/* BRAND SECTION */}
        <div>
          <h2 className="text-3xl font-semibold tracking-[.22em]">LIVARO</h2>

          <div className="mt-3 h-[2px] w-20 bg-luxuryGold rounded-full" />

          <p className="mt-6 max-w-md text-white/60 leading-8 text-sm">
            Premium modular kitchens, wardrobes and bespoke furniture crafted
            with timeless elegance, intelligent functionality and refined modern
            aesthetics.
          </p>

          <p className="mt-8 text-luxuryGold text-sm tracking-[.14em] uppercase">
            {brand.tagline}
          </p>
        </div>

        {/* EXPLORE */}
        <div>
          <h4 className="text-sm uppercase tracking-[.24em] text-luxuryGold">
            Explore
          </h4>

          <div className="mt-7 grid gap-4 text-sm">
            {navItems.slice(1, 6).map((n) =>
              n.children ? (
                <div key={n.label}>
                  {/* Furniture Children */}
                  <div className=" grid gap-2">
                    {n.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="text-white/55 hover:text-luxuryGold transition"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={n.label}
                  href={n.href}
                  className="text-white/70 hover:text-luxuryGold transition"
                >
                  {n.label}
                </Link>
              ),
            )}
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-sm uppercase tracking-[.24em] text-luxuryGold">
            Contact
          </h4>

          <div className="mt-7 grid gap-5 text-sm text-white/65">
            <div>
              <p className="text-white text-xs uppercase tracking-[.18em] mb-2">
                Email
              </p>
              <span>{brand.email}</span>
            </div>

            <div>
              <p className="text-white text-xs uppercase tracking-[.18em] mb-2">
                Phone
              </p>
              <span>{brand.phone}</span>
            </div>

            <div>
              <p className="text-white text-xs uppercase tracking-[.18em] mb-2">
                Studio Address
              </p>

              <span>
                22, I Floor, Biswa Nagar,
                <br />
                New Sanganer Road,
                <br />
                Jaipur, Rajasthan
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="container-lux py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 LIVARO. Crafted for refined modern living.
          </p>

          <div className="flex items-center gap-5 text-xs text-white/45">
            <Link
              href="/privacy-policy"
              className="hover:text-luxuryGold transition"
            >
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-luxuryGold transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
