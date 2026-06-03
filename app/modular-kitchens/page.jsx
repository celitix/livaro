import Image from "next/image";
import { PageHero } from "@/components/shared/page-hero";
import { CTABanner } from "@/components/sections/cta-banner";
import { img } from "@/lib/constants";

export const metadata = {
  title: "Modular Kitchens",
  description:
    "Premium straight, parallel, L-shaped, U-shaped and island kitchens by LIVARO.",
};

const kitchens = [
  {
    title: "Straight Kitchen",
    image: img.straightKitchen,
  },
  {
    title: "Parallel Kitchen",
    image: img.parallelKitchen,
  },
  {
    title: "L-Shaped Kitchen",
    image: img.lShapeKitchen,
  },
  {
    title: "U-Shaped Kitchen",
    image: img.uShapeKitchen,
  },
  {
    title: "Island Kitchen",
    image: img.islandKitchen,
  },
];

export default function Kitchens() {
  return (
    <>
      <PageHero
        label="Modular Kitchens"
        title="Kitchens designed for movement, storage and elegant daily rituals."
        text="From compact straight kitchens to statement island layouts, every LIVARO kitchen is planned with premium materials, modern hardware and refined finishing."
        image={img.kitchenHero}
      />

      <section className="section bg-white">
        <div className="container-lux grid gap-8">
          {kitchens.map((k, i) => (
            <div
              key={k.title}
              className={`grid items-center gap-8 rounded-[34px] bg-[#fbfaf7] p-6 md:grid-cols-2 ${
                i % 2
                  ? "md:[&>*:first-child]:order-2"
                  : ""
              }`}
            >
              <div className="image-frame h-[320px] rounded-[28px]">
                <Image
                  src={k.image}
                  alt={k.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="label">0{i + 1}</p>

                <h2 className="h3 mt-3">
                  {k.title}
                </h2>

                <p className="muted mt-4 leading-8">
                  Designed with surface durability,
                  storage zones, appliance
                  integration, smooth hardware and
                  a cohesive luxury finish palette.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}