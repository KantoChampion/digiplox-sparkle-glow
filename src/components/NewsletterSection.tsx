import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("newsletter_subscribers").insert({ email: trimmed });
    setLoading(false);

    if (error) {
      if (error.code === "23505") {
        toast({ title: "Already subscribed!", description: "This email is already on our list." });
        setSubscribed(true);
      } else {
        toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
      }
      return;
    }

    setSubscribed(true);
    setEmail("");
    toast({ title: "You're in!", description: "Thanks for subscribing to Rainbow Robin updates." });
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 gradient-rgb opacity-30 pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3 font-semibold neon-text-green">
            Stay Updated
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Join the <span className="text-gradient-rgb">Wishlist</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Be the first to know about development updates, gameplay reveals, and the launch of 
            Rainbow Robin: Escape from the Cyber Realm.
          </p>

          {subscribed ? (
            <div className="p-8 rounded-lg border border-primary/30 bg-primary/5 animate-slide-up">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <p className="font-heading text-lg font-bold text-primary tracking-wider">
                You're on the list!
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                We'll keep you posted on all things Rainbow Robin.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                maxLength={255}
                className="flex-1 px-5 py-3 rounded bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-body text-base"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-primary text-primary-foreground font-heading text-sm font-bold tracking-wider uppercase rounded neon-border hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:hover:scale-100"
              >
                {loading ? "..." : "Subscribe"}
              </button>
            </form>
          )}

          <p className="text-xs text-muted-foreground/50 mt-4">
            No spam. Unsubscribe anytime. For mature audiences (18+).
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
