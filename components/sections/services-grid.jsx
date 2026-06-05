import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ServicesGrid() {
  return (
    <section className="section bg-[#fbfaf7]">
      <div className="container-lux">
        <div className="max-w-2xl">
          <p className="label">Our Expertise</p>
          <h2 className="h2 mt-4">
            Bespoke interiors with premium material intelligence.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* SERVICE 1: Modular Kitchens */}
          <Link
            href="/modular-kitchens"
            className="group overflow-hidden rounded-[34px] bg-white shadow-soft"
          >
            <div className="image-frame h-72">
              <Image
                src="/images/kitchens/kitchenshero.jpg"
                alt="Modular Kitchens"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-7">
              <div className="flex justify-between gap-3">
                <h3 className="h3">Modular Kitchens</h3>
                <ArrowUpRight className="text-luxuryGold" />
              </div>
              <p className="muted mt-3 text-sm leading-7">
                Architectural kitchens planned around movement, storage, surfaces and daily rituals.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#f4efe4] px-3 py-1 text-[11px] text-ink/65">
                  Straight
                </span>
                <span className="rounded-full bg-[#f4efe4] px-3 py-1 text-[11px] text-ink/65">
                  Parallel
                </span>
                <span className="rounded-full bg-[#f4efe4] px-3 py-1 text-[11px] text-ink/65">
                  L-Shaped
                </span>
                <span className="rounded-full bg-[#f4efe4] px-3 py-1 text-[11px] text-ink/65">
                  U-Shaped
                </span>
                <span className="rounded-full bg-[#f4efe4] px-3 py-1 text-[11px] text-ink/65">
                  Island
                </span>
              </div>
            </div>
          </Link>

          {/* SERVICE 2: Wardrobes */}
          <Link
            href="/wardrobes"
            className="group overflow-hidden rounded-[34px] bg-white shadow-soft"
          >
            <div className="image-frame h-72">
              <Image
                src="/images/wardrobes/slidingWardrobes.jpg"
                alt="Wardrobes"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-7">
              <div className="flex justify-between gap-3">
                <h3 className="h3">Wardrobes</h3>
                <ArrowUpRight className="text-luxuryGold" />
              </div>
              <p className="muted mt-3 text-sm leading-7">
                Quietly luxurious wardrobes with thoughtful interiors, finishes and precision hardware.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#f4efe4] px-3 py-1 text-[11px] text-ink/65">
                  Sliding
                </span>
                <span className="rounded-full bg-[#f4efe4] px-3 py-1 text-[11px] text-ink/65">
                  Hinged
                </span>
                <span className="rounded-full bg-[#f4efe4] px-3 py-1 text-[11px] text-ink/65">
                  Walk-In
                </span>
                <span className="rounded-full bg-[#f4efe4] px-3 py-1 text-[11px] text-ink/65">
                  Custom Storage
                </span>
              </div>
            </div>
          </Link>

          {/* SERVICE 3: Custom Furniture */}
          <Link
            href="/furniture"
            className="group overflow-hidden rounded-[34px] bg-white shadow-soft"
          >
            <div className="image-frame h-72">
              <Image
                src="/images/furniture/officetables.jpg"
                alt="Custom Furniture"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-7">
              <div className="flex justify-between gap-3">
                <h3 className="h3">Custom Furniture</h3>
                <ArrowUpRight className="text-luxuryGold" />
              </div>
              <p className="muted mt-3 text-sm leading-7">
                Tailored TV units, office tables, storage walls and furniture pieces for modern homes.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#f4efe4] px-3 py-1 text-[11px] text-ink/65">
                  TV Units
                </span>
                <span className="rounded-full bg-[#f4efe4] px-3 py-1 text-[11px] text-ink/65">
                  Office Tables
                </span>
                <span className="rounded-full bg-[#f4efe4] px-3 py-1 text-[11px] text-ink/65">
                  Storage
                </span>
                <span className="rounded-full bg-[#f4efe4] px-3 py-1 text-[11px] text-ink/65">
                  Entertainment
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
