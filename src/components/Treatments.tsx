import { Stethoscope, Shield, Sparkles, Smile, ArrowRight, HeartPulse, ShieldCheck, Heart } from 'lucide-react';
import { clinicData } from '../data/config';

export function Treatments() {
  const services = [
    {
      icon: <Stethoscope className="w-6 h-6 text-blue" />,
      title: "ROOT CANAL TREATMENT",
      description: "Treatment designed to address infected or damaged tooth pulp while helping preserve the natural tooth."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-blue" />,
      title: "ZIRCONIUM CROWNS",
      description: "Durable tooth restoration designed to restore the appearance and function of damaged teeth."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue" />,
      title: "DENTAL IMPLANTS",
      description: "Tooth replacement treatment designed to restore function and confidence."
    },
    {
      icon: <Smile className="w-6 h-6 text-blue" />,
      title: "INVISALIGN TREATMENT",
      description: "Clear aligner-based orthodontic treatment for patients seeking a more discreet way to straighten teeth."
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-blue" />,
      title: "GENERAL DENTISTRY",
      description: "Routine dental care, examinations and treatment for common dental concerns."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue" />,
      title: "DENTAL EXTRACTIONS",
      description: "Professional tooth extraction when removal is necessary."
    },
    {
      icon: <Heart className="w-6 h-6 text-blue" />,
      title: "COSMETIC DENTISTRY",
      description: "Treatments focused on improving the appearance of your smile."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue" />,
      title: "PREVENTIVE DENTISTRY",
      description: "Regular care and guidance to help maintain healthy teeth and gums."
    }
  ];

  return (
    <section id="care-services" className="py-16 lg:py-[100px] bg-bg-white border-t border-navy/5">
      <div className="container-custom">
        
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-[12px] font-bold tracking-widest text-text-muted uppercase mb-4 block">
            OUR TREATMENTS
          </span>
          <h2 className="text-[32px] sm:text-[42px] leading-[1.1] font-medium text-navy mb-4">
            Complete Dental Care for Your Smile
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.6] text-text-muted">
            From relieving dental pain to restoring and improving your smile, explore our range of dental treatments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-bg-white border border-navy/5 p-8 rounded-lg shadow-card hover:shadow-premium transition-shadow duration-300 group flex flex-col h-full">
              <div className="w-12 h-12 rounded-full bg-soft-blue flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-[16px] font-bold tracking-wide text-navy mb-3">{service.title}</h3>
              <p className="text-[14px] leading-[1.6] text-text-muted flex-grow mb-6">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
