import { Phone, Calendar, MessageCircle, Star } from 'lucide-react';
import { clinicData } from '../data/config';

export function MobileActionBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-bg-white border-t border-navy/10 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50 flex justify-around items-center p-2 pb-[calc(env(safe-area-inset-bottom)+0.5rem)]">
      
      <a 
        href={`tel:${clinicData.phone.replace(/\s/g, '')}`}
        className="flex flex-col items-center justify-center w-1/4 py-2 text-navy hover:text-blue transition-colors"
      >
        <Phone className="w-5 h-5 mb-1" />
        <span className="text-[11px] font-bold uppercase tracking-wider">Call</span>
      </a>
      
      <div className="w-px h-8 bg-navy/10"></div>
      
      <a 
        href={`https://wa.me/${clinicData.whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center w-1/4 py-2 text-green-600 hover:text-green-700 transition-colors"
      >
        <MessageCircle className="w-5 h-5 mb-1" />
        <span className="text-[11px] font-bold uppercase tracking-wider">WhatsApp</span>
      </a>
      
      <div className="w-px h-8 bg-navy/10"></div>
      
      <a 
        href="#appointment-form"
        className="flex flex-col items-center justify-center w-1/4 py-2 text-navy hover:text-blue transition-colors"
      >
        <Calendar className="w-5 h-5 mb-1" />
        <span className="text-[11px] font-bold uppercase tracking-wider">Book</span>
      </a>

      <div className="w-px h-8 bg-navy/10"></div>
      
      <a 
        href="#reviews"
        className="flex flex-col items-center justify-center w-1/4 py-2 text-yellow-500 hover:text-yellow-600 transition-colors"
      >
        <Star className="w-5 h-5 mb-1 fill-current" />
        <span className="text-[11px] font-bold uppercase tracking-wider">Reviews</span>
      </a>
      
    </div>
  );
}
