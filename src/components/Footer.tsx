export function Footer() {
  return (
    <footer className="bg-navy py-16 lg:py-20 text-bg-white/80">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2">
            <h3 className="text-[20px] font-bold tracking-widest text-bg-white uppercase mb-4">
              SNITHI DENTAL
            </h3>
            <p className="text-[15px] leading-[1.6] max-w-[320px]">
              Professional, modern, and comfortable dental care in Kompally, Hyderabad. Dedicated to bright and confident smiles.
            </p>
          </div>
          
          <div>
            <h4 className="text-[13px] font-bold tracking-wider uppercase text-bg-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Care Services', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-[15px] hover:text-bg-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-[13px] font-bold tracking-wider uppercase text-bg-white mb-6">Contact</h4>
            <ul className="space-y-3 text-[15px]">
              <li>079892 55316</li>
              <li>Kompally, Hyderabad</li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-bg-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px]">
          <p>© 2026 Snithi Dental. All rights reserved.</p>
          <p>Designed for Patient Comfort</p>
        </div>
      </div>
    </footer>
  );
}
