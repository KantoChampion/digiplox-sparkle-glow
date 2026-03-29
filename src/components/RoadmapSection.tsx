import ScrollReveal from "./ScrollReveal";
import { Progress } from "@/components/ui/progress";

const milestones = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "complete" as const,
    progress: 100,
    items: ["Core movement & shooting mechanics", "RGB color-switching system", "Basic enemy AI patterns"],
    color: "rgb-red",
  },
  {
    phase: "Phase 2",
    title: "World Building",
    status: "in-progress" as const,
    progress: 60,
    items: ["Level design for 3 stages", "Boss encounter prototypes", "Environmental hazards & puzzles"],
    color: "rgb-green",
  },
  {
    phase: "Phase 3",
    title: "Characters & Story",
    status: "upcoming" as const,
    progress: 15,
    items: ["Cutscene system & dialogue", "Character animations & expressions", "Adult content scenes integration"],
    color: "rgb-blue",
  },
  {
    phase: "Phase 4",
    title: "Polish & Release",
    status: "upcoming" as const,
    progress: 0,
    items: ["Sound design & music", "UI/UX polish & menus", "Beta testing & optimization"],
    color: "rgb-green",
  },
];

const statusBadge = (status: "complete" | "in-progress" | "upcoming") => {
  const styles = {
    complete: "bg-primary/20 text-primary border-primary/30",
    "in-progress": "bg-secondary/20 text-secondary border-secondary/30",
    upcoming: "bg-muted text-muted-foreground border-border",
  };
  const labels = { complete: "Complete", "in-progress": "In Progress", upcoming: "Upcoming" };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${styles[status]}`}>
      {status === "in-progress" && <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse-neon" />}
      {status === "complete" && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
      {labels[status]}
    </span>
  );
};

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 gradient-radial pointer-events-none" />

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm tracking-[0.2em] uppercase text-accent mb-3 font-semibold neon-text-blue">
              Development
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              Road to <span className="text-gradient-rgb">Launch</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Follow our journey as we build Rainbow Robin from the ground up.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rgb-red via-rgb-green to-rgb-blue opacity-40 md:-translate-x-px" />

          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <ScrollReveal key={i} delay={i * 150} direction={isLeft ? "left" : "right"}>
                <div className={`relative flex items-start mb-12 md:mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-${m.color} border-2 border-background -translate-x-1.5 mt-2 z-10"
                    style={{
                      backgroundColor: m.status === "complete"
                        ? "hsl(var(--rgb-green))"
                        : m.status === "in-progress"
                        ? "hsl(var(--rgb-red))"
                        : "hsl(var(--muted-foreground))",
                      boxShadow: m.status !== "upcoming"
                        ? `0 0 10px ${m.status === "complete" ? "hsl(var(--rgb-green) / 0.5)" : "hsl(var(--rgb-red) / 0.5)"}`
                        : "none",
                    }}
                  />

                  {/* Card */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                    <div className="rounded-lg border border-border bg-card p-6 neon-border hover:border-primary/30 transition-colors duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-heading">
                          {m.phase}
                        </span>
                        {statusBadge(m.status)}
                      </div>

                      <h3 className="font-heading text-xl font-bold text-foreground mb-3">{m.title}</h3>

                      <ul className="space-y-2 mb-4">
                        {m.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Progress</span>
                          <span>{m.progress}%</span>
                        </div>
                        <Progress value={m.progress} className="h-2 bg-muted" />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
