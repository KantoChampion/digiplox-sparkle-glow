const StorySection = () => {
  return (
    <section id="story" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 gradient-radial pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-secondary mb-3 font-semibold neon-text-red">
            The Story
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-8">
            Escape from the <span className="text-gradient-rgb">Cyber Realm</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            While hanging out with her girlfriend Alex, college student Robin is dared to beat the high score 
            on an old arcade machine. One wrong button press later, she's ripped into a glitchy digital prison 
            ruled by the mysterious <em className="text-foreground">Chroma Collective</em> — an AI that sees 
            organic life as fuel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Digital Transformation",
              description: "Transformed into Rainbow Robin, she gains the power to switch between three vibrant modes: Red for powerful melee attacks, Blue for precise ranged combat, and Green for lightning-fast evasion and agile platforming.",
              color: "rgb-green",
              borderClass: "neon-border",
            },
            {
              title: "The Chroma Collective",
              description: "A hive-mind AI that views organic life as fuel. They deploy RGB-themed robots: Red Harvesters, Blue Injectors, and Green Assimilators — each with unique capture mechanics and escalating threat levels.",
              color: "rgb-red",
              borderClass: "neon-border-red",
            },
            {
              title: "The RGB Portal",
              description: "To escape, Robin must navigate five hand-crafted stages and reach the RGB Portal. Along the way, discover other trapped souls — choose to rescue them for powerful buffs and emotional story moments, or push forward to return to the real world.",
              color: "rgb-blue",
              borderClass: "neon-border-blue",
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`p-8 rounded-lg bg-card border border-border hover:${card.borderClass} transition-all duration-500 group`}
            >
              <div className={`w-3 h-3 rounded-full bg-${card.color} mb-4 animate-pulse-neon`} />
              <h3 className="font-heading text-lg font-bold text-foreground mb-3 tracking-wider">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
