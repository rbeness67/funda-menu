import { Card, CardContent, CardHeader } from "../ui/card";
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

function OfferMenuCard() {
  const crudites = [
    "Salade",
    "Tomate",
    "Oignon",
    "Carotte",
    "Choux rouge",
    "Olive verte",
    "Olive noire",
    "Maïs",
    "Cornichon",
    "Piment vert doux",
    "Piment vert grillé",
    "Oignon grillé",
  ];

  const sauces = [
    "Blanche",
    "Rouge",
    "Ketchup",
    "Mayonnaise",
    "Samouraï",
    "Algérienne",
    "Andalouse",
    "Tartare",
    "Brésilienne",
    "Curry",
    "Moutarde",
    "Harissa",
    "Barbecue",
    "Piment en poudre",
    "Sauce fromagère",
  ];

  return (
    <Card className={styles.offerCard} aria-label="Offre menu">
      <CardContent className={styles.offerContent}>
        <div className={styles.offerTop}>
          <div className={styles.offerEyebrow}>Offre menu</div>

          <div className={styles.offerPrice}>
            +4,00 €
            <span className={styles.offerPriceNote}>
              inclut frites + boisson 33 cL
            </span>
          </div>
        </div>

        <div className={styles.offerGrid}>
          <div className={styles.offerBlock}>
            <div className={styles.offerLabel}>Règles par sandwich</div>
            <div className={styles.offerPills}>
              <span className={styles.offerPill}>5 crudités max</span>
              <span className={styles.offerPill}>3 sauces max</span>
            </div>
          </div>

          <div className={styles.offerBlock}>
            <div className={styles.offerLabel}>Crudités</div>
            <ul className={styles.offerList}>
              {crudites.map((c) => (
                <li key={c} className={styles.offerListItem}>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.offerBlock}>
            <div className={styles.offerLabel}>Sauces</div>
            <ul className={styles.offerList}>
              {sauces.map((s) => (
                <li key={s} className={styles.offerListItem}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.offerFooter}>Premium • clair • rapide</div>
      </CardContent>
    </Card>
  );
}

export function SandwichTacosTab({ label }: SandwichTacosTabProps) {
  const tacosSorted = [...TACOS_ITEMS].sort((a, b) => a.order - b.order);
  const burgersSorted = [...BURGER_ITEMS].sort((a, b) => a.order - b.order);
  const sandwichesSorted = [...SANDWICH_ITEMS].sort(
    (a, b) => a.order - b.order
  );

  return (
  <div className={styles.grid}>
    {/* Optional page title from parent category */}
    <h1 className={styles.pageTitle}>{label}</h1>

    {/* ✅ Offre menu AU-DESSUS */}
    <OfferMenuCard />

    {/* TACOS */}
    <Card className={`${styles.menuCard} ${styles.tacosCard}`}>
      <CardHeader className={styles.menuHeader}>
        <h2 className={styles.categoryTitle}>Tacos</h2>
      </CardHeader>
      <CardContent className={styles.menuContent}>
        <MenuList items={tacosSorted} />
      </CardContent>
    </Card>

    {/* BURGERS */}
    <Card className={`${styles.menuCard} ${styles.burgersCard}`}>
      <CardHeader className={styles.menuHeader}>
        <h2 className={styles.categoryTitle}>Burgers</h2>
      </CardHeader>
      <CardContent className={styles.menuContent}>
        <MenuList items={burgersSorted} />
      </CardContent>
    </Card>

    {/* SANDWICHES */}
    <Card className={`${styles.menuCard} ${styles.sandwichesCard}`}>
      <CardHeader className={styles.menuHeader}>
        <h2 className={styles.categoryTitle}>Sandwiches</h2>
      </CardHeader>
      <CardContent className={styles.menuContent}>
        <MenuList items={sandwichesSorted} />
      </CardContent>
    </Card>
  </div>
);
}