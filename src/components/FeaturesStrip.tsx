import { Zap, Palette, Swords, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Color-Switching Combat",
    description: "Switch between Red melee, Blue ranged gun, and Green evasion to overcome enemies and solve puzzles.",
    color: "text-rgb-green",
  },
  {
    icon: Swords,
    title: "Fluid 2D Action",
    description: "Tight platforming and satisfying combat inspired by classics like Megaman and Metroid.",
    color: "text-rgb-red",
  },
  {
    icon: Zap,
    title: "5 Stunning Stages",
    description: "From glowing retro arcades and data streams to circuit jungles, firewall fortresses, and the Core Nexus.",
    color: "text-rgb-blue",
  },
  {
    icon: Sparkles,
    title: "Neon Cyberpunk Art",
    description: "Beautiful neon aesthetic with parallax backgrounds, dynamic lighting, and hand-crafted visuals.",
    color: "text-rgb-red",
  },
  {
    icon: Heart,
    title: "Heartfelt Story",
    description: "A touching narrative about courage, growing stronger through adversity, and the bond between Robin and Alex.",
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
