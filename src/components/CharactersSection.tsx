const CharactersSection = () => {
  return (
    <section id="characters" className="relative py-24 bg-card border-y border-border">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.2em] uppercase text-secondary mb-3 font-semibold neon-text-red">
            Characters
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Meet the <span className="text-gradient-rgb">Cast</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Robin */}
          <div className="p-8 rounded-lg border border-border bg-background/50 group hover:border-primary/30 transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-rgb-green animate-pulse-neon" />
              <h3 className="font-heading text-lg font-bold text-foreground tracking-wider uppercase">
                Rainbow Robin
              </h3>
            </div>
            <p className="text-xs tracking-wider uppercase text-primary mb-4">Protagonist</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              A vibrant 20-year-old college student with flowing green hair. Trapped in the Cyber Realm, she transforms 
              into Rainbow Robin — armed with an RGB-shifting suit that lets her smash barriers, dodge lasers, and 
              fight back against the Chroma Collective.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rgb-red/10 text-rgb-red border border-rgb-red/20">Red Mode</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rgb-green/10 text-rgb-green border border-rgb-green/20">Green Mode</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rgb-blue/10 text-rgb-blue border border-rgb-blue/20">Blue Mode</span>
            </div>
          </div>

          {/* Alex */}
          <div className="p-8 rounded-lg border border-border bg-background/50 group hover:border-secondary/30 transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-secondary animate-pulse-neon" />
              <h3 className="font-heading text-lg font-bold text-foreground tracking-wider uppercase">
                Alex
              </h3>
            </div>
            <p className="text-xs tracking-wider uppercase text-secondary mb-4">Robin's Girlfriend</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Slim, tech-savvy with short pink hair. Alex tricked Robin into playing the arcade machine 
              and now appears as glitchy holograms — providing tips, backstory, and emotional support 
              while confessing her prank gone wrong.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary border border-secondary/20">Support</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground border border-border">Holograms</span>
            </div>
          </div>

          {/* Chroma Collective - full width */}
          <div className="md:col-span-2 p-8 rounded-lg border border-border bg-background/50 group hover:border-accent/30 transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-accent animate-pulse-neon" />
              <h3 className="font-heading text-lg font-bold text-foreground tracking-wider uppercase">
                The Chroma Collective
              </h3>
            </div>
            <p className="text-xs tracking-wider uppercase text-accent mb-4">Antagonists</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              A hive-mind AI that views organic life as fuel. They deploy specialized RGB-themed robots 
              to capture intruders and harvest their energy for expansion.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <div className="p-4 rounded bg-muted/50 border border-border">
                <span className="text-rgb-red font-heading text-sm font-bold tracking-wider">Red Harvesters</span>
                <p className="text-xs text-muted-foreground mt-1">Aggressive energy extractors</p>
              </div>
              <div className="p-4 rounded bg-muted/50 border border-border">
                <span className="text-rgb-blue font-heading text-sm font-bold tracking-wider">Blue Injectors</span>
                <p className="text-xs text-muted-foreground mt-1">Speedy body-altering pursuers</p>
              </div>
              <div className="p-4 rounded bg-muted/50 border border-border">
                <span className="text-rgb-green font-heading text-sm font-bold tracking-wider">Green Assimilators</span>
                <p className="text-xs text-muted-foreground mt-1">Entangling capture specialists</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;
