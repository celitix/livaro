import Image from "next/image";
import { MasonryGrid } from '@/components/gallery/masonry-grid';

export const metadata={title:'Projects',description:'LIVARO portfolio of modular kitchens, wardrobes and custom furniture projects.'};

export default function Projects(){
  return (
    <>
      <section className="relative overflow-hidden texture noise">
        <div className="container-lux grid min-h-[430px] items-center gap-10 py-16 md:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="label">Portfolio</p>
            <h1 className="h1 mt-4 max-w-2xl">
              A curated gallery of refined modular spaces.
            </h1>
            <p className="muted mt-5 max-w-xl leading-8">
              Explore kitchens, wardrobes and furniture compositions designed with premium materials and calm architectural detail.
            </p>
          </div>
          <div className="relative image-frame h-[450px] rounded-[34px] shadow-luxury overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85"
              alt="A curated gallery of refined modular spaces."
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-lux">
          <MasonryGrid/>
        </div>
      </section>
    </>
  );
}
