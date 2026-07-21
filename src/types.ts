export type PizzaSize = "Medium" | "Large";
export type PizzaType = "Classic" | "Premium";

export interface PizzaItem {
  id: string;
  name: string;
  description: string;
  basePriceMedium: number;
  basePriceLarge: number;
  image: string;
  type: PizzaType;
  tags?: string[];
  isHot?: boolean;
  isBestSeller?: boolean;
}

export interface SideItem {
  id: string;
  name: string;
  price: number;
  category: "Sides" | "Drinks";
  description: string;
  image?: string;
}

export interface CartItem {
  cartId: string; // unique instance ID in cart
  itemId: string; // ID of the underlying product (PizzaItem or SideItem or PromoDeal)
  type: "pizza" | "side" | "deal";
  name: string;
  size?: PizzaSize;
  price: number;
  quantity: number;
  image?: string;
  toppings?: string[]; // for customized pizzas
  description?: string;
}

export interface PromoDeal {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
  isBestValue?: boolean;
  isIdRequired?: boolean;
  isCustomizable?: boolean;
  includes?: string[];
}

export interface LocationItem {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  isOpen: boolean;
  lat: number; // percentage coordinate for map overlay (Y or top)
  lng: number; // percentage coordinate for map overlay (X or left)
}
