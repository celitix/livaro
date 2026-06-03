import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { brand, img } from "@/lib/constants";
export const metadata = {
  title: "Contact",
  description:
    "Book a free consultation with LIVARO for modular kitchens, wardrobes and furniture.",
};
export default function Contact() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let’s begin with your space, lifestyle and vision."
        text="Share your requirement and our team will help plan a premium modular solution for your home."
        image={img.contact}
      />
      <section className="section bg-white">
        <div className="container-lux grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="rounded-[34px] bg-deepTeal p-8 text-white">
            <p className="label">Reach Us</p>
            <h2 className="h3 mt-5">Book a Free Consultation</h2>
            <div className="mt-8 space-y-4 text-white/75">
              <p>{brand.email}</p>
              <p>{brand.phone}</p>
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
