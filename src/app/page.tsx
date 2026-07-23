import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { profile } from "@/data/portfolio";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madrid",
      addressCountry: "ES",
    },
    knowsAbout: profile.focusAreas,
    sameAs: profile.links
      .filter((link) => link.href.startsWith("https://"))
      .map((link) => link.href),
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
