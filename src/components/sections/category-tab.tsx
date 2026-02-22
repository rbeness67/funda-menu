import { Card, CardContent, CardHeader } from "../ui/card";
import { OfferMenuCard } from "./OfferMenu";
import { KidsMenuCard } from "./KidsMenu";
import styles from "./category-tab.module.css";

export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  order: number;
};

export type MenuSection = {
  title: string;
  badges?: string[];
  items: MenuItem[];
};

export type CategoryConfig = {
  id: string;
  label: string;
  showOfferMenu?: boolean;
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

function SectionHeader({ title, badges }: { title: string; badges?: string[] }) {
  const hasBadges = Array.isArray(badges) && badges.length > 0;

  return (
    <div className={styles.headerStack}>
      <div className={styles.categoryTitle}>{title}</div>

      {hasBadges ? (
        <div className={styles.badges} aria-label={`Badges ${title}`}>
          {badges!.map((b) => (
            <span key={b} className={styles.badge}>
              {b}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function CategoryTab({ category }: { category: CategoryConfig }) {
  return (
    <div className={styles.grid} aria-label={category.label}>
      {category.showOfferMenu ? (
        <>
          <OfferMenuCard />
          <KidsMenuCard />
        </>
      ) : null}

      {category.sections.map((section) => (
        <Card
          key={section.title}
          className={styles.menuCard}
          aria-label={section.title}
        >
          <CardHeader className={styles.menuHeader}>
            <SectionHeader title={section.title} badges={section.badges} />
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