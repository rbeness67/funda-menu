// doner-tab.tsx
import { Card, CardContent, CardHeader } from "../ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import styles from "./doner-tab.module.css";
import { useEffect, useState } from "react";

type MenuItem = {
  name: string;
  description?: string;
  price: string;
  order: number;
};

type DonerTabProps = {
  label: string;
};

const DONER_ITEMS: MenuItem[] = [
  { order: 10, name: "Kebab poulet", price: "7.50 €" },
  { order: 20, name: "Kebab bœuf", price: "7.50 €" },
  { order: 30, name: "Kebab mixte", price: "8.00 €" },
  { order: 40, name: "Végétarien", price: "7.00 €" },
  {
    order: 50,
    name: "Forestier",
    description: "Kebab poulet, champignons et oignons grillés",
    price: "7.50 €",
  },
  {
    order: 60,
    name: "Berliner",
    description:
      "Viande de kebab poulet, aubergine grillée, courgette grillée, salade, oignon, chou rouge, fêta, sauce blanche",
    price: "8.50 €",
  },
  {
    order: 70,
    name: "Gourmand",
    description:
      "Viande de kebab poulet et sucuk grillé, salade, oignons frits, ketchup et mayonnaise",
    price: "8.50 €",
  },
  {
    order: 80,
    name: "Spicy",
    description:
      "Viande de kebab poulet, poivrons verts et rouges grillés, salade, piments jalapeño, sauce blanche",
    price: "8.50 €",
  },
  {
    order: 90,
    name: "Rösti",
    description:
      "Viande de kebab poulet, galette de pommes de terre, salade, fêta, oignon, mayonnaise",
    price: "8.50 €",
  },
];

const YUFKA_ITEMS: MenuItem[] = [
  { order: 10, name: "Yufka poulet", price: "8.00 €" },
  { order: 20, name: "Yufka bœuf", price: "8.00 €" },
  { order: 30, name: "Yufka mixte", price: "8.50 €" },
  { order: 40, name: "Yufka köfte", price: "8.50 €" },
  { order: 50, name: "Yufka brochettes de poulet", price: "8.50 €" },
  { order: 60, name: "Yufka crudités", price: "7.50 €" },
  { order: 70, name: "Yufka falafel", price: "6.50 €" },
  { order: 80, name: "Yufka galette de pommes de terre", price: "6.50 €" },
];

const BOX_ITEMS: MenuItem[] = [
  {
    order: 10,
    name: "Box",
    description: "Viande de kebab au choix • Crudités & frites",
    price: "7.50 €",
  },
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

function RulesBadges() {
  return (
    <div className={styles.cardRules} aria-label="Règles par sandwich">
      <div className={styles.offerPills}>
        <span className={styles.offerPill}>5 crudités max</span>
        <span className={styles.offerPill}>3 sauces max</span>
      </div>
    </div>
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

  const [isMobile, setIsMobile] = useState(false);
  const [openCrudites, setOpenCrudites] = useState(false);
  const [openSauces, setOpenSauces] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");

    const apply = () => {
      const mobile = mq.matches;
      setIsMobile(mobile);

      // Desktop: sections toujours visibles
      if (!mobile) {
        setOpenCrudites(true);
        setOpenSauces(true);
      } else {
        setOpenCrudites(false);
        setOpenSauces(false);
      }
    };

    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

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
          {/* Pills removed from offer card */}

          <div className={styles.offerBlock}>
            {isMobile ? (
              <Collapsible open={openCrudites} onOpenChange={setOpenCrudites}>
                <CollapsibleTrigger asChild>
                  <button type="button" className={styles.collapseTrigger}>
                    <span className={styles.collapseTitle}>Crudités</span>
                    <span className={styles.collapseHint}>
                      {openCrudites ? "Tap pour fermer" : "Tap pour afficher"}
                    </span>
                    <span
                      className={`${styles.chevron} ${
                        openCrudites ? styles.chevronOpen : ""
                      }`}
                      aria-hidden="true"
                    >
                      ▾
                    </span>
                  </button>
                </CollapsibleTrigger>

                <CollapsibleContent className={styles.collapseContent}>
                  <ul className={styles.offerList}>
                    {crudites.map((c) => (
                      <li key={c} className={styles.offerListItem}>
                        {c}
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <>
                <div className={styles.offerLabel}>Crudités</div>
                <ul className={styles.offerList}>
                  {crudites.map((c) => (
                    <li key={c} className={styles.offerListItem}>
                      {c}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className={styles.offerBlock}>
            {isMobile ? (
              <Collapsible open={openSauces} onOpenChange={setOpenSauces}>
                <CollapsibleTrigger asChild>
                  <button type="button" className={styles.collapseTrigger}>
                    <span className={styles.collapseTitle}>Sauces</span>
                    <span className={styles.collapseHint}>
                      {openSauces ? "Tap pour fermer" : "Tap pour afficher"}
                    </span>
                    <span
                      className={`${styles.chevron} ${
                        openSauces ? styles.chevronOpen : ""
                      }`}
                      aria-hidden="true"
                    >
                      ▾
                    </span>
                  </button>
                </CollapsibleTrigger>

                <CollapsibleContent className={styles.collapseContent}>
                  <ul className={styles.offerList}>
                    {sauces.map((s) => (
                      <li key={s} className={styles.offerListItem}>
                        {s}
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <>
                <div className={styles.offerLabel}>Sauces</div>
                <ul className={styles.offerList}>
                  {sauces.map((s) => (
                    <li key={s} className={styles.offerListItem}>
                      {s}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className={styles.offerFooter}>
          <div className={styles.offerMeta}>
            Viande <strong>Halal</strong> · Barquette frites{" "}
            <strong>3 €</strong>
          </div>

          <div className={styles.offerSupplements}>
            <span className={styles.offerSuppLabel}>Suppléments</span>
            <span className={styles.offerSuppText}>
              1 viande <strong>1,50 €</strong> · Frites · Fêta · Cheddar · Kiri{" "}
              <strong>1 €</strong>
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function DonerTab({}: DonerTabProps) {
  const donerSorted = [...DONER_ITEMS].sort((a, b) => a.order - b.order);
  const yufkaSorted = [...YUFKA_ITEMS].sort((a, b) => a.order - b.order);
  const boxSorted = [...BOX_ITEMS].sort((a, b) => a.order - b.order);

  return (
    <div className={styles.grid}>
      {/* Offre menu en haut */}
      <OfferMenuCard />

      {/* Card DONER */}
      <Card className={`${styles.menuCard} ${styles.donerCard}`}>
        <CardHeader className={styles.menuHeader}>
          <h2 className={styles.categoryTitle}>Doner</h2>
        </CardHeader>
        <CardContent className={styles.menuContent}>
          <RulesBadges />
          <MenuList items={donerSorted} />
        </CardContent>
      </Card>

      {/* Card YUFKA */}
      <Card className={`${styles.menuCard} ${styles.yufkaCard}`}>
        <CardHeader className={styles.menuHeader}>
          <h2 className={styles.categoryTitle}>Yufka</h2>
        </CardHeader>
        <CardContent className={styles.menuContent}>
          <RulesBadges />
          <MenuList items={yufkaSorted} />
        </CardContent>
      </Card>

      {/* Card BOX */}
      <Card className={`${styles.menuCard} ${styles.boxCard}`}>
        <CardHeader className={styles.menuHeader}>
          <h2 className={styles.categoryTitle}>Box</h2>
        </CardHeader>
        <CardContent className={styles.menuContent}>
          <RulesBadges />
          <MenuList items={boxSorted} />
        </CardContent>
      </Card>
    </div>
  );
}