import Head from "next/head";
import { cloudinaryUrl } from "../../lib/cloudinary";
import {
  defaultOgImage,
  personCountry,
  personDescription,
  personJobTitle,
  personLocality,
  personName,
  personSameAs,
  siteUrl,
} from "../../consts.seo";

const PersonSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personName,
    url: siteUrl,
    image: cloudinaryUrl(defaultOgImage, { width: 1200 }),
    jobTitle: personJobTitle,
    description: personDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: personLocality,
      addressCountry: personCountry,
    },
    sameAs: personSameAs,
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        key="person-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

export default PersonSchema;
