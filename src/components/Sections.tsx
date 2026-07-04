import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
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
    <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-blue-100 bg-[#EEF5FF]">
      <img
        src="/ship.jpeg"
        alt="Container ship carrying global freight across ocean routes"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
