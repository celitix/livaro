import Image from "next/image";
import { ContactForm } from "@/components/forms/contact-form";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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
            <div className="flex items-center gap-2">
              <MdEmail className="text-lg" />
              <p> info@livarostudio.com</p>
            </div>
            <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-lg" />
              <p>+91 9314-00-3146</p>
            </div>
            <div className="flex items-start gap-2">
                <FaLocationDot className="text-lg mt-1" />
              <p>
                22, I Floor, Biswa Nagar,
                <br />
                New Sanganer Road,
                <br />
                Jaipur, Rajasthan
              </p>
            </div>
            </div>
            <div className="mt-8 overflow-hidden rounded-[26px] border border-white/10 shadow-soft">
              <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.613905276216!2d75.76518077624551!3d26.884005261322198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a39c00b48d%3A0x979a9b7673dfc5b9!2sLIVARO!5e0!3m2!1sen!2sus!4v1780658002960!5m2!1sen!2sus"
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
