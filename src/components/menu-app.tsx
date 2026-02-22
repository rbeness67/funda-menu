import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../config.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import styles from "./menu-app.module.css";

import logo from "@/assets/logo.png";

import CategoryTab from "./sections/category-tab";
import type { CategoryConfig } from "./sections/category-tab";
export function MenuApp() {
  const categories = data.categories as CategoryConfig[];
  const [active, setActive] = useState(categories[0]?.id ?? "");

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.brandSticky}>
          <div className={styles.brandBar}>
            <div className={styles.brandCenter}>
              <img
                src={logo}
                alt={data.restaurantName}
                className={styles.logo}
              />
              <div className={styles.brandTitle}>{data.restaurantName}</div>
            </div>

            <Link
              to="/"
              className={styles.homeBtn}
              aria-label="Retour à l'accueil"
            >
              Accueil
            </Link>
          </div>
        </div>

        <Tabs value={active} onValueChange={setActive}>
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
            <TabsContent
              key={cat.id}
              value={cat.id}
              className={styles.tabContent}
            >
              <CategoryTab category={cat} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}