import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        {/* SEO Básico */}
        <title>Code&Copy Studio AI — Landing Pages com IA</title>
        <meta
          name="description"
          content="Crie sua landing page moderna e persuasiva em até 5 dias, com copy profissional e automações usando IA."
        />
        <meta name="author" content="Code&Copy Studio AI" />
        <link rel="canonical" href="https://codecopystudioai.com.br/" />

        {/* Schema.org – Professional Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Code&Copy Studio AI",
              url: "https://codecopystudioai.com.br",
              logo: "https://codecopystudioai.com.br/logo-favicon.svg",
              description:
                "Criação de sites profissionais e landing pages com inteligência artificial.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chapecó",
                addressRegion: "SC",
                addressCountry: "BR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "contato@codecopystudioai.com.br",
                contactType: "Atendimento ao cliente",
              },
            }),
          }}
        />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/logo-favicon.svg" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Landing Pages com IA — Code&Copy Studio AI"
        />
        <meta
          property="og:description"
          content="Copy que conecta. Código que entrega. IA que escala. Crie sua landing page profissional em até 5 dias."
        />
        <meta
          property="og:image"
          content="https://codecopystudioai.com.br/social-cover.png"
        />
        <meta
          property="og:url"
          content="https://codecopystudioai.com.br/"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Landing Pages com IA — Code&Copy Studio AI"
        />
        <meta
          name="twitter:description"
          content="Copy que conecta. Código que entrega. IA que escala. Crie sua landing page profissional em até 5 dias."
        />
        <meta
          name="twitter:image"
          content="https://codecopystudioai.com.br/social-cover.png"
        />

        {/* Fontes */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
