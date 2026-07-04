import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Mail, Menu, Phone, X } from 'lucide-react';

import { company, nav } from '../data/site';

const EMAIL_ADDRESS = 'HRHEAD@SPECTRALINKGLOBAL.COM';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#0B2D5B]/10 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="container flex min-h-[84px] items-center justify-between gap-5 py-2">
          {/* Brand */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-3"
            aria-label="Spectralink Global Logistics Pvt Ltd home"
          >
            <img
              src="/Logo.png"
              alt="Spectralink Global Logistics Pvt Ltd"
              className="h-17 w-17 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <span className="max-w-[220px] text-[17px] font-black leading-[1.18] tracking-tight text-[#0B2D5B] sm:text-lg">
              Spectralink Global
              <br />
              Logistics Pvt Ltd
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden flex-1 items-center justify-center gap-6 xl:flex"
            aria-label="Primary navigation"
          >
            {nav.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  [
                    'whitespace-nowrap rounded-md px-1 py-2 text-sm font-bold transition-colors duration-200',
                    isActive
                      ? 'text-[#FF8A00]'
                      : 'text-[#0B2D5B]/85 hover:text-[#FF8A00]',
                  ].join(' ')
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <a
              href={`tel:${company.phone}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0B2D5B] px-5 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#123c75] hover:shadow-md"
            >
              <Phone size={18} strokeWidth={2.25} />
              <span>Call Our Team</span>
            </a>

            <a
              href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
                'Quote Request - Spectralink Global Logistics Pvt Ltd'
              )}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FF8A00] px-5 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#e67c00] hover:shadow-md"
            >
              <Mail size={18} strokeWidth={2.25} />
              <span>Email Us</span>
            </a>
          </div>

          {/* Tablet/mobile menu trigger */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#0B2D5B]/15 text-[#0B2D5B] transition-colors duration-200 hover:bg-[#0B2D5B]/5 xl:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile and tablet navigation */}
        {open && (
          <div className="border-t border-[#0B2D5B]/10 bg-white xl:hidden">
            <div className="container py-4">
              <nav
                className="grid gap-1"
                aria-label="Mobile primary navigation"
              >
                {nav.map(([label, path]) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      [
                        'rounded-xl px-4 py-3 text-sm font-bold transition-colors duration-200',
                        isActive
                          ? 'bg-[#0B2D5B]/5 text-[#FF8A00]'
                          : 'text-[#0B2D5B] hover:bg-[#0B2D5B]/5',
                      ].join(' ')
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </nav>

              <div className="mt-4 grid gap-3 border-t border-[#0B2D5B]/10 pt-4 sm:grid-cols-2">
                <a
                  href={`tel:${company.phone}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#0B2D5B] px-5 text-sm font-bold text-white transition hover:bg-[#123c75]"
                >
                  <Phone size={18} />
                  Call Our Team
                </a>

                <a
                  href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
                    'Quote Request - Spectralink Global Logistics Pvt Ltd'
                  )}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#FF8A00] px-5 text-sm font-bold text-white transition hover:bg-[#e67c00]"
                >
                  <Mail size={18} />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile sticky contact actions */}
      <div className="mobile-actions">
        <a
          href={`tel:${company.phone}`}
          className="btn btn-secondary flex-1 justify-center"
        >
          <Phone size={17} />
          Call
        </a>

        <a
          href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
            'Quote Request - Spectralink Global Logistics Pvt Ltd'
          )}`}
          className="btn btn-primary flex-1 justify-center"
        >
          <Mail size={17} />
          Email
        </a>
      </div>
    </>
  );
}