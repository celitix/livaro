import Link from "next/link";
export function CTABanner() {
  return (
    <section className="bg-white pb-20">
      <div className="container-lux overflow-hidden flex items-center justify-between rounded-[40px] bg-deepTeal p-10 text-white md:p-14 relative noise">
        <div>
          <p className="label">Start Your Space</p>
          <h2 className="h2 mt-4 max-w-2xl">Let’s Design Your Dream Space</h2>
          <p className="mt-5 max-w-xl text-white/70 leading-8">
            Book a consultation for premium kitchens, wardrobes and custom
            furniture tailored to your home.
          </p>
        </div>
        <div>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#E5C07B] px-6 py-3 text-sm font-bold text-[#0E4A4A] hover:bg-[#d9b06a] transition"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
