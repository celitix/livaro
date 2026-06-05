export function Testimonials() {
  return (
    <section className="section bg-white">
      <div className="container-lux">
        <p className="label">Client Notes</p>
        <h2 className="h2 mt-4">Quiet confidence from homeowners.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-[30px] bg-[#f7f2e8] p-8">
            <p className="text-xl leading-8 tracking-[-.02em]">
              “The kitchen feels premium, calm and extremely practical. The
              finishes are exactly what we imagined.”
            </p>
            <p className="mt-7 text-sm font-semibold text-deepTeal">
              Aarav Sharma
            </p>
          </div>
          <div className="rounded-[30px] bg-[#f7f2e8] p-8">
            <p className="text-xl leading-8 tracking-[-.02em]">
              “LIVARO understood our wardrobe storage needs and gave us a
              beautiful, clean solution.”
            </p>
            <p className="mt-7 text-sm font-semibold text-deepTeal">
              Nisha Mehta
            </p>
          </div>
          <div className="rounded-[30px] bg-[#f7f2e8] p-8">
            <p className="text-xl leading-8 tracking-[-.02em]">
              “The installation quality and coordination were excellent from
              start to finish.”
            </p>
            <p className="mt-7 text-sm font-semibold text-deepTeal">
              Rohit Jain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
