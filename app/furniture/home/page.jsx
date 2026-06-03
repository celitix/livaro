import { PageHero } from "@/components/shared/page-hero";
import { CTABanner } from "@/components/sections/cta-banner";
import { img } from "@/lib/constants";

export const metadata = {
  title: "Home Furniture",
  description:
    "Luxury home furniture including TV units, entertainment units, storage and bespoke furniture by LIVARO.",
};

export default function HomeFurniture() {
  return (
    <>
      <PageHero
        label="Home Furniture"
        title="Luxury furniture crafted for modern living spaces."
        text="Beautifully designed TV units, entertainment consoles, storage solutions and custom furniture tailored for your home."
        image={img.furniture}
      />

      <section className="section bg-white">
        <div className="container-lux grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {[
            "TV Units",
            "Entertainment Units",
            "Storage Furniture",
            "Custom Home Furniture",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[30px] border border-ink/10 bg-white p-7 shadow-soft"
            >
              <h3 className="text-lg font-medium">
                {item}
              </h3>

              <p className="muted mt-4 text-sm leading-7">
                Premium home furniture designed with refined aesthetics,
                intelligent storage and timeless craftsmanship.
              </p>
            </div>
          ))}

        </div>
      </section>

      <CTABanner />
    </>
  );
}