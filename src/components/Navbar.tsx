import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-bg-primary'} h-[72px] lg:h-[82px] flex items-center`}>
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="text-[22px] md:text-[24px] font-bold tracking-widest text-navy">
          Snithi Dental
        </a>
        
        <nav className="hidden lg:flex items-center gap-10">
          {['Home', 'About', 'Care Services', 'Reviews', 'Contacts'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[14px] font-medium tracking-wide text-navy hover:text-blue transition-colors">
              {item.toUpperCase()}
            </a>
          ))}
        </nav>
        
        <div className="hidden lg:block">
          <a href="#appointment-form" className="inline-flex items-center justify-center bg-navy text-bg-white px-6 h-[44px] rounded-full font-medium text-[14px] hover:bg-blue transition-all duration-300">
            Book Appointment
          </a>
        </div>
        
        <button className="lg:hidden text-navy" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-bg-white border-t border-navy/5 shadow-premium py-4 px-6 flex flex-col gap-4">
          {['Home', 'About', 'Care Services', 'Reviews', 'Contacts'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setIsOpen(false)} className="text-[15px] font-medium text-navy py-2">
              {item}
            </a>
          ))}
          <a href="#appointment-form" onClick={() => setIsOpen(false)} className="mt-2 inline-flex items-center justify-center bg-navy text-white px-6 h-[48px] rounded-full font-medium text-[14px]">
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
}
