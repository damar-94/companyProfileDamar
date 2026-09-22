import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { menus } from "@/data/menus";
import { Link } from "react-router";

export function MenusPage() {
  return (
    <div>
      <Navbar />

      <section className="relative overflow-hidden bg-[#1E293B] md:bg-[url('/cake4.jpg')] bg-cover px-6 py-16 md:px-20 md:py-20">
        <div className="mx-auto max-w-7xl bg-slate-300 p-4 rounded-2xl">
          <h2 className="text-3xl font-bold text-[#EAB308] text-center py-2 rounded-2xl bg-[#1E293B]">
            Our Menu
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3 ">
            {menus.map((menu) => (
              <article
                key={menu.id}
                className="flex flex-col items-center text-center border-4 border-slate-300 p-2 rounded-2xl shadow-xl transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-24 w-24 items-center justify-center ">
                  <img
                    src={menu.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-24 w-24 object-contain"
                  />
                </div>

                <h3 className="mt-4 text-base font-bold text-[#1E293B]">
                  {menu.title}
                </h3>

                <p className="max-w-xs text-sm leading-6 text-[#1E293B]">
                  {menu.description}
                </p>

                <p className="mt-3 max-w-xs text-sm italic text-[#1E293B]">
                  ~{menu.testimonial.quote}~
                </p>

                <p className="text-[14px] text-[#1E293B]">
                  {menu.testimonial.client}
                </p>

                <p className="mt-3 text-sm text-[#1E293B]">{menu.price}</p>

                <Link to="/contact">
                  <Button className="bg-[#1E293B] hover:bg-[#EAB308]">
                    Order
                  </Button>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
