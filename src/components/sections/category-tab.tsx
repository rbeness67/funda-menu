import { Card, CardContent, CardHeader } from "../ui/card";
import { OfferMenuCard } from "./OfferMenu";
import styles from "./category-tab.module.css";

export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  order: number;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export type CategoryConfig = {
  id: string;
  label: string;

  /** If true, the offer menu is displayed at top for this tab */
  showOfferMenu?: boolean;

  /** Optional hero badge (useful for "DONER" style title) */
  heroBadge?: {
    text: string;
  };

  /** Cards to display in this tab */
  sections: MenuSection[];
};

function MenuList({ items }: { items: MenuItem[] }) {
  const sorted = [...items].sort((a, b) => a.order - b.order);

  return (
    <ul className={styles.items}>
      {sorted.map((item) => (
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

export function CategoryTab({ category }: { category: CategoryConfig }) {
  return (
    <div className={styles.grid} aria-label={category.label}>
      {category.showOfferMenu ? <OfferMenuCard /> : null}

      {category.sections.map((section) => (
        <Card
          key={section.title}
          className={styles.menuCard}
          aria-label={section.title}
        >
          <CardHeader className={styles.menuHeader}>
            {category.heroBadge ? (
              <div className={styles.donerBadge}>
                <div className={styles.donerText}>{category.heroBadge.text}</div>
              </div>
            ) : (
              <div className={styles.categoryTitle}>{section.title}</div>
            )}
          </CardHeader>

          <CardContent className={styles.menuContent}>
            <MenuList items={section.items} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default CategoryTab;