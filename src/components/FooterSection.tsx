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
              A ChaiPixel Production
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>Work in Progress</p>
            <p className="mt-1">Wishlist on Steam</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} ChaiPixel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
