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
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="container flex min-h-[80px] items-center justify-between gap-6 py-3">
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-3"
            aria-label="Spectralink Global home"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0B2D5B] text-xl font-black text-white shadow-sm transition-transform group-hover:scale-105">
              S
            </span>

            <span className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-tight text-[#0B2D5B]">
                Spectralink Global
              </span>

              <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Freight &amp; Logistics
              </span>
            </span>
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center gap-6 text-sm font-bold xl:flex"
            aria-label="Primary navigation"
          >
            {nav.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  [
                    'transition-colors duration-200',
                    isActive
                      ? 'text-[#FF8A00]'
                      : 'text-slate-700 hover:text-[#0B2D5B]',
                  ].join(' ')
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <a
              href={`tel:${company.phone}`}
              className="btn btn-secondary whitespace-nowrap px-5"
            >
              <Phone size={17} />
              Call Our Team
            </a>

            <a
              href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
                'Quote Request - Spectralink Global'
              )}`}
              className="btn btn-primary whitespace-nowrap px-5"
            >
              <Mail size={17} />
              Email Us
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-[#0B2D5B] transition hover:bg-slate-50 lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-100 bg-white lg:hidden">
            <div className="container grid gap-1 py-4">
              {nav.map(([label, path]) => (
                <Link
                  key={path}
                  to={path}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-[#0B2D5B]"
                >
                  {label}
                </Link>
              ))}

              <div className="mt-3 grid gap-3 border-t border-slate-100 pt-4 sm:grid-cols-2">
                <a
                  href={`tel:${company.phone}`}
                  className="btn btn-secondary justify-center"
                >
                  <Phone size={17} />
                  Call Our Team
                </a>

                <a
                  href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
                    'Quote Request - Spectralink Global'
                  )}`}
                  className="btn btn-primary justify-center"
                >
                  <Mail size={17} />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="mobile-actions">
        <a
          className="btn btn-secondary flex-1 justify-center"
          href={`tel:${company.phone}`}
        >
          <Phone size={17} />
          Call
        </a>

        <a
          className="btn btn-primary flex-1 justify-center"
          href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
            'Quote Request - Spectralink Global'
          )}`}
        >
          <Mail size={17} />
          Email
        </a>
      </div>
    </>
  );
}