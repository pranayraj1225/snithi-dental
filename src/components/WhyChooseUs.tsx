import { clinicData } from '../data/config';
import { ShieldCheck, HeartPulse, Sparkles, Users, MessageSquare, DollarSign } from 'lucide-react';

export function WhyChooseUs() {
  const benefits = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue" />,
      title: "Experienced Dental Care",
      desc: "Professional treatment focused on your individual dental needs."
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-blue" />,
      title: "Comfortable Treatment",
      desc: "A gentle, patient-focused approach designed to make treatment more reassuring."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue" />,
      title: "Clear Communication",
      desc: "Understand your dental concerns and treatment options through clear explanations."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue" />,
      title: "Modern & Hygienic Environment",
      desc: "Patients appreciate the clean and hygienic clinical environment."
    },
    {
      icon: <Users className="w-8 h-8 text-blue" />,
      title: "Supportive Team",
      desc: "Friendly and supportive staff who help make the dental experience comfortable."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue" />,
      title: "Reasonable Pricing",
      desc: "Quality dental care with treatment that patients describe as affordable and reasonable."
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 lg:py-[100px] bg-bg-primary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-[12px] font-bold tracking-widest text-text-muted uppercase mb-4 block">
            The Snithi Difference
          </span>
          <h2 className="text-[32px] sm:text-[42px] leading-[1.1] font-medium text-navy mb-4">
            Why Patients Choose Snithi Dental
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-bg-white border border-navy/5 p-8 rounded-lg shadow-card flex flex-col">
              <div className="mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-[20px] font-medium text-navy mb-3">
                {benefit.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-text-muted">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
