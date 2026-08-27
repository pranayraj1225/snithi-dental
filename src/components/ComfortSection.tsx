import { HeartPulse, MessageCircle, SmilePlus } from 'lucide-react';

export function ComfortSection() {
  const features = [
    {
      icon: <HeartPulse className="w-6 h-6 text-blue" />,
      title: "GENTLE APPROACH",
      description: "Thoughtful care designed around patient comfort."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-blue" />,
      title: "CLEAR EXPLANATIONS",
      description: "Understand your treatment before moving forward."
    },
    {
      icon: <SmilePlus className="w-6 h-6 text-blue" />,
      title: "SUPPORTIVE TEAM",
      description: "Friendly staff who help you feel comfortable throughout your visit."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue/10 transform skew-x-12 translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Your Comfort Comes First
            </h2>
            <div className="w-16 h-1 bg-blue mb-8 rounded-full"></div>
            <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-lg">
              Many patients describe their treatment experience as smooth and comfortable. Our approach focuses on careful treatment, clear communication and making every visit as reassuring as possible.
            </p>
            
            <a 
              href="#contact" 
              className="inline-block bg-white text-navy hover:bg-light-blue px-8 py-4 rounded-xl font-bold transition-colors"
            >
              EXPERIENCE GENTLE CARE
            </a>
          </div>

          <div className="space-y-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="bg-white/10 p-4 rounded-xl flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-wide mb-2">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
