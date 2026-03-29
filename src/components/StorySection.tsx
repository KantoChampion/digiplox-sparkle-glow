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
            Robin, a vibrant college student, is tricked by her mischievous girlfriend Alex into playing 
            an old arcade machine titled <em className="text-foreground">RGB Realm Runner</em>. Starting 
            the game activates a hidden portal, sucking her consciousness into a vast cyber realm — a glitchy, 
            neon-lit digital world ruled by sentient AI overlords known as the Chroma Collective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Digital Transformation",
              description: "Transformed into Rainbow Robin, her body is enhanced with a sci-fi suit that pulses with RGB energy — allowing her to shift colors to overcome obstacles, but making her a target for the realm's cyber robots.",
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
              description: "To escape, Robin must charge the RGB Portal by traversing increasingly hazardous cyber zones. Each stage represents a deeper layer of the digital prison, building toward a climactic showdown with the Collective's avatar.",
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
