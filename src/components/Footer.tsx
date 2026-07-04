import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

import { company, nav, services } from '../data/site';

const EMAIL_ADDRESS = 'hrhead@spectralinkglobal.com';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white pt-6 text-[#0B2D5B] lg:pt-8">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-55"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(11, 45, 91, 0.07) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(11, 45, 91, 0.07) 1px,
              transparent 1px
            )
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Soft overlay to keep text readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/70 to-white"
      />

      <div className="container relative z-10 pb-10 lg:pb-12">
        <div className="grid gap-y-10 xl:grid-cols-12 xl:items-start xl:gap-x-12">
          {/* Brand */}
          <div className="xl:col-span-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-4"
              aria-label="Spectralink Global home"
            >
              <img
                src="/Logo.png"
                alt="Spectralink Global Logistics"
                className="h-17 w-17 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <span className="flex flex-col justify-center">
                <span className="block text-2xl font-black leading-none tracking-tight text-[#0B2D5B]">
                  Spectralink Global
                </span>

                <span className="mt-2 block text-sm font-semibold leading-none text-[#0B2D5B]/75">
                  Freight &amp; Logistics
                </span>
              </span>
            </Link>

            <p className="mt-7 max-w-md text-lg leading-8 text-[#0B2D5B]/85">
              Reliable air freight, ocean freight, customs clearance, and CFS
              operations for businesses moving cargo across global markets.
            </p>

            <a
              href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
                'Logistics Enquiry - Spectralink Global'
              )}`}
              className="group mt-7 inline-flex items-center gap-2 text-base font-bold text-[#0B2D5B] transition-colors duration-200 hover:text-[#FF9D2E]"
            >
              Email our logistics team
              <ArrowUpRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Services */}
          <div className="xl:col-span-2">
            <h4 className="pt-1 text-sm font-black uppercase tracking-[0.18em] text-[#0B2D5B]">
              Services
            </h4>

            <ul className="mt-7 space-y-4">
              {services.map((service) => (
                <li key={service.title}>
                  <Link
                    to="/services"
                    className="text-base leading-7 text-[#0B2D5B]/85 transition-colors duration-200 hover:text-[#FF9D2E]"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="xl:col-span-2">
            <h4 className="pt-1 text-sm font-black uppercase tracking-[0.18em] text-[#0B2D5B]">
              Explore
            </h4>

            <ul className="mt-7 space-y-4">
              {nav.map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-base leading-7 text-[#0B2D5B]/85 transition-colors duration-200 hover:text-[#FF9D2E]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="xl:col-span-4">
            <h4 className="pt-1 text-sm font-black uppercase tracking-[0.18em] text-[#0B2D5B]">
              Contact
            </h4>

            <div className="mt-7 space-y-6 text-base text-[#0B2D5B]/85">
              <div className="flex items-start gap-4">
                <MapPin
                  size={20}
                  className="mt-1 shrink-0 text-[#0B2D5B]"
                />

                <p className="max-w-md leading-8">{company.address}</p>
              </div>

              <a
                href={`tel:${company.phone}`}
                className="flex items-center gap-4 transition-colors duration-200 hover:text-[#FF9D2E]"
              >
                <Phone size={20} className="shrink-0 text-[#0B2D5B]" />
                <span>{company.phone}</span>
              </a>

              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="flex items-center gap-4 break-all transition-colors duration-200 hover:text-[#FF9D2E]"
              >
                <Mail size={20} className="shrink-0 text-[#0B2D5B]" />
                <span>{EMAIL_ADDRESS}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-[#0B2D5B]/15 bg-white/85 backdrop-blur-sm">
        <div className="container flex flex-col gap-4 py-5 text-sm text-[#0B2D5B]/75 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Spectralink Global Logistics Pvt. Ltd.
            All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <Link
              to="/privacy-policy"
              className="transition-colors duration-200 hover:text-[#FF9D2E]"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="transition-colors duration-200 hover:text-[#FF9D2E]"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}