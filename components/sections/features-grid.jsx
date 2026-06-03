import { features } from "@/lib/constants";
import {
  Gem,
  Hammer,
  Layers,
  Maximize2,
  Ruler,
  ShieldCheck,
} from "lucide-react";
const icons = [Gem, Hammer, Layers, Maximize2, Ruler, ShieldCheck];
export function FeaturesGrid() {
  return (
    <section className="section bg-[#fbfaf7]">
      <div className="container-lux">
        <div className="max-w-2xl">
          <p className="label">Why LIVARO</p>
          <h2 className="h2 mt-4">Premium execution at every layer.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = icons[i];
            return (
              <div
                className="rounded-[28px] border border-ink/10 bg-white p-7 shadow-soft hover:-translate-y-1 transition"
                key={f}
              >
                <Icon className="text-deepTeal" />
                <h3 className="mt-6 text-lg font-medium">{f}</h3>
                <p className="muted mt-3 text-sm leading-7">
                  Thoughtfully selected details that improve durability,
                  usability and visual harmony.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
