export function Hero() {
  return (
    <section id="home" className="pt-[100px] lg:pt-[120px] pb-16 lg:pb-[100px] bg-bg-primary flex items-center min-h-[560px] lg:min-h-[700px] xl:min-h-[800px]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-[40px] lg:gap-[60px] items-center">
          
          <div className="order-1 flex flex-col justify-center">
            <h1 className="text-[42px] sm:text-[52px] lg:text-[84px] xl:text-[96px] leading-[1.02] font-bold italic font-['Times_New_Roman',serif] text-navy tracking-tight max-w-[600px] lg:max-w-[700px] xl:max-w-[800px]">
              Brighten your smile with <span className="font-serif font-normal italic h-auto text-blue">expert dental care</span>
            </h1>
            
            <p className="mt-6 text-[16px] lg:text-[20px] xl:text-[22px] leading-[1.6] text-text-muted max-w-[420px] lg:max-w-[500px] xl:max-w-[600px]">
              Personalized dental care designed to keep your smile healthy, confident, and bright.
            </p>
            
            <div className="mt-8 lg:mt-10">
              <a href="#contact" className="inline-flex items-center justify-center bg-navy text-white px-8 lg:px-10 h-[52px] lg:h-[60px] xl:h-[64px] rounded-full font-medium text-[16px] lg:text-[18px] transition-all duration-300 hover:-translate-y-1 hover:shadow-premium">
                Schedule Your Visit →
              </a>
            </div>
          </div>
          
          <div className="order-2 w-full">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop" 
              alt="Dentist treating patient" 
              className="w-full aspect-[4/3] lg:aspect-[1.15/1] object-cover object-center rounded-xl shadow-premium"
              referrerPolicy="no-referrer"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
