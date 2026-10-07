import { BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AMAZON_KINDLE_URL = "https://www.amazon.com/dp/B08NVGYVBS";
const AMAZON_PAPERBACK_URL = "https://www.amazon.com/dp/B0HKL2LZX5";

const BooksSection = () => (
  <section id="books" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.3fr] gap-10 items-center">
        <div className="flex justify-center">
          <div className="aspect-[2/3] w-full max-w-xs rounded-2xl border border-border/60 bg-gradient-to-br from-card to-muted flex flex-col items-center justify-center text-center p-8 shadow-card">
            <BookOpen className="w-10 h-10 text-primary mb-4" />
            <p className="text-2xl font-semibold text-foreground leading-tight">Появление</p>
            <p className="text-sm text-muted-foreground mt-1">The Appearance</p>
            <p className="text-xs text-muted-foreground mt-6 uppercase tracking-wide">Alexander Lunin</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Novel</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Появление <span className="text-muted-foreground font-normal">/ The Appearance</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A mystical adventure novel by Alexander Lunin. An amnesiac narrator moves between
            three eras that turn out to be the same place at different branches in time —
            Ancient Egypt, Imperial Russia, and Ottoman Constantinople — chasing the truth about
            a loop he barely remembers falling into.
          </p>
          <p className="text-sm text-muted-foreground">
            Published on Amazon in Kindle and paperback editions.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {AMAZON_KINDLE_URL ? (
              <a href={AMAZON_KINDLE_URL} target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full px-6">
                  Kindle edition
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </a>
            ) : (
              <Card className="bg-muted/50 border-border/50">
                <CardContent className="py-2.5 px-4 text-xs text-muted-foreground">
                  Kindle link coming soon
                </CardContent>
              </Card>
            )}
            {AMAZON_PAPERBACK_URL ? (
              <a href={AMAZON_PAPERBACK_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full px-6 border-2">
                  Paperback edition
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </a>
            ) : (
              <Card className="bg-muted/50 border-border/50">
                <CardContent className="py-2.5 px-4 text-xs text-muted-foreground">
                  Paperback link coming soon
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BooksSection;
