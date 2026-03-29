import gameShowcase from "@/assets/game-showcase.jpg";

const GameShowcase = () => {
  return (
    <section id="games" className="relative py-24 overflow-hidden">
      {/* Radial glow behind */}
      <div className="absolute inset-0 gradient-radial pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/30 to-accent/30 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <img
              src={gameShowcase}
              alt="Android Hunter A character"
              className="relative rounded-lg w-full object-cover aspect-square"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-accent mb-3 font-semibold neon-text-pink">
              Flagship Title
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Android Hunter A
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A next generation sidescroller shooter taking classic action platforming to the next level. 
              Cinematic tension, fast blasting action, a vibrant diversity of stage environments and an 
              in-depth customization system are just a few of the many features Android Hunter A has to offer.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Fast-paced hardcore action platformer",
                "Built on Unreal Engine 4",
                "Deep customization system",
                "Captivating story & vibrant environments",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0 animate-pulse-neon" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://store.steampowered.com/app/740200/Android_Hunter_A/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground font-heading text-sm font-bold tracking-wider uppercase rounded neon-border hover:scale-105 transition-transform duration-300"
              >
                Get on Steam
              </a>
              <a
                href="https://www.androidhuntera.com/download"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-accent/40 text-accent font-heading text-sm font-bold tracking-wider uppercase rounded hover:bg-accent/10 transition-colors duration-300"
              >
                Download Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameShowcase;
