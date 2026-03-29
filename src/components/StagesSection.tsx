const stages = [
  {
    number: "01",
    name: "Neon Arcade Outskirts",
    description: "Glitchy retro arcade world with pixelated floors and 8-bit soundscapes. Where Robin awakens and the journey begins.",
    obstacles: 50,
    color: "text-rgb-green",
    dotColor: "bg-rgb-green",
  },
  {
    number: "02",
    name: "Data Stream Rapids",
    description: "Flowing rivers of binary code with holographic waterfalls and circuit-board islands. Faster pace with vertical drops.",
    obstacles: 75,
    color: "text-rgb-blue",
    dotColor: "bg-rgb-blue",
  },
  {
    number: "03",
    name: "Circuit Jungle",
    description: "Overgrown digital forest with wire-vines, neon flowers, and buzzing insect-drones. Entanglement risks around every corner.",
    obstacles: 100,
    color: "text-rgb-green",
    dotColor: "bg-rgb-green",
  },
  {
    number: "04",
    name: "Firewall Fortress",
    description: "Industrial fortress with laser grids, conveyor belts, and robotic assembly lines. Heat hazards and Red Harvesters in packs.",
    obstacles: 125,
    color: "text-rgb-red",
    dotColor: "bg-rgb-red",
  },
  {
    number: "05",
    name: "Core Nexus",
    description: "Pulsing heart of the realm with swirling RGB vortices and collapsing platforms. The final confrontation awaits.",
    obstacles: 150,
    color: "text-foreground",
    dotColor: "bg-foreground",
  },
];

const StagesSection = () => {
  return (
    <section id="stages" className="relative py-24 bg-card border-y border-border">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.2em] uppercase text-accent mb-3 font-semibold neon-text-blue">
            Game Stages
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            5 Cyber <span className="text-gradient-rgb">Biomes</span>
          </h2>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {stages.map((stage) => (
            <div
              key={stage.number}
              className="group flex items-start gap-6 p-6 rounded-lg border border-border bg-background/50 hover:bg-muted/50 transition-all duration-300"
            >
              <span className={`font-heading text-3xl md:text-4xl font-black ${stage.color} opacity-60 group-hover:opacity-100 transition-opacity`}>
                {stage.number}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`w-2 h-2 rounded-full ${stage.dotColor} animate-pulse-neon`} />
                  <h3 className="font-heading text-base md:text-lg font-bold text-foreground tracking-wider uppercase">
                    {stage.name}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                  {stage.description}
                </p>
                <span className="text-xs text-muted-foreground/60 tracking-wider uppercase">
                  {stage.obstacles} Obstacles to Clear
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StagesSection;
