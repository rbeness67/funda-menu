import raw from "../config.json"

export type MenuItem = {
  name: string;
  price: number | null;
  description?: string;
};

export type MenuSubcategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  name: string;
  subcategories: MenuSubcategory[];
};

export type MenuConfig = {
  restaurantName: string;
  currency: string;
  meta?: {
    menuUpgrade?: { label: string; details: string };
    rules?: string[];
    notes?: string[];
  };
  categories: MenuCategory[];
};

export const menuConfig = raw as unknown as MenuConfig;

export function formatPriceEUR(price: number | null) {
  if (price === null || Number.isNaN(price)) return "";
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: price % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2
  }).format(price);
}
