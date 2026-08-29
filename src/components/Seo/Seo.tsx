import Head from "next/head";
import { cloudinaryUrl } from "../../lib/cloudinary";
import { absoluteUrl, defaultOgImage, siteName } from "../../consts.seo";

export type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
};

const Seo = ({ title, description, path, image, noindex }: SeoProps) => {
  const canonical = absoluteUrl(path);
  const imageUrl = cloudinaryUrl(image ?? defaultOgImage, { width: 1200 });

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <link rel="canonical" href={canonical} key="canonical" />

      {noindex ? (
        <meta name="robots" content="noindex, nofollow" key="robots" />
      ) : null}

      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta property="og:url" content={canonical} key="og:url" />
      <meta property="og:site_name" content={siteName} key="og:site_name" />
      <meta property="og:image" content={imageUrl} key="og:image" />

      <meta name="twitter:title" content={title} key="twitter:title" />
      <meta
        name="twitter:description"
        content={description}
        key="twitter:description"
      />
      <meta name="twitter:image" content={imageUrl} key="twitter:image" />
    </Head>
  );
};

export default Seo;
