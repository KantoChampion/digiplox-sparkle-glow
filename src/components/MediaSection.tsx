const MediaSection = () => {
  return (
    <section id="media" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 gradient-radial pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3 font-semibold neon-text-green">
            Media
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Gameplay <span className="text-gradient-rgb">Preview</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Early development footage — work in progress
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rgb-red/30 via-rgb-green/30 to-rgb-blue/30 blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
            <video
              className="relative rounded-lg w-full aspect-video object-cover border border-border"
              controls
              preload="metadata"
              playsInline
            >
              <source src="/videos/gameplay-1.mp4" type="video/mp4" />
              Your browser does not support video.
            </video>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rgb-blue/30 via-rgb-red/30 to-rgb-green/30 blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
            <video
              className="relative rounded-lg w-full aspect-video object-cover border border-border"
              controls
              preload="metadata"
              playsInline
            >
              <source src="/videos/gameplay-2.mp4" type="video/mp4" />
              Your browser does not support video.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
