import Image from "next/image";

export const metadata={title:'Blog',description:'Interior design guides and modular furniture ideas by LIVARO.'};

export default function Blog(){
  return (
    <>
      <section className="relative overflow-hidden texture noise">
        <div className="container-lux grid min-h-[430px] items-center gap-10 py-16 md:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="label">Journal</p>
            <h1 className="h1 mt-4 max-w-2xl">
              Interior notes for refined modern homes.
            </h1>
            <p className="muted mt-5 max-w-xl leading-8">
              Guides, ideas and inspiration for kitchens, wardrobes, furniture, finishes and spatial planning.
            </p>
          </div>
          <div className="relative image-frame h-[450px] rounded-[34px] shadow-luxury overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
              alt="Interior notes for refined modern homes."
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-lux grid gap-6 md:grid-cols-3">
          <article className="rounded-[30px] bg-[#fbfaf7] p-7 shadow-soft">
            <p className="label">Design Guide</p>
            <h2 className="mt-5 text-xl font-medium leading-7">How to Choose a Modular Kitchen Layout</h2>
            <p className="muted mt-4 text-sm leading-7">A practical guide to material selection, layout decisions and timeless interior composition.</p>
          </article>
          <article className="rounded-[30px] bg-[#fbfaf7] p-7 shadow-soft">
            <p className="label">Design Guide</p>
            <h2 className="mt-5 text-xl font-medium leading-7">Wardrobe Storage Ideas for Modern Homes</h2>
            <p className="muted mt-4 text-sm leading-7">A practical guide to material selection, layout decisions and timeless interior composition.</p>
          </article>
          <article className="rounded-[30px] bg-[#fbfaf7] p-7 shadow-soft">
            <p className="label">Design Guide</p>
            <h2 className="mt-5 text-xl font-medium leading-7">Materials That Make Interiors Feel Premium</h2>
            <p className="muted mt-4 text-sm leading-7">A practical guide to material selection, layout decisions and timeless interior composition.</p>
          </article>
        </div>
      </section>
    </>
  );
}
