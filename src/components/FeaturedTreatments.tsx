import { ArrowRight, Stethoscope, Sparkles, Shield, Smile } from 'lucide-react';

export function FeaturedTreatments() {
  const treatments = [
    {
      title: "ROOT CANAL TREATMENT",
      desc: "Smooth and comfortable procedure to address severe tooth pain and preserve your natural tooth.",
      img: "https://images.unsplash.com/photo-1598256989800-fea5f616eb6e?q=80&w=800&auto=format&fit=crop",
      icon: <Stethoscope className="w-6 h-6 text-white" />
    },
    {
      title: "ZIRCONIUM CROWNS",
      desc: "Highly durable caps that look exactly like your natural teeth, designed for longevity and aesthetics.",
      img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
      icon: <Sparkles className="w-6 h-6 text-white" />
    },
    {
      title: "DENTAL IMPLANTS",
      desc: "Permanent and secure tooth replacements that restore your ability to eat, speak, and smile with confidence.",
      img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop",
      icon: <Shield className="w-6 h-6 text-white" />
    },
    {
      title: "INVISALIGN",
      desc: "Straighten your teeth discreetly with clear aligners, without the discomfort of traditional metal braces.",
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
      icon: <Smile className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section className="py-16 lg:py-[100px] bg-bg-primary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-[32px] sm:text-[42px] leading-[1.1] font-medium text-navy mb-4">
            Specialized Care for Your Dental Needs
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {treatments.map((treatment, idx) => (
            <div key={idx} className="group cursor-pointer rounded-2xl overflow-hidden relative shadow-card">
              <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/40 transition-colors z-10 duration-500"></div>
              <img 
                src={treatment.img} 
                alt={treatment.title} 
                className="w-full aspect-[4/3] lg:aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex items-end justify-between">
                <div className="max-w-[75%]">
                  <div className="w-12 h-12 rounded-full bg-blue/20 backdrop-blur-md flex items-center justify-center border border-white/20 mb-4">
                    {treatment.icon}
                  </div>
                  <h3 className="text-[20px] font-bold text-bg-white mb-2">{treatment.title}</h3>
                  <p className="text-bg-white/90 text-[14px] leading-[1.5] mb-4">{treatment.desc}</p>
                </div>
                
                <div className="w-10 h-10 rounded-full bg-white text-navy flex items-center justify-center group-hover:bg-blue group-hover:text-white transition-colors shrink-0">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
