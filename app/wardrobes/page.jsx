import Image from "next/image";
import { CTABanner } from '@/components/sections/cta-banner';

export const metadata={title:'Wardrobes',description:'Sliding, hinged, walk-in and custom wardrobes by LIVARO.'};

export default function Wardrobes(){
  return (
    <>
      <section className="relative overflow-hidden texture noise">
        <div className="container-lux grid min-h-[430px] items-center gap-10 py-16 md:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="label">Wardrobes</p>
            <h1 className="h1 mt-4 max-w-2xl">
              Quietly luxurious wardrobes with thoughtful storage interiors.
            </h1>
            <p className="muted mt-5 max-w-xl leading-8">
              From sliding wardrobes to walk-in dressing rooms, LIVARO designs storage that feels seamless, premium and easy to use.
            </p>
          </div>
          <div className="relative image-frame h-[450px] rounded-[34px] shadow-luxury overflow-hidden">
            <Image
              src="/images/wardrobes/slidingWardrobes.jpg"
              alt="Quietly luxurious wardrobes with thoughtful storage interiors."
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-lux grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-[30px] bg-[#f7f2e8] p-8">
            <h3 className="text-xl font-medium">Sliding</h3>
            <p className="muted mt-4 leading-7">Premium shutters, internal organizers, lighting options and precision hardware.</p>
          </div>
          <div className="rounded-[30px] bg-[#f7f2e8] p-8">
            <h3 className="text-xl font-medium">Hinged</h3>
            <p className="muted mt-4 leading-7">Premium shutters, internal organizers, lighting options and precision hardware.</p>
          </div>
          <div className="rounded-[30px] bg-[#f7f2e8] p-8">
            <h3 className="text-xl font-medium">Walk-In</h3>
            <p className="muted mt-4 leading-7">Premium shutters, internal organizers, lighting options and precision hardware.</p>
          </div>
          <div className="rounded-[30px] bg-[#f7f2e8] p-8">
            <h3 className="text-xl font-medium">Custom Wardrobes</h3>
            <p className="muted mt-4 leading-7">Premium shutters, internal organizers, lighting options and precision hardware.</p>
          </div>
        </div>
      </section>
      <CTABanner/>
    </>
  );
}
