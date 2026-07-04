import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

import { company, nav, services } from '../data/site';

const EMAIL_ADDRESS = 'hrhead@spectralinkglobal.com';

export default function Footer() {
  return (
<footer className="bg-[#061b38] pt-10 text-white lg:pt-14">
  <div className="container pb-14 lg:pb-16">
    <div className="grid gap-y-14 xl:grid-cols-12 xl:gap-x-16">
          {/* Brand */}
          <div className="xl:col-span-4">
            <Link
              to="/"
              className="inline-flex items-center gap-4"
              aria-label="Spectralink Global home"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#FF8A00] text-2xl font-black text-white">
                S
              </span>

              <span>
                <span className="block text-2xl font-black tracking-tight text-white">
                  Spectralink Global
                </span>

                <span className="mt-1 block text-sm font-semibold text-blue-200">
                  Freight &amp; Logistics
                </span>
              </span>
            </Link>

            <p className="mt-8 max-w-md text-lg leading-8 text-blue-100">
              Reliable air freight, ocean freight, customs clearance, and CFS
              operations for businesses moving cargo across global markets.
            </p>

            <a
              href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
                'Logistics Enquiry - Spectralink Global'
              )}`}
              className="mt-8 inline-flex items-center gap-2 text-base font-bold text-[#FFB15C] transition hover:text-white"
            >
              Email our logistics team
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Services */}
          <div className="xl:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-[0.18em] text-[#FFB15C]">
              Services
            </h4>

            <ul className="mt-7 space-y-4">
              {services.map((service) => (
                <li key={service.title}>
                  <Link
                    to="/services"
                    className="text-base leading-7 text-blue-100 transition hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="xl:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-[0.18em] text-[#FFB15C]">
              Explore
            </h4>

            <ul className="mt-7 space-y-4">
              {nav.map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-base leading-7 text-blue-100 transition hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="xl:col-span-4">
            <h4 className="text-sm font-black uppercase tracking-[0.18em] text-[#FFB15C]">
              Contact
            </h4>

            <div className="mt-7 space-y-6 text-base text-blue-100">
              <div className="flex items-start gap-4">
                <MapPin
                  size={20}
                  className="mt-1 shrink-0 text-[#FFB15C]"
                />

                <p className="max-w-md leading-8">{company.address}</p>
              </div>

              <a
                href={`tel:${company.phone}`}
                className="flex items-center gap-4 transition hover:text-white"
              >
                <Phone size={20} className="shrink-0 text-[#FFB15C]" />
                <span>{company.phone}</span>
              </a>

              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="flex items-center gap-4 break-all transition hover:text-white"
              >
                <Mail size={20} className="shrink-0 text-[#FFB15C]" />
                <span>{EMAIL_ADDRESS}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-5 py-8 text-sm text-blue-200 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Spectralink Global Logistics Pvt. Ltd.
            All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <Link
              to="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="transition hover:text-white"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}