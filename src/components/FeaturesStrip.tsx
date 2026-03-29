import { Users, Cpu, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Indie Team",
    description: "A passionate team of indie developers dedicated to making their mark in the entertainment industry.",
  },
  {
    icon: Cpu,
    title: "Unreal Engine",
    description: "Specializing in Unreal Engine technology to produce visually stunning, next-gen titles.",
  },
  {
    icon: MessageCircle,
    title: "Community Driven",
    description: "Join our community and take part in shaping the development of our games.",
  },
];

const FeaturesStrip = () => {
  return (
    <section className="relative py-20 bg-card border-y border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center group"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center mb-5 neon-border group-hover:animate-glow transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold tracking-wider uppercase text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base max-w-xs">
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
