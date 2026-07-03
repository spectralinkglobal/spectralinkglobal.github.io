import { Helmet } from 'react-helmet-async';
import { company } from '../data/site';

type SEOProps = { title: string; description: string; path?: string; };
const domain = 'https://your-domain.com';

export default function SEO({ title, description, path = '/' }: SEOProps) {
  const url = `${domain}${path}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    address: company.address,
    telephone: company.phone,
    email: company.email,
    url: domain,
    areaServed: 'India',
    sameAs: []
  };
  return <Helmet>
    <title>{title}</title><meta name="description" content={description}/><link rel="canonical" href={url}/>
    <meta property="og:title" content={title}/><meta property="og:description" content={description}/><meta property="og:type" content="website"/><meta property="og:url" content={url}/>
    <meta name="twitter:card" content="summary_large_image"/>
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  </Helmet>;
}
