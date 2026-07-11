import { Helmet } from 'react-helmet-async';
import { company } from '../data/site';

type SEOProps = { title: string; description: string; path?: string; };
const domain = 'https://spectralinkglobal.com';

export default function SEO({ title, description, path = '/' }: SEOProps) {
  const url = `${domain}${path}`;
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${domain}/#organization`,
    name: 'Spectralink Global Private Limited',
    alternateName: company.name,
    description: 'Freight forwarding and logistics company providing air freight, ocean freight, customs clearance and CFS operations.',
    logo: `${domain}/Logo.png`,
    image: `${domain}/Logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1B, Michael Mansion, Plot No. 68, Road No. 7, Prabhat Colony',
      addressLocality: 'Santacruz East',
      addressRegion: 'Maharashtra',
      postalCode: '400055',
      addressCountry: 'IN'
    },
    telephone: company.phone,
    email: company.email,
    url: `${domain}/`,
    areaServed: [{ '@type': 'Country', name: 'India' }, { '@type': 'City', name: 'Mumbai' }],
    knowsAbout: ['Air Freight', 'Ocean Freight', 'Customs Clearance', 'Container Freight Station Operations']
  };
  const webPageSchema = {
    '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${url}#webpage`,
    url, name: title, description, inLanguage: 'en-IN',
    isPartOf: { '@id': `${domain}/#website` }, about: { '@id': `${domain}/#organization` }
  };
  const websiteSchema = {
    '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${domain}/#website`,
    url: `${domain}/`, name: 'Spectralink Global Private Limited', inLanguage: 'en-IN',
    publisher: { '@id': `${domain}/#organization` }
  };
  return <Helmet>
    <html lang="en-IN"/><title>{title}</title><meta name="description" content={description}/><link rel="canonical" href={url}/>
    <meta property="og:title" content={title}/><meta property="og:description" content={description}/><meta property="og:type" content="website"/><meta property="og:url" content={url}/><meta property="og:site_name" content="Spectralink Global Private Limited"/><meta property="og:locale" content="en_IN"/><meta property="og:image" content={`${domain}/Logo.png`}/><meta property="og:image:alt" content="Spectralink Global Private Limited logo"/>
    <meta name="twitter:card" content="summary"/><meta name="twitter:title" content={title}/><meta name="twitter:description" content={description}/><meta name="twitter:image" content={`${domain}/Logo.png`}/>
    <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script><script type="application/ld+json">{JSON.stringify(websiteSchema)}</script><script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
  </Helmet>;
}
