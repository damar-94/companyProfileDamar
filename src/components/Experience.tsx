const stats = [
  {
    value: "100%",
    label: "Organic Ingredients",
  },
  {
    value: "50+",
    label: "Daily Baked Goods",
  },
  {
    value: "12+",
    label: "Stores",
  },
  {
    value: "15k+",
    label: "Happy Customers",
  },
];

export function Experience() {
  return (
    <section className="mx-auto px-6 pb-20 pt-8 md:px-8 bg-[#1E293B]">
      <div className="grid gap-10 md:grid-cols-[1.1fr_2fr] md:items-start max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#EAB308] md:text-4xl italic">
            Good Taste, Beautifully Crafted
          </h2>

         
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold text-white mdtext-6xl">
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-slate-300 md:text-[16px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}