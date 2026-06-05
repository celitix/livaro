import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink text-white border-t border-white/10">
      <div className="container-lux py-20 grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]">
        {/* BRAND SECTION */}
        <div>
          <Image
            src="/images/hero/headerLogogold.png"
            alt="LIVARO Logo"
            width={280}
            height={200}
            className="object-cover"
          />

          <p className="mt-3 max-w-md text-white/80 leading-8 text-sm">
            Premium modular kitchens, wardrobes and bespoke furniture crafted
            with timeless elegance, intelligent functionality and refined modern
            aesthetics.
          </p>
        </div>

        {/* EXPLORE */}
        <div className="md:text-center text-left w-full">
          <h4 className="text-sm uppercase tracking-[.24em] text-luxuryGold mr-5">
            Explore
          </h4>

          <div className="mt-7 grid gap-4 text-sm text-start md:justify-center justify-start">
            <Link
              href="/about"
              className="text-white/70 hover:text-luxuryGold transition"
            >
              About
            </Link>
            <Link
              href="/modular-kitchens"
              className="text-white/70 hover:text-luxuryGold transition"
            >
              Modular Kitchens
            </Link>
            <Link
              href="/wardrobes"
              className="text-white/70 hover:text-luxuryGold transition"
            >
              Wardrobes
            </Link>
            <div>
              <div className="grid gap-4">
                <Link
                  href="/furniture/home"
                  className="text-white/55 hover:text-luxuryGold transition"
                >
                  Home Furniture
                </Link>
                <Link
                  href="/furniture/office"
                  className="text-white/55 hover:text-luxuryGold transition"
                >
                  Office Furniture
                </Link>
              </div>
            </div>
            <Link
              href="/projects"
              className="text-white/70 hover:text-luxuryGold transition"
            >
              Projects
            </Link>
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
              <span className="text-white/80">info@livarostudio.com</span>
            </div>

            <div>
              <p className="text-white text-xs uppercase tracking-[.18em] mb-2">
                Phone
              </p>
              <span className="text-white/80">+91 9314-00-3146</span>
            </div>

            <div>
              <p className="text-white text-xs uppercase tracking-[.18em] mb-2">
                Studio Address
              </p>

              <span className="text-white/80">
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
            © 2026 LIVARO. All rights reserved. Designed by{" "}
            <span className="text-luxuryGold">
              <Link
                target="_blank"
                href="https://www.proactivedigital.in"
                className="hover:text-luxuryGold transition"
              >
                Proactive Professional Services Pvt Ltd
              </Link>
            </span>
          </p>

          <div className="flex items-center gap-5 text-xs text-luxuryGold">
            <Link
              href="/privacy-policy"
              className="text-luxuryGold transition"
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
