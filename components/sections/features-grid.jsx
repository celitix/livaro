import {
  Gem,
  Hammer,
  Layers,
  Maximize2,
  Ruler,
  ShieldCheck,
} from "lucide-react";

export function FeaturesGrid() {
  return (
    <section className="section bg-[#fbfaf7]">
      <div className="container-lux">
        <div className="max-w-2xl">
          <p className="label">Why LIVARO</p>
          <h2 className="h2 mt-4">Premium execution at every layer.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[28px] border border-ink/10 bg-white p-7 shadow-soft hover:-translate-y-1 transition">
            <Gem className="text-deepTeal" />
            <h3 className="mt-6 text-lg font-medium">Custom Design</h3>
            <p className="muted mt-3 text-sm leading-7">
              Thoughtfully selected details that improve durability,
              usability and visual harmony.
            </p>
          </div>

          <div className="rounded-[28px] border border-ink/10 bg-white p-7 shadow-soft hover:-translate-y-1 transition">
            <Hammer className="text-deepTeal" />
            <h3 className="mt-6 text-lg font-medium">Space Optimization</h3>
            <p className="muted mt-3 text-sm leading-7">
              Thoughtfully selected details that improve durability,
              usability and visual harmony.
            </p>
          </div>

          <div className="rounded-[28px] border border-ink/10 bg-white p-7 shadow-soft hover:-translate-y-1 transition">
            <Layers className="text-deepTeal" />
            <h3 className="mt-6 text-lg font-medium">Premium Materials</h3>
            <p className="muted mt-3 text-sm leading-7">
              Thoughtfully selected details that improve durability,
              usability and visual harmony.
            </p>
          </div>

          <div className="rounded-[28px] border border-ink/10 bg-white p-7 shadow-soft hover:-translate-y-1 transition">
            <Maximize2 className="text-deepTeal" />
            <h3 className="mt-6 text-lg font-medium">Expert Craftsmanship</h3>
            <p className="muted mt-3 text-sm leading-7">
              Thoughtfully selected details that improve durability,
              usability and visual harmony.
            </p>
          </div>

          <div className="rounded-[28px] border border-ink/10 bg-white p-7 shadow-soft hover:-translate-y-1 transition">
            <Ruler className="text-deepTeal" />
            <h3 className="mt-6 text-lg font-medium">Precision Installation</h3>
            <p className="muted mt-3 text-sm leading-7">
              Thoughtfully selected details that improve durability,
              usability and visual harmony.
            </p>
          </div>

          <div className="rounded-[28px] border border-ink/10 bg-white p-7 shadow-soft hover:-translate-y-1 transition">
            <ShieldCheck className="text-deepTeal" />
            <h3 className="mt-6 text-lg font-medium">End-to-End Service</h3>
            <p className="muted mt-3 text-sm leading-7">
              Thoughtfully selected details that improve durability,
              usability and visual harmony.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
