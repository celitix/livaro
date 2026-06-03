export const siteUrl = "https://levarostudio.com";
export const brand = {
  name: "LIVARO",
  email: "info@levarostudio.com",
  phone: "+91 9314-00-3146",
  tagline: "Kitchen | Wardrobes | Furniture",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Modular Kitchens", href: "/modular-kitchens" },
  { label: "Wardrobes", href: "/wardrobes" },
  {
    label: "Furniture",
    children: [
      { label: "Home Furniture", href: "/furniture/home" },
      { label: "Office Furniture", href: "/furniture/office" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// Hybrid image mode: replace any URL with /images/... later without touching components.
export const img = {
  hero: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
  heroSide:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
  about:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  /* KITCHEN HERO */
  kitchenHero: "/images/kitchens/kitchenshero.jpg",

  /* KITCHEN FEATURES */

  straightKitchen: "/images/kitchens/straight.jpg",

  parallelKitchen: "/images/kitchens/parallel.jpg",

  lShapeKitchen: "/images/kitchens/lshape.jpg",

  uShapeKitchen: "/images/kitchens/ushape.jpg",

  islandKitchen: "/images/kitchens/island.jpg",

  /* EXISTING */
  wardrobe: "/images/wardrobes/slidingWardrobes.jpg",
  furniture: "/images/furniture/officetables.jpg",
  contact:
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
};

export const services = [
  {
    title: "Modular Kitchens",
    desc: "Architectural kitchens planned around movement, storage, surfaces and daily rituals.",
    image: img.kitchenHero,
    href: "/modular-kitchens",
    items: ["Straight", "Parallel", "L-Shaped", "U-Shaped", "Island"],
  },
  {
    title: "Wardrobes",
    desc: "Quietly luxurious wardrobes with thoughtful interiors, finishes and precision hardware.",
    image: img.wardrobe,
    href: "/wardrobes",
    items: ["Sliding", "Hinged", "Walk-In", "Custom Storage"],
  },
  {
    title: "Custom Furniture",
    desc: "Tailored TV units, office tables, storage walls and furniture pieces for modern homes.",
    image: img.furniture,
    href: "/furniture",
    items: ["TV Units", "Office Tables", "Storage", "Entertainment"],
  },
];

export const projects = [
  {
    title: "Walnut Island Kitchen",
    category: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=900&q=85",
    location: "Jaipur",
    size: "tall",
  },
  {
    title: "Muted Walk-In Wardrobe",
    category: "Wardrobes",
    image:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=85",
    location: "C-Scheme",
  },
  {
    title: "Stone TV Lounge",
    category: "Furniture",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=900&q=85",
    location: "Mansarovar",
    size: "wide",
  },
  {
    title: "Linear Parallel Kitchen",
    category: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=85",
    location: "Vaishali Nagar",
  },
  {
    title: "Soft Gold Storage Wall",
    category: "Wardrobes",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    location: "Jagatpura",
    size: "tall",
  },
  {
    title: "Executive Office Table",
    category: "Furniture",
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=900&q=85",
    location: "Malviya Nagar",
  },
];

export const features = [
  "Custom Design",
  "Space Optimization",
  "Premium Materials",
  "Expert Craftsmanship",
  "Precision Installation",
  "End-to-End Service",
];
