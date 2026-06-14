import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  url?: string;
};

export default function SEO({
  title,
  description,
  url = "https://www.vaultmindsolutions.com",
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={url}
      />

      <meta
        property="og:site_name"
        content="VaultMind Solutions"
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <link
        rel="canonical"
        href={url}
      />
    </Helmet>
  );
}
