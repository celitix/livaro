import Image from "next/image";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata = {
  title: "Office Furniture",
  description:
    "Premium office furniture including executive desks, workstations, storage and conference tables by LIVARO.",
};

export default function OfficeFurniture() {
  return (
    <>
      <section className="relative overflow-hidden texture noise">
        <div className="container-lux grid min-h-[430px] items-center gap-10 py-16 md:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="label">Office Furniture</p>
            <h1 className="h1 mt-4 max-w-2xl">
              Professional furniture designed for productive workspaces.
            </h1>
            <p className="muted mt-5 max-w-xl leading-8">
              Executive desks, ergonomic workstations, meeting tables and office storage solutions crafted with precision.
            </p>
          </div>
          <div className="relative image-frame h-[450px] rounded-[34px] shadow-luxury overflow-hidden">
            <Image
              src="/images/furniture/officetables.jpg"
              alt="Professional furniture designed for productive workspaces."
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
            <h3 className="text-lg font-medium">Executive Tables</h3>
            <p className="muted mt-4 text-sm leading-7">
              Elegant office furniture engineered for productivity,
              durability and sophisticated interiors.
            </p>
          </div>
          <div className="rounded-[30px] border border-ink/10 bg-white p-7 shadow-soft">
            <h3 className="text-lg font-medium">Office Workstations</h3>
            <p className="muted mt-4 text-sm leading-7">
              Elegant office furniture engineered for productivity,
              durability and sophisticated interiors.
            </p>
          </div>
          <div className="rounded-[30px] border border-ink/10 bg-white p-7 shadow-soft">
            <h3 className="text-lg font-medium">Conference Tables</h3>
            <p className="muted mt-4 text-sm leading-7">
              Elegant office furniture engineered for productivity,
              durability and sophisticated interiors.
            </p>
          </div>
          <div className="rounded-[30px] border border-ink/10 bg-white p-7 shadow-soft">
            <h3 className="text-lg font-medium">Office Storage</h3>
            <p className="muted mt-4 text-sm leading-7">
              Elegant office furniture engineered for productivity,
              durability and sophisticated interiors.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}