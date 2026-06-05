import Image from "next/image";

import { CTABanner } from "@/components/sections/cta-banner";

export const metadata = {
  title: "About",
  description: "LIVARO brand story, values and design philosophy.",
};

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden texture noise">
        <div className="container-lux grid min-h-[430px] items-center gap-10 py-16 md:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="label">About Studio</p>
            <h1 className="h1 mt-4 max-w-2xl">
              A refined interior studio for modern modular living.
            </h1>
            <p className="muted mt-5 max-w-xl leading-8">
              LIVARO blends design sensitivity, premium materials and precise execution to create spaces that feel calm, functional and deeply personal.
            </p>
          </div>
          <div className="relative image-frame h-[450px] rounded-[34px] shadow-luxury overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
              alt="A refined interior studio for modern modular living."
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
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
          <div className="rounded-[30px] bg-[#f7f2e8] p-8">
            <span className="text-luxuryGold">01</span>
            <h3 className="mt-6 text-xl font-medium">Vision</h3>
            <p className="muted mt-3 leading-7">
              To create premium modular interiors that are beautiful, durable
              and tailored to every home.
            </p>
          </div>
          <div className="rounded-[30px] bg-[#f7f2e8] p-8">
            <span className="text-luxuryGold">02</span>
            <h3 className="mt-6 text-xl font-medium">Mission</h3>
            <p className="muted mt-3 leading-7">
              To create premium modular interiors that are beautiful, durable
              and tailored to every home.
            </p>
          </div>
          <div className="rounded-[30px] bg-[#f7f2e8] p-8">
            <span className="text-luxuryGold">03</span>
            <h3 className="mt-6 text-xl font-medium">Values</h3>
            <p className="muted mt-3 leading-7">
              To create premium modular interiors that are beautiful, durable
              and tailored to every home.
            </p>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
