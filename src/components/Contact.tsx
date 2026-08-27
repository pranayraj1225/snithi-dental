import { MessageCircle, MapPin, Clock } from 'lucide-react';
import { clinicData } from '../data/config';

export function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-[100px] bg-bg-white border-b border-navy/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-[80px] items-start">
          
          <div>
            <h2 className="text-[32px] sm:text-[42px] leading-[1.1] font-medium text-navy mb-8">
              Visit Snithi Dental
            </h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-soft-blue text-blue flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold tracking-wider uppercase text-text-muted mb-2">Location</h3>
                  <p className="text-[16px] text-navy leading-[1.6]">
                    Snithi Dental<br/>
                    Harsha Hospital Lane<br/>
                    Brundavan Colony, Kompally<br/>
                    Hyderabad / Secunderabad<br/>
                    Telangana 500067
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-soft-blue text-blue flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold tracking-wider uppercase text-text-muted mb-2">Status</h3>
                  <p className="text-[16px] text-navy leading-[1.6]">
                    Open / Closes around 8 PM
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a href={`tel:${clinicData.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center bg-navy text-bg-white px-8 h-[52px] rounded-full font-medium text-[15px] transition-all hover:bg-blue shadow-card">
                CALL NOW
              </a>
              <a href={`https://wa.me/${clinicData.whatsappNumber}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-green-600 text-bg-white px-8 h-[52px] rounded-full font-medium text-[15px] transition-all hover:bg-green-700 shadow-card gap-2">
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
              <a href={clinicData.googleMapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-bg-white text-navy border border-navy/20 px-8 h-[52px] rounded-full font-medium text-[15px] transition-all hover:bg-navy hover:text-bg-white w-full sm:w-auto mt-2 sm:mt-0">
                GET DIRECTIONS
              </a>
            </div>
          </div>
          
          <div className="w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[500px] bg-bg-primary rounded-xl border border-navy/10 overflow-hidden shadow-card flex items-center justify-center relative">
             <div className="absolute inset-0 bg-blue/5 flex flex-col items-center justify-center text-center p-8 z-10 pointer-events-none border-dashed border-2 border-navy/10 rounded-xl m-2">
                <MapPin className="w-8 h-8 text-blue mb-4 opacity-50" />
                <p className="font-medium text-navy text-lg mb-2">Google Maps Integration</p>
                <p className="text-sm text-text-muted max-w-[250px]">Replace with embed iframe using a Maps API key in production.</p>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
