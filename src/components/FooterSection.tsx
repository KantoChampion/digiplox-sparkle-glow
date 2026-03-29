const FooterSection = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-heading text-xl font-bold tracking-widest mb-2">
              <span className="text-gradient-rgb">RAINBOW</span>
              <span className="text-foreground ml-1">ROBIN</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              A DigiPlox Studios Production · Powered by Unreal Engine 5
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>Work in Progress</p>
            <p className="mt-1">For mature audiences (18+)</p>
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
