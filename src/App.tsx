import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Box, ShoppingBag, ExternalLink, ArrowRight, Sparkles, Truck, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BooksSection from "@/components/BooksSection";
import MusicSection from "@/components/MusicSection";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { forgeText } from "@/components/forge/forgeI18n";
import ForgeCatalog from "@/components/forge/ForgeCatalog";
import ForgeStudio from "@/components/forge/ForgeStudio";
import ForgeStudioSoon from "@/components/forge/ForgeStudioSoon";
import { STUDIO_ENABLED } from "@/data/forgeCatalog";
import ForgeSocial from "@/components/forge/ForgeSocial";
import ForgeCheckout, { type PendingOrder } from "@/components/forge/ForgeCheckout";

// TODO(Alessandro): swap in the real shop URL once a secondary storefront exists.
const ETSY_SHOP_URL = "https://www.etsy.com";

const TRUST_POINTS = [
  { icon: PenTool, label: "Designed & printed in-house" },
  { icon: Sparkles, label: "Hand-finished, not mass-produced" },
  { icon: Truck, label: "Shipped from Europe" },
];

const AlessandroStudioSite = () => {
  const { language } = useLanguage();
  const t = forgeText[language] ?? forgeText.en;
  const [order, setOrder] = useState<PendingOrder | null>(null);

  const seoProps = {
    title: "Alessandro Studio — Books, Music & 3D-Printed Collectibles",
    description:
      "Alessandro Studio: the novel The Appearance, music by Aleksandr Tochilov, and 3D-printed collectibles, plus a custom AI studio that prints your own design.",
    canonical: "https://alessandro-studio.eu/",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Alessandro Studio",
      url: "https://alessandro-studio.eu/",
    },
  };

  return (
    <>
      <SEO {...seoProps} />
      <main className="min-h-screen bg-background">
        <Header />

        <section className="pt-36 pb-16 relative overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
                Alessandro <span className="text-gradient-gold">Studio</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
                A novel. A record. A workshop full of small handmade things.
              </p>
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                <a href="#music">
                  <Button variant="outline" className="rounded-full px-6 border-2">Music</Button>
                </a>
                <a href="#printing">
                  <Button variant="outline" className="rounded-full px-6 border-2">3D Printing</Button>
                </a>
                <a href="#books">
                  <Button variant="outline" className="rounded-full px-6 border-2">Books</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <MusicSection />

        <section id="printing" className="pt-4 pb-4 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6 py-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20">
                <Box className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">{t.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                <span className="text-gradient-gold">{t.heroHeading}</span>
              </h2>

              <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">{t.heroSubtitle}</p>

              <div className="flex flex-wrap gap-4 justify-center pt-2">
                <a href="#catalog">
                  <Button size="lg" className="w-full sm:w-auto bg-foreground hover:bg-foreground/90 text-background rounded-full px-8">
                    {t.catalogTitle}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <a href={ETSY_SHOP_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 border-2">
                    <ShoppingBag className="mr-2 w-4 h-4" />
                    {t.etsy}
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-3 pt-4">
                {TRUST_POINTS.map((point) => (
                  <div
                    key={point.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-2 text-xs text-muted-foreground backdrop-blur"
                  >
                    <point.icon className="h-3.5 w-3.5 text-primary" />
                    {point.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ForgeCatalog t={t} onOrder={setOrder} />
        {STUDIO_ENABLED ? <ForgeStudio t={t} onOrder={setOrder} /> : <ForgeStudioSoon t={t} />}
        <ForgeSocial t={t} />

        <BooksSection />

        <ForgeCheckout order={order} onClose={() => setOrder(null)} t={t} lang={language} />
        <Footer />
      </main>
    </>
  );
};

const App = () => (
  <HelmetProvider>
    <LanguageProvider>
      <AlessandroStudioSite />
    </LanguageProvider>
  </HelmetProvider>
);

export default App;
