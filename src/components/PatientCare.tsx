import { HeartPulse, BookOpen, Smile } from 'lucide-react';

export function PatientCare() {
  const cards = [
    {
      icon: <HeartPulse className="w-6 h-6 text-blue" />,
      title: "PERSONALIZED CARE",
      desc: "Treatment planned around your individual dental needs."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue" />,
      title: "PATIENT EDUCATION",
      desc: "Clear explanations help you understand your dental care."
    },
    {
      icon: <Smile className="w-6 h-6 text-blue" />,
      title: "COMFORTABLE EXPERIENCE",
      desc: "A supportive environment designed to help you feel at ease."
    }
  ];

  return (
    <section className="py-16 lg:py-[100px] bg-bg-white border-t border-navy/5">
      <div className="container-custom">
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <h2 className="text-[32px] sm:text-[42px] leading-[1.1] font-medium text-navy mb-6">
            Dental Care Built Around You
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.6] text-text-muted">
            Every patient has different dental needs. Our goal is to provide clear guidance, thoughtful treatment and a comfortable experience from consultation to follow-up.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-bg-primary rounded-xl p-8 text-center border border-navy/5 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-bg-white mx-auto flex items-center justify-center shadow-card mb-6">
                {card.icon}
              </div>
              <h3 className="text-[16px] font-bold tracking-wide text-navy mb-4">
                {card.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-text-muted">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
