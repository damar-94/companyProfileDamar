export type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  image: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "The custom wedding cake they created for us was not only a breathtaking centerpiece but also incredibly delicious. Every guest asked where we got it!",
    name: "Elena Rostova",
    role: "Bride & Event Client",
    image: "/client-1.jpg",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Hands down the best sourdough and pastries in town. The crust on their artisanal breads is absolute perfection, and the croissants are so flaky and buttery.",
    name: "Marcus Vance",
    role: "Local Food Critic",
    image: "/client-2.jpg",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "We order cupcakes and dessert platters for all our corporate events. Always fresh, delivered on time, and the gluten-free options taste just as amazing.",
    name: "Sophia Chen",
    role: "Corporate Event Planner",
    image: "/client-3.jpg",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Their velvet chocolate cake is pure bliss! You can really taste the quality of the ingredients in every single bite. This bakery has a customer for life.",
    name: "David Miller",
    role: "Regular Customer",
    image: "/client-4.jpg",
    rating: 5,
  },
];
