import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import styles from "./default-tab.module.css";

export function DefaultTab({ label }: { label: string }) {
  return (
    <div className={styles.grid}>
      {[1, 2, 3].map((i) => (
        <Card key={i} className={styles.card}>
          <CardHeader>
            <CardTitle className={styles.title}>
              {label} {i}
            </CardTitle>
          </CardHeader>
          <CardContent className={styles.content}>
            <div className={styles.text}>Contenu standard pour cette catégorie.</div>
            <div className={styles.price}>{7 + i}.00 €</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
