export default function Head() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Navya Fashion",
    "slogan": "Your Vision, Our Creation",
    "founder": {
      "@type": "Person",
      "name": "Chandni Singh"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9326123594",
      "email": "navya8052023@gmail.com",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "F1323 Bhairav Residency, Kanakia Road, Beverly Park, Next to commissioner bunglow",
      "addressLocality": "Mira Road East",
      "postalCode": "401107",
      "addressCountry": "IN"
    },
    "description": "Custom fashion design company specializing in personalized clothing and accessories",
    "industry": "Fashion Design",
    "url": "https://navyafashion.com"
  };

  return (
    <>
      <title>Navya Fashion - Coming Soon | Your Vision, Our Creation</title>
      <meta
        name="description"
        content="Navya Fashion is coming soon! Custom fashion designs by Chandni Singh. Your Vision, Our Creation. Contact us at navya8052023@gmail.com or +91 9326123594."
      />

      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-BM1NQGRFHM"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BM1NQGRFHM');
          `,
        }}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
