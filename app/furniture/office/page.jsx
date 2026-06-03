import { PageHero } from "@/components/shared/page-hero";
import { CTABanner } from "@/components/sections/cta-banner";
import { img } from "@/lib/constants";

export const metadata = {
  title: "Office Furniture",
  description:
    "Premium office furniture including executive desks, workstations, storage and conference tables by LIVARO.",
};

export default function OfficeFurniture() {
  return (
    <>
      <PageHero
        label="Office Furniture"
        title="Professional furniture designed for productive workspaces."
        text="Executive desks, ergonomic workstations, meeting tables and office storage solutions crafted with precision."
        image={img.furniture}
      />

      <section className="section bg-white">
        <div className="container-lux grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {[
            "Executive Tables",
            "Office Workstations",
            "Conference Tables",
            "Office Storage",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[30px] border border-ink/10 bg-white p-7 shadow-soft"
            >
              <h3 className="text-lg font-medium">
                {item}
              </h3>

              <p className="muted mt-4 text-sm leading-7">
                Elegant office furniture engineered for productivity,
                durability and sophisticated interiors.
              </p>
            </div>
          ))}

        </div>
      </section>

      <CTABanner />
    </>
  );
}