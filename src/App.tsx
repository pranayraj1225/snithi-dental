import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { About } from './components/About';
import { DoctorSection } from './components/DoctorSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Treatments } from './components/Treatments';
import { FeaturedTreatments } from './components/FeaturedTreatments';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { PatientCare } from './components/PatientCare';
import { AppointmentForm } from './components/AppointmentForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary flex flex-col font-sans pb-[60px] lg:pb-0">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustStats />
        <About />
        <DoctorSection />
        <WhyChooseUs />
        <Treatments />
        <FeaturedTreatments />
        <Gallery />
        <Reviews />
        <PatientCare />
        <AppointmentForm />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
