export type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: 1,
    title: "Custom Cake Design",
    description:
      "Tailor-made cakes crafted for weddings, birthdays, and special celebrations.",
    icon: "/icons/service1.png",
  },
  {
    id: 2,
    title: "Bread Baking",
    description:
      "Handcrafted sourdough and rustic breads baked fresh daily using organic flour.",
    icon: "/icons/service2.png",
  },
  {
    id: 3,
    title: "Pastry & Dessert Catering",
    description:
      "Delightful pastry platters, mini desserts, and treats for corporate events and parties.",
    icon: "/icons/service4.png",
  },
  {
    id: 4,
    title: "Special Diet Baking",
    description:
      "Delicious gluten-free, vegan, and sugar-free options without compromising on flavor.",
    icon: "/icons/service3.png",
  },
  {
    id: 5,
    title: "Daily Fresh Pastries",
    description:
      "Flaky croissants, fruit tarts, and sweet treats ready for morning pickups.",
    icon: "/icons/service5.png",
  },
  {
    id: 6,
    title: "Baking Workshops",
    description:
      "Hands-on masterclasses teaching cake decorating and traditional baking techniques.",
    icon: "/icons/chef.png",
  },
];
