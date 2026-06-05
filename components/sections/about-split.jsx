import Image from "next/image";
import Link from "next/link";
export function AboutSplit() {
  return (
    <section className="section bg-white">
      <div className="container-lux grid items-center gap-12 lg:grid-cols-2">
        <div className="image-frame h-[560px] rounded-[42px] shadow-luxury">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
            alt="Luxury interiors studio"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="label">About LIVARO</p>
          <h2 className="h2 mt-4">Designing Functional Luxury</h2>
          <p className="muted mt-6 leading-8">
            LIVARO creates refined modular spaces for modern Indian homes —
            balancing storage, material richness, craftsmanship and calm visual
            composition.
          </p>
          <p className="muted mt-4 leading-8">
            Each kitchen, wardrobe and furniture unit is built around how the
            family lives, moves and uses the space every day.
          </p>
          <Link href="/about" className="btn-primary mt-8">
            Discover Story
          </Link>
        </div>
      </div>
    </section>
  );
}
