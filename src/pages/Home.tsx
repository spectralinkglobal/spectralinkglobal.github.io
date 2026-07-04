import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';
import {
  CFSTimeline,
  fade,
  SectionTitle,
  ServiceCards,
  Values,
  WhyChoose,
  WorldMapVisual,
} from '../components/Sections';

const highlights = [
  'Air & Ocean Freight Specialists',
  'Global Logistics Network',
  '24×7 Customer Support',
  'Tailored Shipping Solutions',
  'End-to-End Visibility',
];

export default function Home() {
  return (
    <>
      <SEO
        title="Freight Forwarding Company Mumbai | Spectralink Global Logistics"
        description="Spectralink Global Logistics Pvt Ltd offers air freight, ocean freight, customs clearance and CFS operations in Mumbai."
      />

      <section className="hero-bg map-grid flex min-h-[88vh] items-center">
        <div className="container grid items-center gap-10 py-20 lg:grid-cols-2">
          <motion.div {...fade}>
            <p className="font-black uppercase tracking-widest text-[#FF8A00]">
              Logistics Service Provider via Sea and Air
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight text-[#0B2D5B] md:text-7xl">
              Moving Global Trade with Confidence
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-600">
              Spectralink Global Logistics Pvt Ltd delivers reliable air freight,
              ocean freight, customs clearance, and CFS operations with customized
              logistics solutions that keep businesses moving efficiently across
              the globe.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:HRHEAD@SPECTRALINKGLOBAL.COM?subject=Quote%20Request%20-%20Spectralink%20Global"
                className="btn btn-primary"
              >
                Email Us for a Quote
              </a>

              <Link to="/contact" className="btn btn-secondary">
                Contact Our Team
              </Link>
            </div>
          </motion.div>

          <motion.div {...fade} className="card p-6">
            <WorldMapVisual />
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-5">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="card p-5 text-center font-bold text-[#0B2D5B]"
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <SectionTitle
            eyebrow="Services"
            title="Reliable logistics solutions for global movement"
          />
          <ServiceCards />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="CFS Workflow"
            title="From carting to vessel loading"
            text="A clear Container Freight Station process designed for efficient shipment movement."
          />
          <CFSTimeline />
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <SectionTitle
            eyebrow="Why Choose Us"
            title="Built for reliability, speed and transparency"
          />
          <WhyChoose />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Values"
            title="Principles that guide every shipment"
          />
          <Values />
        </div>
      </section>

      <section className="section bg-[#0B2D5B] text-white">
        <div className="container grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black md:text-5xl">
              Let&apos;s Begin a Journey of Everlasting Business Partnership
            </h2>

            <p className="mt-4 text-blue-100">
              Send us your shipment requirements for air freight, ocean freight,
              customs clearance, or CFS operations.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}