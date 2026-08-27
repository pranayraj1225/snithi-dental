export function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop", label: "Clinic exterior" },
    { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop", label: "Treatment room" },
    { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop", label: "Dental equipment" },
    { src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop", label: "Dentist with patient" },
  ];

  return (
    <section className="py-16 lg:py-[100px] bg-bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-[12px] font-bold tracking-widest text-text-muted uppercase mb-4 block">
            Clinic Experience
          </span>
          <h2 className="text-[32px] sm:text-[42px] leading-[1.1] font-medium text-navy mb-4">
            Inside Snithi Dental
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="group relative aspect-[4/5] rounded-lg overflow-hidden bg-bg-primary">
              <img 
                src={img.src} 
                alt={img.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/40 transition-colors"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-sm font-medium">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
