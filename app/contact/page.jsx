import Image from "next/image";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata = {
  title: "Contact",
  description:
    "Book a free consultation with LIVARO for modular kitchens, wardrobes and furniture.",
};

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden texture noise">
        <div className="container-lux grid min-h-[430px] items-center gap-10 py-16 md:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="label">Contact</p>
            <h1 className="h1 mt-4 max-w-2xl">
              Let’s begin with your space, lifestyle and vision.
            </h1>
            <p className="muted mt-5 max-w-xl leading-8">
              Share your requirement and our team will help plan a premium modular solution for your home.
            </p>
          </div>
          <div className="relative image-frame h-[450px] rounded-[34px] shadow-luxury overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85"
              alt="Let’s begin with your space, lifestyle and vision."
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-lux grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="rounded-[34px] bg-deepTeal p-8 text-white">
            <p className="label">Reach Us</p>
            <h2 className="h3 mt-5">Book a Free Consultation</h2>
            <div className="mt-8 space-y-4 text-white/75">
              <p>info@livarostudio.com</p>
              <p>+91 9314-00-3146</p>
              <p>Jaipur, Rajasthan</p>
            </div>
            <div className="mt-8 overflow-hidden rounded-[26px] border border-white/10 shadow-soft">
              <iframe
                src="https://maps.google.com/maps?q=22%20I%20Floor%20Biswa%20Nagar%20New%20Sanganer%20Road%20Jaipur%20Rajasthan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
