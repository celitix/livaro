import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/constants";
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
          {services.map((s, i) => (
            <Link
              href={s.href}
              key={s.title}
            //   className={`group overflow-hidden rounded-[34px] bg-white shadow-soft ${i === 0 ? "lg:translate-y-8" : ""}`}
              className={`group overflow-hidden rounded-[34px] bg-white shadow-soft` }
            >
              <div className="image-frame h-72">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="flex justify-between gap-3">
                  <h3 className="h3">{s.title}</h3>
                  <ArrowUpRight className="text-luxuryGold" />
                </div>
                <p className="muted mt-3 text-sm leading-7">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span
                      className="rounded-full bg-[#f4efe4] px-3 py-1 text-[11px] text-ink/65"
                      key={it}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
