export type ProductTag = "Trending" | "New" | "Best" | "Vote to Launch";

export interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  bookedCount: number;
  tag: ProductTag | null;
  perDayRent: number;
  outOfStock: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SuperCategory {
  name: string;
  slug: string;
  subCategories: NavLink[];
}

export interface SubCategory {
  name: string;
  slug: string;
  image: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Review {
  name: string;
  initials: string;
  city: string;
  category: string;
  rating: number;
  text: string;
}

export interface FooterGroup {
  title: string;
  links: NavLink[];
}

export interface Banner {
  desktopImage: string;
  mobileImage: string;
  href: string;
}
