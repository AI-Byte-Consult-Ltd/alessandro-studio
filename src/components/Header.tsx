import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, SUPPORTED_LANGUAGES, type Language } from "@/contexts/LanguageContext";

const LANGUAGE_META: Record<Language, { flag: string; name: string }> = {
  en: { flag: "🇬🇧", name: "English" },
  de: { flag: "🇩🇪", name: "Deutsch" },
  fr: { flag: "🇫🇷", name: "Français" },
  it: { flag: "🇮🇹", name: "Italiano" },
  ar: { flag: "🇸🇦", name: "العربية" },
  zh: { flag: "🇨🇳", name: "中文" },
  pl: { flag: "🇵🇱", name: "Polski" },
  tr: { flag: "🇹🇷", name: "Türkçe" },
  bg: { flag: "🇧🇬", name: "Български" },
  ru: { flag: "🇷🇺", name: "Русский" },
  es: { flag: "🇪🇸", name: "Español" },
  pt: { flag: "🇵🇹", name: "Português" },
};

const NAV_LINKS = [
  { href: "#music", label: "Music" },
  { href: "#printing", label: "3D Printing" },
  { href: "#books", label: "Books" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, isRTL } = useLanguage();
  const current = LANGUAGE_META[language];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2.5 group">
            <img src="/favicon.svg" alt="Alessandro Studio" width={36} height={36} className="h-9 w-9 rounded-lg" />
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Alessandro <span className="text-gradient-gold">Studio</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/50"
              >
                {link.label}
              </a>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center justify-center gap-2 ml-2 rounded-full hover:bg-muted/50 h-9 px-3">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <span className="text-lg">{current.flag}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align={isRTL ? "start" : "end"}>
                {SUPPORTED_LANGUAGES.map((code) => (
                  <DropdownMenuItem
                    key={code}
                    onSelect={() => setLanguage(code)}
                    className={`gap-2 cursor-pointer ${language === code ? "bg-accent" : ""}`}
                  >
                    <span className="text-lg">{LANGUAGE_META[code].flag}</span>
                    <span>{LANGUAGE_META[code].name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="flex md:hidden items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center justify-center rounded-full h-10 w-10 hover:bg-muted/50">
                <span className="text-xl">{current.flag}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align={isRTL ? "start" : "end"}>
                {SUPPORTED_LANGUAGES.map((code) => (
                  <DropdownMenuItem
                    key={code}
                    onSelect={() => setLanguage(code)}
                    className={`gap-2 cursor-pointer ${language === code ? "bg-accent" : ""}`}
                  >
                    <span className="text-lg">{LANGUAGE_META[code].flag}</span>
                    <span>{LANGUAGE_META[code].name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full p-2 hover:bg-muted/50"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
