import { services } from "@/data/services";

export function Services() {
  return (
    <section className="relative overflow-hidden bg-[#1E293B] px-6 py-16 md:px-20 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#EAB308] md:text-4xl">
            What We Can Offer You
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12  md:mt-10 md:grid-cols-3 md:gap-x-16 md:gap-y-10">
          {services.map((service) => (
            <article
              key={service.id}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-24 w-24 items-center justify-center">
                <img
                  src={service.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-24 w-24 object-contain transition-transform duration-300 hover:-translate-y-1"
                />
              </div>

              <h3 className="mt-4 text-base font-bold text-white md:text-[20px]">
                {service.title}
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-slate-300 md:text-[16px]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}