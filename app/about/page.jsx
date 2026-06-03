import Image from "next/image";

import { CTABanner } from "@/components/sections/cta-banner";
import { img } from "@/lib/constants";
import { PageHero } from "@/components/shared/page-hero";

export const metadata = {
  title: "About",
  description: "LIVARO brand story, values and design philosophy.",
};
export default function About() {
  return (
    <>
      <PageHero
        label="About Studio"
        title="A refined interior studio for modern modular living."
        text="LIVARO blends design sensitivity, premium materials and precise execution to create spaces that feel calm, functional and deeply personal."
        image={img.about}
      />
      <section className="section bg-white">
        <div className="container-lux grid gap-10 lg:grid-cols-2">
          <div>
            <p className="label">Brand Story</p>
            <h2 className="h2 mt-4">
              Functional luxury, composed around everyday life.
            </h2>
          </div>
          <div className="space-y-5 text-ink/65 leading-8">
            <p>
              We design kitchens, wardrobes and furniture with a focus on
              proportion, circulation, storage logic and refined finishes.
            </p>
            <p>
              Our approach is understated: quiet materials, balanced lines and
              precise detailing that makes the home feel more effortless.
            </p>
          </div>
        </div>
        <div className="container-lux mt-12 grid gap-6 md:grid-cols-3">
          {["Vision", "Mission", "Values"].map((v, i) => (
            <div className="rounded-[30px] bg-[#f7f2e8] p-8" key={v}>
              <span className="text-luxuryGold">0{i + 1}</span>
              <h3 className="mt-6 text-xl font-medium">{v}</h3>
              <p className="muted mt-3 leading-7">
                To create premium modular interiors that are beautiful, durable
                and tailored to every home.
              </p>
            </div>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
