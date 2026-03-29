import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Cyberpunk cityscape"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-primary animate-pulse-neon mb-4 font-medium">
          Indie Game Studio
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black leading-tight neon-text text-primary mb-6">
          DIGIPLOX
          <span className="block text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mt-2">
            STUDIOS
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
          Revitalizing the action platformer for next generation gaming.
          Powered by Unreal Engine.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://store.steampowered.com/app/740200/Android_Hunter_A/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-primary text-primary-foreground font-heading text-sm font-bold tracking-wider uppercase rounded neon-border hover:scale-105 transition-transform duration-300"
          >
            Play on Steam
          </a>
          <a
            href="#games"
            className="px-8 py-3 border border-primary/40 text-primary font-heading text-sm font-bold tracking-wider uppercase rounded hover:bg-primary/10 transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
