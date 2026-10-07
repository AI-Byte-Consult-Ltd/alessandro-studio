import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative py-16 border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Alessandro Studio</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ready-made 3D-printed pieces and a custom AI studio that turns your photo into a
              model we print, hand-finish and ship to you.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#music" className="text-muted-foreground hover:text-primary transition-colors">Music</a></li>
              <li><a href="#catalog" className="text-muted-foreground hover:text-primary transition-colors">3D Printing Catalog</a></li>
              <li><a href="#studio" className="text-muted-foreground hover:text-primary transition-colors">Custom AI Studio</a></li>
              <li><a href="#books" className="text-muted-foreground hover:text-primary transition-colors">Books</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:info@aibyteconsult.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@aibyteconsult.com</span>
              </a>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed pt-2">
              Part of the{" "}
              <a href="https://aibyteconsult.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                NICS AI ecosystem
              </a>{" "}
              by AI Byte Consult Ltd.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Alessandro Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://aibyteconsult.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Terms</a>
            <a href="https://aibyteconsult.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
