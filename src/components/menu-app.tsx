import { useState } from "react";
import data from "../config.json"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import styles from "./menu-app.module.css";

import { DonerTab } from "./sections/doner-tab";
import { SandwichTacosTab } from "./sections/sandwich-tab";
import { DefaultTab } from "./sections/default-tab";

type Category = { id: string; label: string };

export function MenuApp() {
  const categories = data.categories as Category[];
  const [active, setActive] = useState(categories[0]?.id ?? "");

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{data.restaurantName}</h1>
          <p className={styles.subtitle}>Sélectionne une catégorie</p>
        </header>

        <Tabs value={active} onValueChange={setActive}>
          {/* ✅ Wrapper sticky pour la tabbar */}
          <div className={styles.tabbarSticky}>
            <TabsList className={styles.tabbar}>
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className={styles.tabTrigger}
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className={styles.tabContent}>
              {cat.id === "doner" && <DonerTab label={cat.label} />}

              {cat.id === "sandwich_tacos" && (
                <SandwichTacosTab label={cat.label} />
              )}

              {cat.id === "bowls_assiettes" && <DefaultTab label={cat.label} />}

              {cat.id === "pizza_pide" && <DefaultTab label={cat.label} />}

              {cat.id === "boissons" && <DefaultTab label={cat.label} />}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}