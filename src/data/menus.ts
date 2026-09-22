export type Menu = {
  id: number;
  title: string;
  description: string;
  icon: string;
  price: string;
  testimonial: {
    quote: string;
    client: string;
  };
};

export const menus: Menu[] = [
  {
    id: 1,
    title: "Custom Celebration Cakes",
    description:
      "Bespoke multi-tiered cakes tailored for weddings, birthdays, and anniversaries.",
    icon: "/icons/service1.png",
    price: "From $120",
    testimonial: {
      quote: "A stunning centerpiece and delicious!",
      client: "Sarah & David M.",
    },
  },
  {
    id: 2,
    title: "Artisan Sourdough & Rustic Breads",
    description:
      "Naturally leavened sourdough loaves and crusty rustic breads baked fresh daily.",
    icon: "/icons/service6.png",
    price: "$8 - $14 / loaf",
    testimonial: {
      quote: "Best sourdough in town—unmatched crust.",
      client: "Mark T.",
    },
  },
  {
    id: 3,
    title: "Classic French Pastries",
    description:
      "Butter-rich croissants, pain au chocolat, and delicate choux pastries baked every morning.",
    icon: "/icons/service7.png",
    price: "$4.50 - $7.50 / piece",
    testimonial: {
      quote: "Light, flaky, and genuinely authentic.",
      client: "Elena R.",
    },
  },
  {
    id: 4,
    title: "Gourmet Cupcakes & Muffins",
    description:
      "Moist, beautifully frosted cupcakes and freshly baked fruit muffins in various flavors.",
    icon: "/icons/service4.png",
    price: "$28 / dozen",
    testimonial: {
      quote: "The salted caramel was a total hit!",
      client: "Jessica K.",
    },
  },
  {
    id: 5,
    title: "Fruit Tarts & Savory Pies",
    description:
      "Crisp pastry shells filled with fresh seasonal fruits, rich custard, or savory meats.",
    icon: "/icons/service5.png",
    price: "$35 - $50 (Full Size)",
    testimonial: {
      quote: "Perfect balance of fresh fruit and custard.",
      client: "Arthur L.",
    },
  },
  {
    id: 6,
    title: "Special Diet Bakery Items",
    description:
      "Flavorful gluten-free, vegan, and keto-friendly cakes and breads made with premium ingredients.",
    icon: "/icons/service3.png",
    price: "From $45 (6\" Whole Cake)",
    testimonial: {
      quote: "Best gluten-free cakes I've ever had.",
      client: "Chloe P.",
    },
  },
];