import SEO from '../components/SEO';
import { company } from '../data/site';

const mapQuery = encodeURIComponent(
  '1B, Michael Mansion, Plot No. 68, Road No. 7, Prabhat Colony, Santacruz East, Mumbai - 400055'
);

const mapSource = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Spectralink Global Logistics Mumbai"
        description="Contact Spectralink Global Logistics Pvt Ltd for air freight, ocean freight, customs clearance and CFS operation inquiries."
        path="/contact"
      />

      <section className="section hero-bg">
        <div className="container grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="font-black uppercase tracking-[0.16em] text-[#FF8A00]">
              Contact Us
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight text-[#0B2D5B] md:text-6xl">
              Visit our Mumbai office
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Speak with our logistics team about air freight, ocean freight,
              customs clearance, and CFS operations.
            </p>

            <div className="card mt-8 space-y-6 p-7">
              <div>
                <p className="text-sm font-black uppercase tracking-wider text-[#FF8A00]">
                  Company
                </p>

                <p className="mt-2 text-lg font-bold text-[#0B2D5B]">
                  {company.name}
                </p>
              </div>

              <div>
                <p className="text-sm font-black uppercase tracking-wider text-[#FF8A00]">
                  Address
                </p>

                <p className="mt-2 max-w-md leading-7 text-slate-600">
                  {company.address}
                </p>
              </div>

              <div>
                <p className="text-sm font-black uppercase tracking-wider text-[#FF8A00]">
                  Phone
                </p>

                <a
                  href={`tel:${company.phone}`}
                  className="mt-2 inline-block font-bold text-[#0B2D5B] transition hover:text-[#FF8A00]"
                >
                  {company.phone}
                </a>
              </div>

              <div>
                <p className="text-sm font-black uppercase tracking-wider text-[#FF8A00]">
                  Email
                </p>

                <a
                  href={`mailto:${company.email}`}
                  className="mt-2 inline-block break-all font-bold text-[#0B2D5B] transition hover:text-[#FF8A00]"
                >
                  {company.email}
                </a>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mt-2 inline-flex"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          <div className="card overflow-hidden p-3 sm:p-4">
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200">
              <iframe
                title="Spectralink Global Logistics office location"
                src={mapSource}
                className="h-[520px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="px-3 pb-2 pt-5 sm:px-4">
              <p className="text-sm font-semibold text-slate-500">
                Find us at Prabhat Colony, Santacruz East, Mumbai.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}