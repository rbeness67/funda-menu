// src/components/sections/sandwich-tab.tsx
import { Card, CardContent, CardHeader } from "../ui/card";
import { OfferMenuCard } from "./OfferMenu";
import styles from "./sandwich-tab.module.css";

type MenuItem = {
  name: string;
  description?: string;
  price: string;
  order: number;
};

type SandwichTacosTabProps = {
  label: string;
};

/* =========================
   TACOS (tous à 8€)
   ========================= */
const TACOS_ITEMS: MenuItem[] = [
  { order: 10, name: "Tacos kebab poulet", price: "8.00 €" },
  { order: 20, name: "Tacos kebab bœuf", price: "8.00 €" },
  { order: 30, name: "Tacos tenders", price: "8.00 €" },
  { order: 40, name: "Tacos nuggets", price: "8.00 €" },
  { order: 50, name: "Tacos cordon bleu", price: "8.00 €" },
  { order: 60, name: "Tacos brochettes de poulet", price: "8.00 €" },
  { order: 70, name: "Tacos köfte", price: "8.00 €" },
  { order: 80, name: "Tacos chicken burger", price: "8.00 €" },
  { order: 90, name: "Tacos merguez", price: "8.00 €" },
  { order: 100, name: "Tacos falafel", price: "8.00 €" },
  { order: 110, name: "Tacos suçuk", price: "8.00 €" },
  { order: 120, name: "Tacos galette de pommes de terre", price: "8.00 €" },
];

/* =========================
   BURGERS
   ========================= */
const BURGER_ITEMS: MenuItem[] = [
  {
    order: 10,
    name: "Cheeseburger",
    description:
      "Steak haché 100gr, cheddar, ketchup moutarde, oignons, cornichons",
    price: "6.00 €",
  },
  {
    order: 20,
    name: "Le Mac",
    description:
      "2 steak hachés 100gr, cheddar, salade, oignon, cornichons, sauce burger",
    price: "8.50 €",
  },
  {
    order: 30,
    name: "Le King",
    description:
      "2 steak hachés 100gr, cheddar, salade, tomate, oignon, ketchup, mayonnaise",
    price: "8.50 €",
  },
  {
    order: 40,
    name: "Le Spécial",
    description:
      "Chicken burger, steak haché 100gr, cheddar, salade, oignon, mayonnaise",
    price: "8.50 €",
  },
  {
    order: 50,
    name: "Le Chef",
    description:
      "Steak haché 100gr, cheddar, galette de pomme de terre, salade, oignon, sauce burger",
    price: "8.00 €",
  },
  {
    order: 60,
    name: "L'Original",
    description:
      "Steak haché 100gr, suçuk, cheddar, salade, oignons frits, ketchup, mayonnaise",
    price: "8.00 €",
  },
  {
    order: 70,
    name: "Le French",
    description:
      "Steak haché 100gr, cheddar, salade, tomate, oignons, cornichons, jambon de dinde, sauce burger",
    price: "8.00 €",
  },
];

/* =========================
   SANDWICHES
   ========================= */
const SANDWICH_ITEMS: MenuItem[] = [
  { order: 10, name: "Sandwich brochettes de poulet", price: "8.00 €" },
  { order: 20, name: "Sandwich brochettes d’agneau", price: "8.50 €" },
  { order: 30, name: "Sandwich köfte", price: "8.00 €" },
  { order: 40, name: "Sandwich merguez", price: "8.00 €" },
  { order: 50, name: "Sandwich steak haché", price: "8.00 €" },
  { order: 60, name: "Sandwich grillades mixte", price: "9.00 €" },
];

function MenuList({ items }: { items: MenuItem[] }) {
  return (
    <ul className={styles.items}>
      {items.map((item) => (
        <li key={item.name} className={styles.item}>
          <div className={styles.itemTopRow}>
            <span className={styles.itemName}>{item.name}</span>
            <span className={styles.itemPrice}>{item.price}</span>
          </div>

          {item.description && (
            <div className={styles.itemDescription}>{item.description}</div>
          )}
        </li>
      ))}
    </ul>
  );
}

export function SandwichTacosTab({ label }: SandwichTacosTabProps) {
  return (
    <div className={styles.grid} aria-label={label}>
      <OfferMenuCard />

      <Card className={styles.menuCard} aria-label="Tacos">
        <CardHeader className={styles.menuHeader}>
          <div className={styles.categoryTitle}>Tacos</div>
        </CardHeader>
        <CardContent className={styles.menuContent}>
          <MenuList items={TACOS_ITEMS} />
        </CardContent>
      </Card>

      <Card className={styles.menuCard} aria-label="Burgers">
        <CardHeader className={styles.menuHeader}>
          <div className={styles.categoryTitle}>Burgers</div>
        </CardHeader>
        <CardContent className={styles.menuContent}>
          <MenuList items={BURGER_ITEMS} />
        </CardContent>
      </Card>

      <Card className={styles.menuCard} aria-label="Sandwiches">
        <CardHeader className={styles.menuHeader}>
          <div className={styles.categoryTitle}>Sandwiches</div>
        </CardHeader>
        <CardContent className={styles.menuContent}>
          <MenuList items={SANDWICH_ITEMS} />
        </CardContent>
      </Card>
    </div>
  );
}

export default SandwichTacosTab;