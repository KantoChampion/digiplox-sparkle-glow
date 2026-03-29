const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 bg-card border-y border-border">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3 font-semibold">
            Est. 2009
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-8">
            About DigiPlox
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Making its way into the gaming industry, DigiPlox was first established in 2009 as a partnered 
            organization working together with indie development groups on notable projects for both mobile 
            and desktop platforms.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Now an independent organization, DigiPlox is striving to make its mark in the industry with its 
            own working titles and ambitions — committed to revitalizing the spirit of the action platformer 
            for a new generation of gamers.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { value: "2009", label: "Founded" },
            { value: "UE4", label: "Engine" },
            { value: "Steam", label: "Platform" },
            { value: "∞", label: "Passion" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary neon-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm tracking-wider uppercase text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
