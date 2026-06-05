import Image from "next/image";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata = {
  title: "Modular Kitchens",
  description:
    "Premium straight, parallel, L-shaped, U-shaped and island kitchens by LIVARO.",
};

export default function Kitchens() {
  return (
    <>
      <section className="relative overflow-hidden texture noise">
        <div className="container-lux grid min-h-[430px] items-center gap-10 py-16 md:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="label">Modular Kitchens</p>
            <h1 className="h1 mt-4 max-w-2xl">
              Kitchens designed for movement, storage and elegant daily rituals.
            </h1>
            <p className="muted mt-5 max-w-xl leading-8">
              From compact straight kitchens to statement island layouts, every LIVARO kitchen is planned with premium materials, modern hardware and refined finishing.
            </p>
          </div>
          <div className="relative image-frame h-[450px] rounded-[34px] shadow-luxury overflow-hidden">
            <Image
              src="/images/kitchens/kitchenshero.jpg"
              alt="Kitchens designed for movement, storage and elegant daily rituals."
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-lux grid gap-8">
          {/* Straight Kitchen */}
          <div className="grid items-center gap-8 rounded-[34px] bg-[#fbfaf7] p-6 md:grid-cols-2">
            <div className="image-frame h-[320px] rounded-[28px]">
              <Image
                src="/images/kitchens/straight.jpg"
                alt="Straight Kitchen"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="label">01</p>
              <h2 className="h3 mt-3">Straight Kitchen</h2>
              <p className="muted mt-4 leading-8">
                Designed with surface durability, storage zones, appliance
                integration, smooth hardware and a cohesive luxury finish palette.
              </p>
            </div>
          </div>

          {/* Parallel Kitchen */}
          <div className="grid items-center gap-8 rounded-[34px] bg-[#fbfaf7] p-6 md:grid-cols-2 md:[&>*:first-child]:order-2">
            <div className="image-frame h-[320px] rounded-[28px]">
              <Image
                src="/images/kitchens/parallel.jpg"
                alt="Parallel Kitchen"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="label">02</p>
              <h2 className="h3 mt-3">Parallel Kitchen</h2>
              <p className="muted mt-4 leading-8">
                Designed with surface durability, storage zones, appliance
                integration, smooth hardware and a cohesive luxury finish palette.
              </p>
            </div>
          </div>

          {/* L-Shaped Kitchen */}
          <div className="grid items-center gap-8 rounded-[34px] bg-[#fbfaf7] p-6 md:grid-cols-2">
            <div className="image-frame h-[320px] rounded-[28px]">
              <Image
                src="/images/kitchens/lshape.jpg"
                alt="L-Shaped Kitchen"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="label">03</p>
              <h2 className="h3 mt-3">L-Shaped Kitchen</h2>
              <p className="muted mt-4 leading-8">
                Designed with surface durability, storage zones, appliance
                integration, smooth hardware and a cohesive luxury finish palette.
              </p>
            </div>
          </div>

          {/* U-Shaped Kitchen */}
          <div className="grid items-center gap-8 rounded-[34px] bg-[#fbfaf7] p-6 md:grid-cols-2 md:[&>*:first-child]:order-2">
            <div className="image-frame h-[320px] rounded-[28px]">
              <Image
                src="/images/kitchens/ushape.jpg"
                alt="U-Shaped Kitchen"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="label">04</p>
              <h2 className="h3 mt-3">U-Shaped Kitchen</h2>
              <p className="muted mt-4 leading-8">
                Designed with surface durability, storage zones, appliance
                integration, smooth hardware and a cohesive luxury finish palette.
              </p>
            </div>
          </div>

          {/* Island Kitchen */}
          <div className="grid items-center gap-8 rounded-[34px] bg-[#fbfaf7] p-6 md:grid-cols-2">
            <div className="image-frame h-[320px] rounded-[28px]">
              <Image
                src="/images/kitchens/island.jpg"
                alt="Island Kitchen"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="label">05</p>
              <h2 className="h3 mt-3">Island Kitchen</h2>
              <p className="muted mt-4 leading-8">
                Designed with surface durability, storage zones, appliance
                integration, smooth hardware and a cohesive luxury finish palette.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}