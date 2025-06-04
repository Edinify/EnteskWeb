// components/SEO.tsx
import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <Helmet>
      <title>Entesk</title>
      <meta name="title" content="Entesk" />
      <meta
        name="description"
        content="Learn Robotics, Programming, Digital Art and Science with Entesk courses for all ages."
      />
      <meta
        name="keywords"
        content="Robotics, Programming, Digital Art, Science, Entesk, Təhsil, Kurs, Lego, Vex, robototexnika, rəqəmsal incəsənət, proqramlaşdırma, цифровое искусство, программирование, робототехника"
      />
      <meta name="author" content="Entesk Team" />
      <meta httpEquiv="Content-Language" content="az" />
      <link rel="canonical" href="https://www.enteskedu.com" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Entesk" />
      <meta
        property="og:description"
        content="Learn Robotics, Programming, Digital Art and Science with Entesk courses for all ages."
      />
      <meta
        property="og:image"
        content="https://www.enteskedu.com/images/logoicon.png"
      />
      <meta property="og:url" content="https://www.enteskedu.com" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Entesk" />
      <meta
        name="twitter:description"
        content="Learn Robotics, Programming, Digital Art and Science with Entesk."
      />
      <meta
        name="twitter:image"
        content="https://www.enteskedu.com/images/logoicon.png"
      />

      {/* Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Entesk",
            "url": "https://www.enteskedu.com",
            "logo": "https://www.enteskedu.com/images/logoicon.png",
            "sameAs": [
              "https://www.facebook.com/entesk",
              "https://www.instagram.com/entesk"
            ],
            "description": "Learn Robotics, Programming, Digital Art and Science with Entesk."
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
