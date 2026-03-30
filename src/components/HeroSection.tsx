import heroCharacter from "@/assets/hero-character.gif";

const HeroSection = () => {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="RGB Cyber Realm"
          className="w-full h-full object-cover animate-hero-drift scale-110"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Animated RGB vignette */}
      <div className="absolute inset-0 pointer-events-none animate-rgb-pulse"
        style={{ background: "radial-gradient(ellipse at 30% 50%, hsl(var(--rgb-red) / 0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 40%, hsl(var(--rgb-blue) / 0.06) 0%, transparent 60%)" }}
      />

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(120 100% 45% / 0.1) 2px, hsl(120 100% 45% / 0.1) 4px)" }}
      />

      {/* Content */}
      <div className="relative z-10 container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text — staggered fade-in */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6 animate-hero-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-neon" />
              <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Work In Progress · Unreal Engine 5</span>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-4 animate-hero-fade-in opacity-0 electric-sparks" style={{ animationDelay: "0.4s" }}>
              <span className="text-gradient-rgb neon-text-rainbow animate-glitch-flicker inline-block chromatic-glitch" data-text="RAINBOW">RAINBOW</span>
              <br />
              <span className="text-foreground animate-neon-breathe inline-block" style={{ color: "hsl(var(--primary))" }}>ROBIN</span>
              {/* Spark particles */}
              <span className="spark-particle" style={{ top: "20%", right: "5%", animationDelay: "0s" }} />
              <span className="spark-particle" style={{ top: "60%", left: "2%", animationDelay: "0.5s" }} />
              <span className="spark-particle" style={{ bottom: "10%", right: "15%", animationDelay: "0.9s" }} />
              <span className="spark-particle" style={{ top: "5%", left: "30%", animationDelay: "0.3s" }} />
              <span className="spark-particle" style={{ top: "40%", right: "20%", animationDelay: "0.15s" }} />
              <span className="spark-particle" style={{ bottom: "25%", left: "15%", animationDelay: "0.65s" }} />
              <span className="spark-particle" style={{ top: "10%", right: "35%", animationDelay: "1.1s" }} />
              <span className="spark-particle" style={{ bottom: "5%", left: "40%", animationDelay: "0.8s" }} />
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-hero-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
              Escape from the Cyber Realm
            </p>

            <p className="text-base text-muted-foreground/80 mb-8 leading-relaxed max-w-md mx-auto lg:mx-0 animate-hero-fade-in opacity-0" style={{ animationDelay: "0.7s" }}>
              A next-gen sidescroller shooter blending fast-paced action, RGB color-switching mechanics, 
              and daring adult themes — inspired by Megaman &amp; Metroid.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 animate-hero-fade-in opacity-0" style={{ animationDelay: "0.9s" }}>
              <a
                href="#media"
                className="px-8 py-3 bg-primary text-primary-foreground font-heading text-sm font-bold tracking-wider uppercase rounded neon-border hover:scale-105 transition-transform duration-300"
              >
                Watch Gameplay
              </a>
              <a
                href="#story"
                className="px-8 py-3 border border-secondary/40 text-secondary font-heading text-sm font-bold tracking-wider uppercase rounded hover:bg-secondary/10 transition-colors duration-300"
              >
                The Story
              </a>
            </div>
          </div>

          {/* Character Art — float + fade */}
          <div className="relative flex justify-center lg:justify-end animate-hero-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
            <div className="relative animate-hero-float">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-rgb-red/20 via-rgb-green/20 to-rgb-blue/20 blur-3xl opacity-60 animate-rgb-pulse" />
              <div className="relative w-[300px] md:w-[420px] lg:w-[480px]" style={{ aspectRatio: "1" }}>
                <img
                  src={heroCharacter}
                  alt="Rainbow Robin character"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom RGB line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-rgb-red via-rgb-green to-rgb-blue opacity-60" />
    </section>
  );
};

export default HeroSection;
