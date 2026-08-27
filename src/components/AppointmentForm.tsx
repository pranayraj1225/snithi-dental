import { useState } from 'react';

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, integrate with form submission endpoint
  };

  return (
    <section id="appointment-form" className="py-16 lg:py-[100px] bg-bg-primary border-t border-navy/5">
      <div className="container-custom">
        <div className="max-w-[800px] mx-auto bg-bg-white rounded-2xl shadow-premium border border-navy/5 overflow-hidden">
          
          <div className="bg-navy p-8 sm:p-10 text-center">
            <h2 className="text-[28px] sm:text-[32px] font-medium text-bg-white mb-2">Request an Appointment</h2>
            <p className="text-bg-white/80 text-[15px]">Fill out the form below and our team will contact you shortly.</p>
          </div>

          <div className="p-8 sm:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-soft-blue text-blue flex items-center justify-center text-2xl mx-auto mb-6">
                  ✓
                </div>
                <h3 className="text-[24px] font-medium text-navy mb-4">Thank you!</h3>
                <p className="text-[16px] text-text-muted max-w-[400px] mx-auto">
                  Your appointment request has been received. Our team will contact you shortly to confirm your visit.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-blue font-medium hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-bold tracking-wider uppercase text-text-muted mb-2">Full Name</label>
                    <input type="text" required className="w-full bg-bg-primary border border-navy/10 rounded-lg h-[48px] px-4 text-[15px] focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold tracking-wider uppercase text-text-muted mb-2">Phone Number</label>
                    <input type="tel" required className="w-full bg-bg-primary border border-navy/10 rounded-lg h-[48px] px-4 text-[15px] focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-bold tracking-wider uppercase text-text-muted mb-2">Email Address</label>
                    <input type="email" className="w-full bg-bg-primary border border-navy/10 rounded-lg h-[48px] px-4 text-[15px] focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold tracking-wider uppercase text-text-muted mb-2">Preferred Date</label>
                    <input type="date" className="w-full bg-bg-primary border border-navy/10 rounded-lg h-[48px] px-4 text-[15px] focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-navy" />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-bold tracking-wider uppercase text-text-muted mb-2">Treatment / Reason for Visit</label>
                  <select className="w-full bg-bg-primary border border-navy/10 rounded-lg h-[48px] px-4 text-[15px] focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all text-navy">
                    <option value="">Select an option</option>
                    <option value="general">General Checkup / Consultation</option>
                    <option value="root-canal">Root Canal Treatment</option>
                    <option value="implants">Dental Implants</option>
                    <option value="crowns">Zirconium Crowns</option>
                    <option value="invisalign">Invisalign / Aligners</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[13px] font-bold tracking-wider uppercase text-text-muted mb-2">Message (Optional)</label>
                  <textarea rows={4} className="w-full bg-bg-primary border border-navy/10 rounded-lg p-4 text-[15px] focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-navy text-bg-white h-[56px] rounded-lg font-bold text-[15px] transition-all hover:bg-blue hover:shadow-premium">
                  REQUEST APPOINTMENT
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
