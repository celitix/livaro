import Image from "next/image";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata = {
  title: "Home Furniture",
  description:
    "Luxury home furniture including TV units, entertainment units, storage and bespoke furniture by LIVARO.",
};

export default function HomeFurniture() {
  return (
    <>
      <section className="relative overflow-hidden texture noise">
        <div className="container-lux grid min-h-[430px] items-center gap-10 py-16 md:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="label">Home Furniture</p>
            <h1 className="h1 mt-4 max-w-2xl">
              Luxury furniture crafted for modern living spaces.
            </h1>
            <p className="muted mt-5 max-w-xl leading-8">
              Beautifully designed TV units, entertainment consoles, storage solutions and custom furniture tailored for your home.
            </p>
          </div>
          <div className="relative image-frame h-[450px] rounded-[34px] shadow-luxury overflow-hidden">
            <Image
              src="/images/furniture/officetables.jpg"
              alt="Luxury furniture crafted for modern living spaces."
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-lux grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-[30px] border border-ink/10 bg-white p-7 shadow-soft">
            <h3 className="text-lg font-medium">TV Units</h3>
            <p className="muted mt-4 text-sm leading-7">
              Premium home furniture designed with refined aesthetics,
              intelligent storage and timeless craftsmanship.
            </p>
          </div>
          <div className="rounded-[30px] border border-ink/10 bg-white p-7 shadow-soft">
            <h3 className="text-lg font-medium">Entertainment Units</h3>
            <p className="muted mt-4 text-sm leading-7">
              Premium home furniture designed with refined aesthetics,
              intelligent storage and timeless craftsmanship.
            </p>
          </div>
          <div className="rounded-[30px] border border-ink/10 bg-white p-7 shadow-soft">
            <h3 className="text-lg font-medium">Storage Furniture</h3>
            <p className="muted mt-4 text-sm leading-7">
              Premium home furniture designed with refined aesthetics,
              intelligent storage and timeless craftsmanship.
            </p>
          </div>
          <div className="rounded-[30px] border border-ink/10 bg-white p-7 shadow-soft">
            <h3 className="text-lg font-medium">Custom Home Furniture</h3>
            <p className="muted mt-4 text-sm leading-7">
              Premium home furniture designed with refined aesthetics,
              intelligent storage and timeless craftsmanship.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}