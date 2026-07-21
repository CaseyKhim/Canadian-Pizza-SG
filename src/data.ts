import { PizzaItem, SideItem, PromoDeal, LocationItem } from "./types";

export const PIZZAS: PizzaItem[] = [
  {
    id: "beef-pepperoni",
    name: "Beef Pepperoni",
    description: "Premium beef pepperoni, loaded with double mozzarella on our signature tomato sauce base. Perfectly baked golden crust.",
    basePriceMedium: 14.99,
    basePriceLarge: 18.99,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGvkFIrk6FOe8EiTAc08PQ9NzFksJHiG_Fxfp0Q4iemp0GIDy65ne-gxtiz7wQUC-UePISF4WlmvXdMlBxyfSgu3Jjf9_-cc-yFwboar2XE6Q5fsHqX5URvNp3dBI82QiCE522zeVRVcqYMWvrVogXrE3j0KCn4pMPzCRDlSzJToMbgleCk4tJqMMaJ66SDSqVO5Yh-wApWPiwOtTKWzUogSexE5yw4udzrdK62CVTzUV_DEERTKaFkw",
    type: "Classic",
    isHot: true,
    tags: ["Classic", "Best Seller"]
  },
  {
    id: "classic-hawaiian",
    name: "Classic Hawaiian",
    description: "Sweet pineapple chunks and savory turkey ham layered with premium mozzarella on our custom hand-tossed base.",
    basePriceMedium: 14.99,
    basePriceLarge: 19.99,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxw8vtzawWCXhzM3lpk7Oo-2NGHWdAOT7CPIIsWv5e44geaXXkEaI9tEJJkrhyq_VGGTo_51eEEdRfIDTBtfWIcS6dLsBRgKi4iI18hf0iYdiYR1R9cptgh6obNKPAy4hHVbQEkpsxQEB2ovhbBMJ8kTSbWuu07tdr9b81ONBgeXGAQsunntCdUlOwV1mmoYINzD9NIyfyvC-t-uUP3eigB7FTfEToKgdkL2LszzGMQEYNZdcPYNwFWg",
    type: "Classic",
    tags: ["Sweet & Savory"]
  },
  {
    id: "cheese-lover",
    name: "Cheese Lover",
    description: "A decadent gourmet blend of mozzarella, cheddar, and parmesan cheeses for the ultimate rich cheese pulling experience.",
    basePriceMedium: 14.99,
    basePriceLarge: 18.49,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVZw44IO06_eUuj9XC7G4Me9S1dlWDgLQC6qlt8sXaGQDxE6EQUYuNv5GzahCSa3ck-VNdeIRRmtNw7FcJlWtePz0Apd97WKJDOVbscfzeQ17pOVLFtHTLFrFosOtpK50RihR8B6WMoT9jXXFBQ-ryti3AQaNntjn5ZrRwV017mxds-5eqVgHkEdGyaltut8FOYWMhTmMtweHJUG9hyrUmky4f3TnR2es-BnON-IA1pg9zUXMfO20SOw",
    type: "Classic",
    tags: ["Vegetarian"]
  },
  {
    id: "bbq-chicken-bonanza",
    name: "BBQ Chicken Bonanza",
    description: "Shredded succulent roast chicken, sweet red onions, and smoky gourmet BBQ sauce drizzled artistically over golden mozzarella.",
    basePriceMedium: 16.99,
    basePriceLarge: 18.99,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCky16A3kpHhhTeSGwCdEtuafuSS4oYSVUHKV1TJIYX4MuRlUEB6MdHE8AENBdHvEVyNqdzcywtELLgIoHPovwRMMtynCGWBkxuu4NNERfpjt9G0JXK5lx_ZEQo6j7pTHe-nHsMHdwGHsc09VjpgmKHlVsOvwyHD7W93xHykSJOhy230cZXaGMgYN_0JjAygMfgTyF08G3cPJYvNq8VzGVtVXacGNdFJyxHRLvwdkLaslY6K5sPtYf99w",
    type: "Premium",
    tags: ["Protein Rich", "Best Seller"]
  },
  {
    id: "garden-special",
    name: "Garden Special",
    description: "A vibrant, luxurious vegetarian supreme pizza loaded with colorful bell peppers, black olives, sliced mushrooms, and roasted tomatoes.",
    basePriceMedium: 15.99,
    basePriceLarge: 17.99,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwQtGC7F_mBCiD7ltOlwJrhN00-UsmCEHinEeqI0T6T_Ui0ESMv3FdjhZSMkwmqyFK-k035cyiVE4f27eCh5wM86xc3oAEITD45nn0iLMgBk2Y5rhqtfe2d1lBKjjnQX3K2JDuYOXUq8ZVfS-dHfwtYOHX3urTn4F9X6hpk3txpYNQ9BzqH6FmA_q0dlJGE_Hn-1oX7OSUKTaX90Wzl-qjk3IyvTffZNcsaM7ZnoKDWAHCKId36VJ34A",
    type: "Premium",
    tags: ["Vegetarian", "Fresh Pick"]
  }
];

export const SIDES: SideItem[] = [
  {
    id: "chicken-wings",
    name: "10 pcs BBQ Chicken Wings",
    price: 9.99,
    category: "Sides",
    description: "Juicy baked wings tossed in smoky honey BBQ sauce."
  },
  {
    id: "garlic-bread",
    name: "Fresh Garlic Bread",
    price: 4.99,
    category: "Sides",
    description: "Toasted baguette with real garlic butter and herbs."
  },
  {
    id: "garden-salad",
    name: "Fresh Garden Salad",
    price: 5.99,
    category: "Sides",
    description: "Crisp greens, cucumbers, and tomatoes with Italian vinaigrette."
  },
  {
    id: "soda-2l",
    name: "2L Coca-Cola Bottle",
    price: 3.49,
    category: "Drinks",
    description: "Chilled classic carbonated soft drink."
  },
  {
    id: "soft-drink-can",
    name: "Chilled Soft Can",
    price: 1.99,
    category: "Drinks",
    description: "Choice of Coca-Cola, Sprite, or Fanta can."
  }
];

export const PROMO_DEALS: PromoDeal[] = [
  {
    id: "double-deal",
    name: "Double Deal",
    description: "Our signature offering. Buy any two large specialty pizzas for the price of one. Perfect for movie nights or game days. Higher-priced pizza is charged, the second is absolutely FREE!",
    price: 29.99,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfGk_PD3atEUpkjHElv3s0zmO9xKAGFkkdPMEMacw-Jp4zFMPKNTC7YTyq4gzAE8luXeC4_bZsusEx8BufC0RCF73Yp6CspnhZDqXHn-USiBGK5bbI1gzxyv7ddyESR8oCTJEeuiV6S20YdeeGM8iSm7lVVzmXAVGwr5O_K9ZcnLIxMtOF98UcMNqI26iIgIs9uF2LDG2SJbxfwQbP5sgkgsnl36COZDdyt59p3wqRicSYOm9uKMG9ww",
    badge: "BEST VALUE",
    isBestValue: true,
    isCustomizable: true,
    includes: ["2 Large Pizzas", "Any Specialty Toppings", "Free Delivery"]
  },
  {
    id: "family-feast",
    name: "Family Feast",
    description: "An incredible bundle to feed the whole crew! 2 Large Pizzas, 10 BBQ Chicken Wings, Fresh Garlic Bread, and a 2L Soda bottle.",
    price: 44.99,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzYVCJT1m6IORwWJOzJgdJZxfpXT4LiHTyWGJxlt7vD6ko0GOvpgGGlvXbUEEyhfGnMytDB90ePONAwViC67Z_d20fZCy3D-Psf7B4r7XvgNRpoZTs32eMmqOPwWV00FvpePut1QpWMWfyHbLcQa4YZpL6ztvU-6bqtwArtEsIrwv0s3QK5k39FgJrL9PqzNE8J0DItdLfqxY416lbtPmP4_AJ9G2tyBmbiwRlb0Qgk4ok94BAGZx83Q",
    isCustomizable: true,
    includes: ["2 Large Pizzas", "10 Chicken Wings", "Garlic Bread", "2L Soda"]
  },
  {
    id: "student-special",
    name: "Student Special",
    description: "1 Medium 3-Topping Pizza + 1 Soft Drink can. High quality value for money. Valid for pickup only.",
    price: 12.99,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAK7_LNj-PDrqG3riLakC9L7OKmt0UhIHBea9rKBhlcmvBc-fDMiLhlm7C6kQR8xYaE_NDxzOPd2K6hYPxG5XL5Kduyv5e84bnKxXp2-h4t_0n6ix4tZsFivSZgJz3bCN1W85uC7pGNts-MlIPXGgsEqa7owkzaDcI7kVb1o5SaztQGaxnqcfqmC6uv0D5enNbX_rQNZbJ8mzYW_1m1YifOOdnAqaREIrA021rNIXet5Obncb8FmY6myg",
    badge: "ID REQUIRED",
    isIdRequired: true,
    isCustomizable: true,
    includes: ["1 Medium 3-Topping Pizza", "1 Soft Drink Can", "Pickup Only"]
  },
  {
    id: "game-night-bundle",
    name: "Game Night Bundle",
    description: "Fuel the entire team with our largest custom bundle. Enjoy 3 Large Pizzas of your choice, 2 Sides, and 2 Large 2L Drinks.",
    price: 59.99,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmJtVHFOty3FpYCBcbK9t7UJoKVm60XzHIvGD2FOlWkyUasgxzGgu59WxqPi9jkEf1b-rsu2O0L0wSdt7WAoPHsKhxAlgwsZ6naaRD1BOXnUIHAIq92ycIGDZQpSBnB_72TsEoMOaA4xuY_zodUb2aVmN2iqImXK7zCLPb9BSYL4wUoVU1HQLSzRz8a9X_KWtlOGaZEsjiGhsP3Sryq8s_i3rnDj2JtawCD3eg92p5cJzymySrOJzsRg",
    isCustomizable: true,
    includes: ["3 Large Pizzas", "2 Gourmet Sides", "2 Large 2L Drinks"]
  },
  {
    id: "solo-slice-combo",
    name: "Solo Slice Combo",
    description: "2 Giant crispy Slices of your choice and a cold beverage can. Quick, easy, satisfying, and delicious.",
    price: 8.99,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALY7sRz6b2r0zInewfcaLxKteKLnd-WHgp1u-qv1LJqNC3ZN2plzz-hG_vaBFs2vjgA1SgAyz73d-RNSqUEGUUVawYLrCaPjxvWUSNqwS7VhOkULFH1tCjdLJrl273rmHkRzK1ACxL3eXEK81dmu7aQUQJNPztVBzaxfQ520cBQMGB0wc6nwhKZQ6bToDJuKZx16XCn3-VPKof-9XPm-gVz2nRrtBpivASOMAGNe_5rNNM6vRsIGUJwQ",
    badge: "LUNCH ONLY",
    isCustomizable: true,
    includes: ["2 Giant Slices", "1 Chilled Soft Drink"]
  },
  {
    id: "family-feast-bundle",
    name: "Family Feast Bundle",
    description: "2 Large Pizzas + 4 Sides + 1.5L Coke. The ultimate premium weekend treat.",
    price: 39.99,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAN2dAnk6ufjX2cKYtPGXt5VfOgs5y0YnA8nuNL7nEYMiCairW0_I3nFrqrCncbnacRfuUslc0BkYauUCYf7NEHDBAja5c0NvBIxqjzumEOdbe-odKt6Ka_mSYXIIKRSpn7VGpH-GM3LhawBYlGbHzT628r2hUryxl8dQy4hZfH1TZZ33pe2aYrnjepiFY2YYnjTAjSriZ4luXB7YWyQ4JhCeII4ghTvpvIPFT3GyYAhldHmDok5_7e2A",
    isCustomizable: true,
    includes: ["2 Large Pizzas", "4 Custom Sides", "1.5L Coke"]
  }
];

export const VALUE_TIERS = [
  {
    id: "solo-slice-box",
    name: "Solo Slice Box",
    tier: "The Personal",
    price: 5.99,
    description: "Large slice of any classic pizza + side fries."
  },
  {
    id: "study-buddy",
    name: "Study Buddy",
    tier: "The Student",
    price: 12.99,
    description: "Medium 2-topping pizza + 2 cold drinks."
  },
  {
    id: "party-platter",
    name: "Party Platter",
    tier: "The Crowd",
    price: 34.99,
    description: "3 Large Pizzas + 10 Wings + 1.5L Chilled Coke.",
    isBestValue: true
  },
  {
    id: "family-feast-tier",
    name: "Family Feast",
    tier: "The Family",
    price: 28.99,
    description: "2 Large Pizzas + Garlic Bread + Garden Salad."
  }
];

export const LOCATIONS: LocationItem[] = [
  {
    id: "tampines-mall",
    name: "Tampines Mall Outlet",
    address: "4 Tampines Central 5, #01-12 Tampines Mall, Singapore 529510",
    phone: "+65 6788 2121",
    hours: "11:00 AM - 11:00 PM",
    isOpen: true,
    lat: 32.0,
    lng: 82.0
  },
  {
    id: "jurong-point",
    name: "Jurong Point Outlet",
    address: "1 Jurong West Central 2, #02-21 Jurong Point, Singapore 648886",
    phone: "+65 6862 2121",
    hours: "11:00 AM - 10:00 PM",
    isOpen: true,
    lat: 42.0,
    lng: 15.0
  },
  {
    id: "suntec-city",
    name: "Suntec City Outlet",
    address: "3 Temasek Blvd, #B1-145 Suntec City Mall, Singapore 038983",
    phone: "+65 6235 2121",
    hours: "11:00 AM - 11:30 PM",
    isOpen: true,
    lat: 58.0,
    lng: 52.0
  },
  {
    id: "novena-square",
    name: "Novena Square Outlet",
    address: "238 Thomson Rd, #01-08 Velocity@Novena Square, Singapore 307683",
    phone: "+65 6354 2121",
    hours: "11:00 AM - 11:00 PM",
    isOpen: true,
    lat: 25.0,
    lng: 48.0
  }
];

export const TOPPINGS_LIST = [
  "Extra Mozzarella",
  "Beef Pepperoni",
  "Canadian Ham",
  "Fresh Pineapple",
  "Roasted Mushrooms",
  "Green Peppers",
  "Black Olives",
  "Red Onions",
  "Italian Sausage",
  "Gourmet Chicken",
  "Jalapenos"
];
