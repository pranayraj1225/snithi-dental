export function TrustStats() {
  return (
    <section className="py-12 bg-bg-white border-y border-navy/5">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-6">
            <div className="text-[48px] font-bold text-navy leading-none">5.0</div>
            <div>
              <div className="flex text-yellow-400 mb-1 text-lg">
                ★★★★★
              </div>
              <div className="text-[14px] font-medium text-text-muted">
                Google Rating • 87+ Reviews
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-px h-[40px] bg-navy/10"></div>

          <div className="grid grid-cols-2 lg:flex gap-6 lg:gap-12">
            {[
              "Comfortable care",
              "Patient-focused care"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-soft-blue flex items-center justify-center text-blue font-bold text-sm">
                  ✓
                </div>
                <span className="text-[15px] font-medium text-navy">{feature}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
