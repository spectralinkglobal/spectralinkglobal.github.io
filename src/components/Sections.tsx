import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  PackageCheck,
  Plane,
  Ship,
  ShieldCheck,
} from 'lucide-react';

import { cfsSteps, services, whyChoose } from '../data/site';

export const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  text,
}: SectionTitleProps) {
  return (
    <motion.div {...fade} className="mx-auto mb-12 max-w-3xl text-center">
      <p className="font-extrabold uppercase tracking-widest text-[#FF8A00]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-black text-[#0B2D5B] md:text-5xl">
        {title}
      </h2>

      {text && <p className="mt-4 text-lg text-slate-600">{text}</p>}
    </motion.div>
  );
}

export function ServiceCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <motion.article
            key={service.title}
            {...fade}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="card group p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-[#0B2D5B] transition group-hover:bg-[#0B2D5B] group-hover:text-white">
              <Icon size={28} />
            </div>

            <h3 className="text-xl font-black text-[#0B2D5B]">
              {service.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">{service.text}</p>

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 font-bold text-[#FF8A00] transition hover:gap-3"
            >
              Learn More
              <ArrowRight size={16} />
            </Link>
          </motion.article>
        );
      })}
    </div>
  );
}

export function WhyChoose() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {whyChoose.map(([title, description, Icon]: any, index) => (
        <motion.div
          key={title}
          {...fade}
          transition={{ duration: 0.5, delay: index * 0.03 }}
          className="card p-6"
        >
          <Icon className="text-[#FF8A00]" />

          <h3 className="mt-4 text-xl font-black text-[#0B2D5B]">
            {title}
          </h3>

          <p className="mt-2 leading-7 text-slate-600">{description}</p>
        </motion.div>
      ))}
    </div>
  );
}

export function CFSTimeline() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {cfsSteps.map((step, index) => (
        <motion.div
          key={step}
          {...fade}
          transition={{ delay: index * 0.04 }}
          className="card p-5"
        >
          <span className="text-sm font-black text-[#FF8A00]">
            {String(index + 1).padStart(2, '0')}
          </span>

          <h3 className="mt-2 font-black text-[#0B2D5B]">{step}</h3>
        </motion.div>
      ))}
    </div>
  );
}

export function Values() {
  const values = [
    'Customer Commitment',
    'Quality',
    'Integrity',
    'Teamwork',
    'Personal Accountability',
  ];

  return (
    <div className="grid gap-5 md:grid-cols-5">
      {values.map((value) => (
        <div key={value} className="card p-5 text-center">
          <CheckCircle2 className="mx-auto text-[#FF8A00]" />

          <h3 className="mt-3 font-black text-[#0B2D5B]">{value}</h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Reliable standards, transparent work, and ownership in every
            commitment.
          </p>
        </div>
      ))}
    </div>
  );
}

export function WorldMapVisual() {
  return (
    <div className="map-grid relative min-h-[430px] overflow-hidden rounded-[2rem] border border-blue-100 bg-[#EEF5FF] p-6 sm:p-8">
      <div className="absolute -right-8 -top-8 opacity-[0.12]">
        <Globe2 size={230} className="text-[#0B2D5B]" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#FF8A00] shadow-sm">
            Worldwide Connectivity
          </span>

          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Global coordination
          </span>
        </div>

        <h3 className="mt-5 max-w-md text-3xl font-black leading-tight text-[#0B2D5B] md:text-4xl">
          Connecting cargo across global trade routes
        </h3>

        <p className="mt-4 max-w-lg text-base leading-7 text-slate-600 md:text-lg">
          Global partners, regional expertise, and dependable end-to-end
          coordination for international shipments.
        </p>
      </div>

      <div className="relative z-10 mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-blue-100 bg-white/70 p-4">
          <Plane size={19} className="text-[#FF8A00]" />

          <p className="mt-3 text-sm font-black text-[#0B2D5B]">
            Air Freight
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            Time-sensitive shipment coordination.
          </p>
        </div>

        <div className="rounded-xl border border-blue-100 bg-white/70 p-4">
          <Ship size={19} className="text-[#FF8A00]" />

          <p className="mt-3 text-sm font-black text-[#0B2D5B]">
            Ocean Freight
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            Reliable movement across sea routes.
          </p>
        </div>

        <div className="rounded-xl border border-blue-100 bg-white/70 p-4">
          <ShieldCheck size={19} className="text-[#FF8A00]" />

          <p className="mt-3 text-sm font-black text-[#0B2D5B]">
            Customs Support
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            Documentation and clearance support.
          </p>
        </div>

        <div className="rounded-xl border border-blue-100 bg-white/70 p-4">
          <PackageCheck size={19} className="text-[#FF8A00]" />

          <p className="mt-3 text-sm font-black text-[#0B2D5B]">
            CFS Operations
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            Cargo handling from carting to vessel loading.
          </p>
        </div>
      </div>
    </div>
  );
}