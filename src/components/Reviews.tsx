import { ArrowRight, Star } from 'lucide-react';
import { clinicData } from '../data/config';

export function Reviews() {
  const mainReviews = [
    {
      stars: 5,
      text: "Got my root canal treatment and zirconium cap. It was smooth, painless and the cap was very similar to my natural teeth. I came with severe pain in my teeth which got relieved. I highly recommend this clinic and Dr. Vasavi and team for exceptional care and treatment."
    },
    {
      stars: 5,
      text: "Great experience with my dental implant treatment at Snithi Dental, Kompally. Dr. Vasavi took excellent care of me throughout the 6-month process and explained everything clearly. Dr. Vasavi and her team showed great expertise and patience."
    },
    {
      stars: 5,
      text: "Initially I came with extreme pain with severe decay of many teeth. Dr. Vasavi and team took extreme care in explaining me about root canal and zirconium crowns. I felt very painless treatment..."
    }
  ];

  const snippets = [
    "Excellent service and treatment from the doctor, thank you!",
    "The staff is supportive and the facility is hygienic.",
    "Had painless root canal and zirconium crown by Dr. Vasavi at affordable price."
  ];

  return (
    <section id="reviews" className="py-16 lg:py-[100px] bg-bg-primary">
      <div className="container-custom">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          <div className="lg:w-1/3 flex flex-col justify-center">
            <span className="text-[12px] font-bold tracking-widest text-text-muted uppercase mb-4 block">
              Patient Experiences
            </span>
            <h2 className="text-[32px] sm:text-[42px] leading-[1.1] font-medium text-navy mb-8">
              What Our Patients Say
            </h2>
            
            <div className="bg-bg-white p-8 rounded-xl border border-navy/5 shadow-card mb-8">
              <div className="text-[56px] font-bold text-navy leading-none mb-2">{clinicData.rating}</div>
              <div className="flex text-yellow-400 mb-4 text-xl">
                ★★★★★
              </div>
              <div className="text-[16px] font-medium text-navy mb-1">
                Highly rated by our patients
              </div>
              <div className="text-[14px] text-text-muted">
                {clinicData.reviewCount} Google Reviews
              </div>
            </div>

            <a 
              href={clinicData.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[15px] font-bold text-navy hover:text-blue transition-colors group"
            >
              READ REVIEWS ON GOOGLE <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="lg:w-2/3">
            <div className="grid sm:grid-cols-2 gap-6">
              {mainReviews.map((review, idx) => (
                <div key={idx} className={`bg-bg-white p-8 rounded-xl border border-navy/5 shadow-card flex flex-col ${idx === 2 ? 'sm:col-span-2' : ''}`}>
                  <div className="flex text-yellow-400 mb-4 text-lg">
                    {Array.from({ length: review.stars }).map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-[15px] leading-[1.7] text-navy italic">
                    "{review.text}"
                  </p>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mt-6">
              {snippets.map((snippet, idx) => (
                <div key={idx} className="bg-bg-white p-6 rounded-xl border border-navy/5 shadow-card flex flex-col justify-center text-center">
                  <div className="flex justify-center text-yellow-400 mb-3 text-sm">
                    ★★★★★
                  </div>
                  <p className="text-[14px] leading-[1.6] text-text-muted italic">
                    "{snippet}"
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
