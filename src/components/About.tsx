export function About() {
  return (
    <section id="about" className="py-16 lg:py-[100px] bg-bg-primary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-[70px] items-center">
          
          <div className="w-full relative">
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop" 
              alt="Dental Clinic" 
              className="w-full aspect-[4/3] object-cover rounded-lg shadow-card"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <span className="text-[12px] font-bold tracking-widest text-text-muted uppercase mb-4">
              About Snithi Dental
            </span>
            <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.1] font-medium text-navy mb-6">
              Modern Dental Care With a Personal Touch
            </h2>
            <p className="text-[16px] lg:text-[18px] leading-[1.6] text-text-muted mb-8">
              At Snithi Dental, our focus is on providing professional dental care in a supportive and hygienic environment. Patients appreciate our clear communication, gentle approach, and attention to individual treatment needs.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Patient-focused care",
                "Comfortable treatment experience",
                "Modern clinical environment",
                "Clear treatment guidance"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-navy font-medium">
                  <div className="w-5 h-5 rounded-full bg-soft-blue flex items-center justify-center text-blue text-xs">✓</div>
                  {item}
                </li>
              ))}
            </ul>
            
            <div>
              <a href="#care-services" className="inline-flex items-center justify-center bg-bg-white text-navy border border-navy/20 px-8 h-[48px] rounded-full font-medium transition-all duration-300 hover:bg-navy hover:text-bg-white">
                Learn More →
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
