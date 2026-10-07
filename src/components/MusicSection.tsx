import { Music2 } from "lucide-react";

const MusicSection = () => (
  <section id="music" className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20">
          <Music2 className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Music</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Music</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Lyrics, music and design entirely by Aleksandr Tochilov. Released on Spotify and
          other streaming platforms, starting with the track "Just Live".
        </p>
      </div>

      <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden border border-border/50 shadow-card">
        <iframe
          title="Aleksandr Tochilov — Spotify player"
          style={{ borderRadius: 12 }}
          src="https://open.spotify.com/embed/album/1Sj5W4WdKgCUOw0ziLSrDX?utm_source=generator&si=7b1b89c7df784bf8"
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default MusicSection;
