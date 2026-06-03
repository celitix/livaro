import Image from "next/image";

export function PageHero({ label, title, text, image }) {
  return (
    <section className="relative overflow-hidden texture noise">
      <div className="container-lux grid min-h-[430px] items-center gap-10 py-16 md:grid-cols-[.9fr_1.1fr]">

        <div>
          <p className="label">{label}</p>

          <h1 className="h1 mt-4 max-w-2xl">
            {title}
          </h1>

          <p className="muted mt-5 max-w-xl leading-8">
            {text}
          </p>
        </div>

        <div className="relative image-frame h-[450px] rounded-[34px] shadow-luxury overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}