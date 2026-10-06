import type {
  Banner,
  Faq,
  FooterGroup,
  NavLink,
  Review,
  SubCategory,
  SuperCategory,
} from "@/types";

const SITE = "https://sharepal.in";
const IMG = "https://images.sharepal.in";

export const CITY = "Bangalore";
export const CITY_SLUG = "bangalore";
export const CURRENT_CATEGORY = "gaming-gadgets-on-rent";

const sub = (category: string, name: string, slug: string): NavLink => ({
  label: name,
  href: `${SITE}/${CITY_SLUG}/${category}/${slug}`,
});

export const superCategories: SuperCategory[] = [
  {
    name: "Photography",
    slug: "photography-on-rent",
    subCategories: [
      ["DJI Drones", "dji-drones-on-rent"],
      ["iPhones", "iphones-on-rent"],
      ["Cameras", "all-cameras-on-rent"],
      ["Pocket Cameras", "pocket-cameras-on-rent"],
      ["360 Cameras", "360-cameras-on-rent"],
      ["Action Cameras", "action-cameras-on-rent"],
      ["DSLR Cameras", "dslr-cameras-on-rent"],
      ["Mirrorless Cameras", "mirrorless-cameras-on-rent"],
      ["Vlogging", "vlogging-cameras-on-rent"],
      ["UNLMTD Vlogging", "unlmtd-vlogging-on-rent"],
      ["Wildlife Photography", "wildlife-photography-cameras-on-rent"],
      ["Professional Cameras", "professional-cameras-on-rent"],
      ["GoPro Cameras", "gopro-cameras-on-rent"],
      ["Insta360 Cameras", "insta360-cameras-on-rent"],
      ["DJI Cameras", "dji-cameras-on-rent"],
      ["DSLR Gimbal Combos", "dslr-gimbal-on-rent"],
      ["Mobile Gimbals", "mobile-gimbals-on-rent"],
      ["Wireless & Collar Mics", "wireless-and-collar-mics-on-rent"],
      ["DSLR Lens", "dslr-lens-on-rent"],
      ["Tripod and camera accessories", "tripod-and-camera-accessories-on-rent"],
      ["Action Camera Mounts", "action-camera-mounts-on-rent"],
      ["Action Camera Add ons", "action-camera-add-ons-on-rent"],
    ].map(([n, s]) => sub("photography-on-rent", n, s)),
  },
  {
    name: "Gaming",
    slug: "gaming-gadgets-on-rent",
    subCategories: [
      ["GTA VI", "gta-vi-on-rent"],
      ["PS5 Console", "ps5-console-on-rent"],
      ["Xbox Console", "xbox-console-on-rent"],
      ["VR", "vr-on-rent"],
      ["Racing Wheel", "gaming-controllers-on-rent"],
      ["Big Screen Gaming", "big-screen-gaming"],
    ].map(([n, s]) => sub("gaming-gadgets-on-rent", n, s)),
  },
  {
    name: "Outdoor",
    slug: "outdoor-gears-on-rent",
    subCategories: [
      ["Trekking Gear", "trekking-gear-on-rent"],
      ["Riding Gear", "riding-gear-on-rent"],
      ["Camping Gear", "camping-gear-on-rent"],
      ["Trekking Shoes", "trekking-shoes-on-rent"],
      ["Snow Boots", "snow-boots-on-rent"],
      ["Trekking Jackets", "trekking-jackets-on-rent"],
      ["Trek/Snow Pants", "trek-snow-pants-on-rent"],
      ["Trek Accessories", "trek-accessories-on-rent"],
      ["Winter Jackets", "winter-jackets-on-rent"],
      ["Riding Jackets", "riding-jackets-on-rent"],
      ["Riding Boots", "riding-boots-on-rent"],
      ["Riding Essentials", "riding-essentials-on-rent"],
      ["Riding Luggage", "riding-luggage-on-rent"],
      ["Backpacks", "backpacks-on-rent"],
      ["Binoculars", "binoculars-on-rent"],
      ["Camping Tents", "camping-tents-on-rent"],
      ["Camping Stools & Tables", "camping-stools-and-tables-on-rent"],
      ["Sleeping Bags & Mats", "sleeping-bags-and-mats-on-rent"],
    ].map(([n, s]) => sub("outdoor-gears-on-rent", n, s)),
  },
  {
    name: "Entertainment",
    slug: "entertainment-on-rent",
    subCategories: [
      ["Projectors", "projectors-on-rent"],
      ["Speakers", "speakers-on-rent"],
      ["Mics", "mics-on-rent"],
      ["VR", "vr-on-rent"],
    ].map(([n, s]) => sub("entertainment-on-rent", n, s)),
  },
];

export const categoryHref = (slug: string) => `${SITE}/${CITY_SLUG}/${slug}`;

export const allProductsImage = `${IMG}/misc/hard-coded/sharepal/Product=All%20Products.webp`;

export const gamingSubCategories: SubCategory[] = [
  { name: "GTA VI", slug: "gta-vi-on-rent", image: `${IMG}/category-icons/gta-vi.webp` },
  {
    name: "PS5 Console",
    slug: "ps5-console-on-rent",
    image: `${IMG}/sub-category-card/ps5-console-on-rent-sharepal.webp`,
  },
  {
    name: "Xbox Console",
    slug: "xbox-console-on-rent",
    image: `${IMG}/sub-category-card/xbox-console-on-rent-sharepal.webp`,
  },
  { name: "VR", slug: "vr-on-rent", image: `${IMG}/sub-category-card/vr-on-rent-sharepal.webp` },
  {
    name: "Racing Wheel",
    slug: "gaming-controllers-on-rent",
    image: `${IMG}/categories/gaming-consoles/gaming-accessories/logitech-G29-driving-force-racing-wheel/logitech-g29-racing-wheel-on-rent-sharepal-1.webp`,
  },
  {
    name: "Big Screen Gaming",
    slug: "big-screen-gaming",
    image: `${IMG}/categories/gaming-consoles/big-screen-gaming/products/ps5-with-2-controllers-with-projector-on-rent%20.webp`,
  },
];

export const hero = {
  title: "Gaming Consoles",
  leftImage: `${IMG}/super-categories/gaming-left.webp`,
  rightImage: `${IMG}/super-categories/gaming-right.webp`,
  brandLogos: [
    { src: `${IMG}/super-categories-brand-logos/gaming/XBOX.svg`, alt: "XBOX" },
    { src: `${IMG}/super-categories-brand-logos/gaming/PS5.svg`, alt: "PS5" },
    { src: `${IMG}/super-categories-brand-logos/gaming/Sony.svg`, alt: "Sony" },
  ],
};

export const topBanner: Banner = {
  desktopImage: `${IMG}/sharepal-banners/assets-fund-banner.png`,
  mobileImage: `${IMG}/sharepal-banners/asset-partner-mobile.png`,
  href: "https://assets.sharepal.in/",
};

export const centerBanner: Banner = {
  desktopImage: `${IMG}/sharepal-banners/ews-generic-banner-desktop.png`,
  mobileImage: `${IMG}/sharepal-banners/ews-generic-banner-mobile.png`,
  href: "https://earnwithus.sharepal.in/",
};

export const faqs: Faq[] = [
  {
    question: "How can I rent from SharePal?",
    answer:
      "Renting from SharePal is quick and easy. You can browse the products, select your dates and add them to cart and checkout. You can choose to pay online or upon delivery.",
  },
  {
    question:
      "If I rent multiple products, do I need to extend the rental duration for all or partial extension is possible?",
    answer:
      "No, partial extension is not possible, all the products that are rented in that particular order have to be extended.",
  },
  {
    question: "When does the rental start?",
    answer:
      "The rental starts from the following day of the delivery day and ends a day prior to the return date. So for example, if you select the delivery date as 5th June and return date as 8th June. The rental is charged for 2 days.",
  },
  {
    question: "What will be the condition of the products at the time of delivery?",
    answer:
      "At SharePal.in, we make sure that the products you receive are in great condition upon delivery. We thoroughly inspect and clean each item before sending it your way. If you ever face any issues, our friendly customer support team is here to help. Your satisfaction matters to us the most!",
  },
  {
    question: "Why is verification required?",
    answer:
      "Profile verification is a crucial step at SharePal.in to ensure the safety and security of our platform and users. It helps us confirm the identity of our users, prevent fraud, and maintain a secure environment for everyone involved.",
  },
  {
    question: "How is the rental calculated?",
    answer:
      "We want the rentals to be affordable & attractive to both short-term and long-term users. Hence, the rental is calculated in a way that the effective per-day rental reduces as you rent longer. For example, 1-day rental cost of GoPro 12 camera is Rs 1299, whereas 7-days cost is Rs 2799 which means the effective per-day rent is Rs 400 only.",
  },
  {
    question: "What is the minimum rental period?",
    answer: "You can get started with a participation amount of ₹1 lakh.",
  },
];

export const reviews: Review[] = [
  {
    name: "Satyaki",
    initials: "SB",
    city: "Kolkata",
    category: "Trekking Gear",
    rating: 5,
    text: "I would recommend SharePal for anybody looking to rent trekking gears, on time delivery, condition of products delivered were very good, super transparent deposit return policy.",
  },
  {
    name: "Afrana",
    initials: "AS",
    city: "Bangalore",
    category: "Gaming Console",
    rating: 5,
    text: "Have used their services twice now. They never disappoint. Quick responses, polite, transparent, hassle free, great products as well. Rented trekking gear and PS4. Thanks Sharepal! Cheers to you guys!",
  },
  {
    name: "Kanthikiran",
    initials: "KK",
    city: "Bangalore",
    category: "Riding Gear",
    rating: 5,
    text: "It’s an amazing service, starting from the quality of the gear provided to the pickup and drop at doorstep facility. The staff is extremely helpful and supportive. The jacket was freshly washed and the shoes provided were brand new. The refund for the deposit was also processed immediately. We had no clue that this kind of service existed in India, SharePal.",
  },
  {
    name: "Amal",
    initials: "AA",
    city: "Bangalore",
    category: "Gaming Console",
    rating: 5,
    text: "I am a regular customer and order ps4\nIt’s very affordable and booking an order is super easy and user friendly website and polite staff.",
  },
  {
    name: "Pankaj",
    initials: "PS",
    city: "Mumbai",
    category: "Action Cameras",
    rating: 5,
    text: "The experience with share pal is awesome . The camera , service provide by them is good. Overall I am Happy by renting camera gear from share pal. Next time I will rent the gears from share pal only. Must recommend to everyone",
  },
  {
    name: "Jayaraman",
    initials: "JS",
    city: "Mumbai",
    category: "Riding Gear",
    rating: 5,
    text: "Great company amazing products at affordable prices and great service I would recommend share pal to everybody they really go out of the way for the best service I surely know I will be their forever customer.",
  },
  {
    name: "Manish",
    initials: "MM",
    city: "Mumbai",
    category: "Gaming console",
    rating: 5,
    text: "I like the way sharepal work and really enjoyed the ps4 will order again. Thanks sharepal",
  },
  {
    name: "Rakesh",
    initials: "RS",
    city: "Mumbai",
    category: "Trekking Gear",
    rating: 2,
    text: "Ordered 2 pair of shoes & 3 trekking poles. Shoes were in mint condition, very well cleaned and sanitized and so does the trekking poles. Delivery and pick-up was smooth. Refund was done within the time frame. If you have UPI it will be transferred immediately. I overall had a very good experience with Sharepal. Have recommended to my family and friends as well. Thank you Sharepal.",
  },
  {
    name: "Shruti",
    initials: "SJ",
    city: "Mumbai",
    category: "Winter Wear",
    rating: 5,
    text: "Right from the time I saw their website, till i got my refund the entire experience with SharePal was brilliant. The product listing, prices, delivery, communication, return. Everything was spot on. Product quality was brilliant. The way the team solves your issues is so rare to find in today’s times.. I dont think I am gonna look at any other place for my travel needs.",
  },
  {
    name: "Amit",
    initials: "AK",
    city: "Delhi",
    category: "Riding Gear",
    rating: 5,
    text: "Awesome experience. Please be the way you are. Received excellent clothes and shoes in washed and clean state. They looked like new ones. Received hasslefree refund.",
  },
];

export const stats = [
  { value: "250Cr+", label: "Saved Together" },
  { value: "4.5M Kg", label: "CO₂e Emissions Saved" },
  { value: "100K+", label: "Products in Circulation" },
];

const footerSub = (category: string, links: [string, string][]): NavLink[] =>
  links.map(([label, slug]) => ({ label, href: `${SITE}/${CITY_SLUG}/${category}/${slug}` }));

export const footerCategoryGroups: FooterGroup[] = [
  {
    title: "Action Cameras",
    links: footerSub("photography-on-rent", [
      ["Action Cameras", "action-cameras-on-rent"],
      ["Pocket Cameras", "pocket-cameras-on-rent"],
      ["GoPro Cameras", "gopro-cameras-on-rent"],
      ["DJI Cameras", "dji-cameras-on-rent"],
      ["DJI Drones", "dji-drones-on-rent"],
      ["360 Cameras", "360-cameras-on-rent"],
    ]),
  },
  {
    title: "Cameras",
    links: footerSub("photography-on-rent", [
      ["DSLR Cameras", "dslr-cameras-on-rent"],
      ["Cameras", "all-cameras-on-rent"],
      ["iPhones", "iphones-on-rent"],
      ["DSLR Gimbal Combos", "dslr-gimbal-on-rent"],
      ["Wildlife Photography", "wildlife-photography-cameras-on-rent"],
      ["Tripod and camera accessories", "tripod-and-camera-accessories-on-rent"],
    ]),
  },
  {
    title: "Trekking Gear",
    links: footerSub("outdoor-gears-on-rent", [
      ["Trekking Gear", "trekking-gear-on-rent"],
      ["Trekking Jackets", "trekking-jackets-on-rent"],
      ["Trek/Snow Pants", "trek-snow-pants-on-rent"],
      ["Trekking Shoes", "trekking-shoes-on-rent"],
      ["Trek Accessories", "trek-accessories-on-rent"],
    ]),
  },
  {
    title: "Riding Gear",
    links: footerSub("outdoor-gears-on-rent", [
      ["Riding Gear", "riding-gear-on-rent"],
      ["Riding Luggage", "riding-luggage-on-rent"],
      ["Riding Jackets", "riding-jackets-on-rent"],
      ["Riding Essentials", "riding-essentials-on-rent"],
      ["Riding Boots", "riding-boots-on-rent"],
      ["Binoculars", "binoculars-on-rent"],
    ]),
  },
  {
    title: "Creator Gear",
    links: footerSub("photography-on-rent", [
      ["Wireless & Collar Mics", "wireless-and-collar-mics-on-rent"],
      ["Professional Cameras", "professional-cameras-on-rent"],
      ["Mirrorless Cameras", "mirrorless-cameras-on-rent"],
      ["UNLMTD Vlogging", "unlmtd-vlogging-on-rent"],
      ["Mobile Gimbals", "mobile-gimbals-on-rent"],
      ["Vlogging", "vlogging-cameras-on-rent"],
    ]),
  },
  {
    title: "Gaming Console",
    links: footerSub("gaming-gadgets-on-rent", [
      ["PS5 Console", "ps5-console-on-rent"],
      ["VR", "vr-on-rent"],
      ["Racing Wheel", "gaming-controllers-on-rent"],
      ["Big Screen Gaming", "big-screen-gaming"],
      ["Xbox Console", "xbox-console-on-rent"],
    ]),
  },
  {
    title: "Winter Wear",
    links: footerSub("outdoor-gears-on-rent", [
      ["Snow Boots", "snow-boots-on-rent"],
      ["Winter Jackets", "winter-jackets-on-rent"],
      ["Backpacks", "backpacks-on-rent"],
    ]),
  },
  {
    title: "Camping Gear",
    links: footerSub("outdoor-gears-on-rent", [
      ["Camping Gear", "camping-gear-on-rent"],
      ["Camping Stools & Tables", "camping-stools-and-tables-on-rent"],
      ["Camping Tents", "camping-tents-on-rent"],
      ["Sleeping Bags & Mats", "sleeping-bags-and-mats-on-rent"],
    ]),
  },
  {
    title: "Audio Visual Equipment",
    links: footerSub("entertainment-on-rent", [
      ["Projectors", "projectors-on-rent"],
      ["VR", "vr-on-rent"],
      ["Mics", "mics-on-rent"],
      ["Speakers", "speakers-on-rent"],
    ]),
  },
];

export const footerCompanyGroups: (FooterGroup & { badges?: string[] })[] = [
  {
    title: "Sharepal",
    links: [
      { label: "About", href: `${SITE}/about-us` },
      { label: "Why SharePal", href: `${SITE}/why-sharepal` },
      { label: "Sitemap", href: `${SITE}/sitemap` },
      { label: "CarePal", href: `${SITE}/carepal` },
    ],
  },
  {
    title: "Become a Pal",
    links: [
      { label: "Sharepal for Creators", href: `${SITE}/sharepal-for-creators` },
      { label: "Careers", href: `${SITE}/life-at-sharepal?active=careers` },
      { label: "Sharepal for Brands", href: `${SITE}/sharepal-for-brands` },
      { label: "Asset Funding Program", href: "https://assets.sharepal.in" },
      { label: "Rent Your Gear", href: "https://earnwithus.sharepal.in/" },
    ],
    badges: ["Asset Funding Program", "Rent Your Gear"],
  },
  {
    title: "Information",
    links: [
      { label: "How it works?", href: `${SITE}/how-sharepal-works` },
      { label: "FAQs", href: `${SITE}/faq` },
      { label: "Verification", href: `${SITE}/complete-verification` },
      { label: "Cancellation Policy", href: `${SITE}/cancellation-policy` },
      { label: "Life at Sharepal", href: `${SITE}/life-at-sharepal` },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Terms & Condition", href: `${SITE}/terms-and-conditions` },
      { label: "Shipping policy", href: `${SITE}/shipping-policy` },
      { label: "Damage Policy", href: `${SITE}/damage-policy` },
      { label: "Terms of Use", href: `${SITE}/terms-of-use` },
      { label: "Privacy Policy", href: `${SITE}/privacy-policy` },
    ],
  },
];
