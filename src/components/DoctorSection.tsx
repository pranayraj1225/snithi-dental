import { clinicData } from '../data/config';

export function DoctorSection() {
  return (
    <section className="py-16 lg:py-[100px] bg-bg-white border-y border-navy/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-[80px] items-center">
          
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <span className="text-[12px] font-bold tracking-widest text-text-muted uppercase mb-4 block">
              Meet {clinicData.doctorName}
            </span>
            <h2 className="text-[32px] sm:text-[42px] leading-[1.1] font-medium text-navy mb-6">
              Compassionate Dental Care With a Patient-First Approach
            </h2>
            <p className="text-[16px] lg:text-[18px] leading-[1.6] text-text-muted mb-8">
              Patients consistently mention {clinicData.doctorName} for her patience, expertise, clear explanations and attentive care throughout their treatment.
            </p>
            
            <div className="inline-flex flex-col">
              <span className="text-[18px] font-bold text-navy">{clinicData.doctorName}</span>
              <span className="text-[15px] text-text-muted">Dentist</span>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 w-full relative">
            {/* Professional doctor-photo placeholder */}
            <div className="w-full aspect-[4/5] bg-bg-primary rounded-xl overflow-hidden shadow-card flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop" 
                alt={`${clinicData.doctorName} - Dentist`}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
