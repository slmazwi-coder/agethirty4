const areas = [
  { city: "Durban", province: "KwaZulu-Natal", desc: "Website development & hosting in Durban" },
  { city: "Pietermaritzburg", province: "KwaZulu-Natal", desc: "Web development in Pietermaritzburg" },
  { city: "Newcastle", province: "KwaZulu-Natal", desc: "Website development in Newcastle KZN" },
  { city: "Richards Bay", province: "KwaZulu-Natal", desc: "Website development in Richards Bay" },
  { city: "Kokstad", province: "KwaZulu-Natal", desc: "Web development in Kokstad" },
  { city: "Matatiele", province: "KwaZulu-Natal", desc: "Website development in Matatiele" },
  { city: "Umzimkulu", province: "KwaZulu-Natal", desc: "Web development in Umzimkulu" },
  { city: "Mthatha", province: "Eastern Cape", desc: "Website development in Mthatha" },
  { city: "East London", province: "Eastern Cape", desc: "Website development in East London" },
  { city: "Butterworth", province: "Eastern Cape", desc: "Web development in Butterworth" },
  { city: "Queenstown", province: "Eastern Cape", desc: "Website development in Queenstown" },
];

const AreasWeServe = () => (
  <section id="areas" className="py-20 px-6 border-t border-border/40">
    <div className="max-w-7xl mx-auto">

      <div className="text-center mb-12">
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary/70 mb-3 block">
          Service Areas
        </span>
        <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight mb-4">
          Website Development Across{" "}
          <span className="text-gradient">KwaZulu-Natal & Eastern Cape</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          AGE THIRTY4 provides professional website development, hosting and custom software
          to businesses and schools across KwaZulu-Natal and the Eastern Cape. Whether you're
          in a major city or a growing town, we bring big-city digital quality to your doorstep.
        </p>
      </div>

      {/* City grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3 mb-12">
        {areas.map((area) => (
          <div
            key={area.city}
            className="group rounded-xl border border-border/60 p-4 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 text-center"
            title={area.desc}
          >
            <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
              {area.city}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">{area.province}</p>
          </div>
        ))}
        {/* Catch-all card */}
        <div className="group rounded-xl border border-dashed border-primary/30 p-4 hover:border-primary/60 hover:bg-primary/5 transition-all duration-200 text-center col-span-2 sm:col-span-1">
          <p className="font-semibold text-sm text-primary">Anywhere in SA</p>
          <p className="text-xs text-muted-foreground mt-0.5">Remote friendly</p>
        </div>
      </div>

      {/* SEO paragraph — naturally keyword-rich */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Looking for <strong className="text-foreground">website development in Durban</strong>,{" "}
          <strong className="text-foreground">Mthatha</strong>, or{" "}
          <strong className="text-foreground">East London</strong>? AGE THIRTY4 Technologies delivers
          professional websites, e-commerce stores, custom apps and website hosting to businesses and
          schools across <strong className="text-foreground">KwaZulu-Natal</strong> and the{" "}
          <strong className="text-foreground">Eastern Cape</strong> — including Pietermaritzburg,
          Newcastle, Richards Bay, Kokstad, Matatiele, Umzimkulu, Butterworth and Queenstown.
          Our packages start from R200/month and include local SEO setup so your business gets
          found by customers in your city.
        </p>

        <a
          href="https://wa.me/27616122588?text=Hi AGE THIRTY4, I'd like to get a website for my business"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/20"
        >
          Get a Free Quote on WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default AreasWeServe;
