import { Helmet } from "react-helmet";

export default function SEO({ title, description, url, image }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data for Google */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Nabin Prajapati",
            "url": "${url}",
            "image": "${image}",
            "jobTitle": "Doctor"
          }
        `}
      </script>
    </Helmet>
  );
}

// Default props
SEO.defaultProps = {
  title: "Nabin Prajapati | Doctor",
  description:
    "Portfolio of Nabin Prajapati — showcasing professional experience and services as a doctor.",
  url: "https://www.nabin-prajapati.com.np/",
  image: "https://www.nabin-prajapati.com.np/logo.png",
};
