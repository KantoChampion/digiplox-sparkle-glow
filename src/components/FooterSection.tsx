import { Youtube, Facebook } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="press" className="py-16 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-heading text-xl font-bold tracking-widest text-primary neon-text mb-2">
              DIGIPLOX
            </h3>
            <p className="text-sm text-muted-foreground">
              Indie Game Studio · Powered by Unreal Engine
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/digiplox"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-border transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.youtube.com/digiplox"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-border transition-all duration-300"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} DigiPlox Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
