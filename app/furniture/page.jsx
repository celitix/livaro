import Image from "next/image";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata = {
  title: "Furniture",
  description:
    "Custom TV units, office tables, entertainment units and storage furniture by LIVARO.",
};

export default function Furniture() {
  return (
    <>
      <section className="relative overflow-hidden texture noise">
        <div className="container-lux grid min-h-[430px] items-center gap-10 py-16 md:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="label">Custom Furniture</p>
            <h1 className="h1 mt-4 max-w-2xl">
              Furniture pieces crafted to complete your interior story.
            </h1>
            <p className="muted mt-5 max-w-xl leading-8">
              Tailored TV units, office tables, entertainment units and storage furniture designed with proportion, finish and function in mind.
            </p>
          </div>
          <div className="relative image-frame h-[450px] rounded-[34px] shadow-luxury overflow-hidden">
            <Image
              src="/images/furniture/officetables.jpg"
              alt="Furniture pieces crafted to complete your interior story."
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-lux grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-[30px] border border-ink/10 bg-white p-7 shadow-soft">
            <h3 className="text-lg font-medium">TV Units</h3>
            <p className="muted mt-4 text-sm leading-7">
              Made-to-measure design with premium finishes and practical detailing.
            </p>
          </div>
          <div className="rounded-[30px] border border-ink/10 bg-white p-7 shadow-soft">
            <h3 className="text-lg font-medium">Office Tables</h3>
            <p className="muted mt-4 text-sm leading-7">
              Made-to-measure design with premium finishes and practical detailing.
            </p>
          </div>
          <div className="rounded-[30px] border border-ink/10 bg-white p-7 shadow-soft">
            <h3 className="text-lg font-medium">Entertainment Units</h3>
            <p className="muted mt-4 text-sm leading-7">
              Made-to-measure design with premium finishes and practical detailing.
            </p>
          </div>
          <div className="rounded-[30px] border border-ink/10 bg-white p-7 shadow-soft">
            <h3 className="text-lg font-medium">Storage Furniture</h3>
            <p className="muted mt-4 text-sm leading-7">
              Made-to-measure design with premium finishes and practical detailing.
            </p>
          </div>
          <div className="rounded-[30px] border border-ink/10 bg-white p-7 shadow-soft">
            <h3 className="text-lg font-medium">Custom Furniture</h3>
            <p className="muted mt-4 text-sm leading-7">
              Made-to-measure design with premium finishes and practical detailing.
            </p>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
