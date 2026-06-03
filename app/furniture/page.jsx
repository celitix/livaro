import { PageHero } from "@/components/shared/page-hero";
import { CTABanner } from "@/components/sections/cta-banner";
import { img } from "@/lib/constants";
export const metadata = {
  title: "Furniture",
  description:
    "Custom TV units, office tables, entertainment units and storage furniture by LIVARO.",
};
export default function Furniture() {
  return (
    <>
      <PageHero
        label="Custom Furniture"
        title="Furniture pieces crafted to complete your interior story."
        text="Tailored TV units, office tables, entertainment units and storage furniture designed with proportion, finish and function in mind."
        image={img.furniture}
      />
      <section className="section bg-white">
        <div className="container-lux grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {[
            "TV Units",
            "Office Tables",
            "Entertainment Units",
            "Storage Furniture",
            "Custom Furniture",
          ].map((x) => (
            <div
              className="rounded-[30px] border border-ink/10 bg-white p-7 shadow-soft"
              key={x}
            >
              <h3 className="text-lg font-medium">{x}</h3>
              <p className="muted mt-4 text-sm leading-7">
                Made-to-measure design with premium finishes and practical
                detailing.
              </p>
            </div>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
