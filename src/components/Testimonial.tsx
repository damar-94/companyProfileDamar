import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#f4f6ff] px-6 py-16 sm:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="relative mb-10 flex items-end justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-[#131625] sm:text-4xl">
                What Our Customers Say
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-[#484b59] sm:text-base">
                Explore the authentic sentiments and experiences of our
                customers as they share their thoughts and satisfaction.
              </p>
            </div>

            <div className="hidden gap-3 sm:flex">
              <CarouselPrevious className="static translate-y-0 border-[#1E293B] text-[#1E293B] hover:bg-[#1E293B] hover:text-white" />
              <CarouselNext className="static translate-y-0 border-[#1E293B] text-[#1E293B] hover:bg-[#1E293B] hover:text-white" />
            </div>
          </div>

          <div className="mb-6 flex gap-3 sm:hidden">
            <CarouselPrevious className="static translate-y-0 border-[#1E293B] text-[#1E293B] hover:bg-[#1E293B] hover:text-white" />
            <CarouselNext className="static translate-y-0 border-[#1E293B] text-[#1E293B] hover:bg-[#1E293B] hover:text-white" />
          </div>

          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 md:basis-1/2 xl:basis-1/3"
              >
                <article className="h-full overflow-hidden rounded-2xl bg-white shadow-sm">
                  {/* Quote */}
                  <div className="min-h-[170px] px-6 py-7 sm:min-h-[180px]">
                    <p className="text-sm leading-7 text-[#4a4c57]">
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="bg-[#1E293B] px-6 py-6 text-white">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex min-w-0 items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-16 w-16 shrink-0 rounded-full object-cover"
                        />

                        <div className="min-w-0">
                          <h3 className="truncate text-base font-semibold text-[#EAB308]">
                            {testimonial.name}
                          </h3>

                          <p className="mt-1 truncate text-sm text-white/90">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex shrink-0 gap-0.5">
                        {Array.from({
                          length: testimonial.rating,
                        }).map((_, index) => (
                          <Star
                            key={index}
                            className="h-4 w-4 fill-[#EAB308] text-[#EAB308]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
