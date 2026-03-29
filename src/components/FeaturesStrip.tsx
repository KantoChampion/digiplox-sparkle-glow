import { Zap, Palette, Swords, Flame, Heart } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "RGB Color-Switching",
    description: "Shift between Red, Green, and Blue modes to smash barriers, dodge lasers, and swing through obstacles.",
    color: "text-rgb-green",
  },
  {
    icon: Swords,
    title: "Hardcore Action",
    description: "Fast-paced sidescroller shooter inspired by classics like Megaman and Metroid with modern flair.",
    color: "text-rgb-red",
  },
  {
    icon: Zap,
    title: "Unreal Engine 5",
    description: "Built on UE5 for stunning visuals, fluid animations, and next-gen graphical fidelity.",
    color: "text-rgb-blue",
  },
  {
    icon: Flame,
    title: "5 Cyber Biomes",
    description: "Traverse Neon Arcades, Data Rapids, Circuit Jungles, Firewall Fortresses, and the Core Nexus.",
    color: "text-rgb-red",
  },
  {
    icon: Heart,
    title: "Adult Themes",
    description: "Mature narrative featuring sensual peril, empowerment, and a daring love story in a digital world.",
    color: "text-secondary",
  },
];

const FeaturesStrip = () => {
  return (
    <section className="relative py-20 bg-card border-y border-border">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3 font-semibold neon-text-green">
            Game Features
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            What Makes It <span className="text-gradient-rgb">Different</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center mb-5 group-hover:animate-glow-rgb transition-all duration-300">
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="font-heading text-sm font-bold tracking-wider uppercase text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesStrip;
