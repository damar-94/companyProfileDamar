import CoreTeams from "@/components/CoreTeams";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";

function About() {
  return (
    <div>
      <Navbar />

      <section className="mx-auto px-6 pb-16 pt-10 md:px-8 md:pb-20 md:pt-16 bg-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2 max-w-">
            <div className="relative mx-auto w-full max-w-xl md:ml-auto">
              <div>
                <img
                  src="./cake3.jpg"
                  alt="cake"
                  className="h-full w-full object-cover rounded-2xl"
                />
              </div>
            </div>

            <div>
              <h1 className="max-w-2xl text-5xl font-bold text-[#EAB308] md:text-7xl">
                ECA
              </h1>
              <h1 className="max-w-2xl text-2xl font-bold text-white md:text-6xl ">
                Bakery & Patisserie
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                ECA Bakery & Patisserie was founded on a simple yet profound
                Javanese concept: Eca—the noble word for delicious, fine taste,
                and culinary satisfaction. In a world of fast-paced production
                and artificial shortcuts, Eca represents our non-negotiable vow:
                every bite that leaves our oven must bring authentic flavor and
                genuine delight to your table.
              </p>

              <div className="mt-14 h-px w-full max-w-lg bg-[#EAB308]" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto px-6 pb-16 pt-10 md:px-8 md:pb-20 md:pt-16 bg-s[#f4f6ff]">
        <div className="max-w-7xl mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2 max-w-">
            <div>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#1E293B] md:text-lg">
                Founded in 2026, ECA began with a commitment to unhurried
                artisan baking. We believe that true flavor requires time,
                patience, and the finest natural ingredients. Our sourdoughs
                undergo slow 36-hour cold fermentations to unlock rich, complex
                flavors and gut-friendly digestibility, while our viennoiseries
                are hand-laminated using 100% pure butter to achieve golden,
                flaky perfection. Whether you are enjoying your quiet morning
                coffee with a warm croissant or gathering with loved ones over a
                celebration cake, ECA is dedicated to crafting moments that are,
                above all else, purely Eca.
              </p>

              <div className="mt-14 h-px w-full max-w-lg bg-[#EAB308]" />
            </div>
            <div className="relative mx-auto w-full max-w-xl md:ml-auto">
              <div>
                <img
                  src="./cake1.jpg"
                  alt="cake"
                  className="h-full w-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto px-6 pb-16 pt-10 md:px-8 md:pb-20 md:pt-16 bg-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#EAB308] md:text-4xl">
              Our Culture & Workplace Values
            </h2>
            <p className="mt-4 text-slate-300 text-base md:text-lg leading-8">
              Inside ECA's kitchen, warmth extends beyond our ovens. We foster a
              culture built on mutual respect, continuous learning, and
              uncompromising mindfulness.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3 text-center">
            <div className="p-6 bg-slate-800/40 rounded-xl border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-2">
                Patience & Precision
              </h3>
              <p className="text-slate-300 text-[16px] leading-6">
                We value quality over speed. Every baker is empowered to respect
                the natural time needed for proper fermentation and lamination.
              </p>
            </div>
            <div className="p-6 bg-slate-800/40 rounded-xl border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-2">
                Warm Hospitality
              </h3>
              <p className="text-slate-300 text-[16px] leading-6">
                We treat colleagues like family and guests like honored friends,
                bringing true Javanese warmth into every interaction.
              </p>
            </div>
            <div className="p-6 bg-slate-800/40 rounded-xl border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-2">
                Zero-Shortcut Integrity
              </h3>
              <p className="text-slate-300 text-[16px] leading-6">
                We take pride in transparent practices—using only pure butter,
                natural yeasts, and sustainably sourced ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CoreTeams />
      <Footer />
    </div>
  );
}
export default About;
