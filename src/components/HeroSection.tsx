import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function HeroSection() {
  return (
    <section className="mx-auto px-6 pb-16 pt-10 md:px-8 md:pb-20 md:pt-16 bg-[#1E293B]">
      <div className="max-w-7xl mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2 max-w-">
          <div>
            <h1 className="max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight text-[#EAB308] md:text-7xl">
              ECA
            </h1>
            <h1 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-white">
             
              Bakery & Patisserie
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 md:text-[18px]">
              Welcome to ECA Bakery & Patisserie. Built on the core principle of
              "Eca"— delivering unmatched taste, comfort, and culinary joy—we
              combine traditional artisan fermentation techniques with premium
              ingredients to craft golden sourdough, and
              exquisite pastries daily.
            </p>

            <div className="mt-10 flex flex-col gap-4 md:flex-row">
              <Link to="/menus">
              <Button className="h-13 bg-[#EAB308] px-6 text-base hover:bg-[#1E293B] hover:border-[#EAB308]">
                Explore Our Menu
              </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  className="h-13 border-[#EAB308] bg-transparent px-6 text-base text-[#EAB308] hover:bg-[#EAB308] hover:text-white"
                >
                  Our Story
                </Button>
              </Link>
            </div>

            <div className="mt-14 h-px w-full max-w-lg bg-[#EAB308]" />
          </div>

          <div className="relative mx-auto w-full max-w-xl md:ml-auto">
            <div>
              <img
                src="./cake2.jpg"
                alt="Cake Picture"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
