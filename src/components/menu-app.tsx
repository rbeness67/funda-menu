import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../config.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import styles from "./menu-app.module.css";

import logo from "@/assets/logo.png";

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
        {/* ✅ Sticky header (logo + retour) */}
        <div className={styles.brandSticky}>
          <div className={styles.brandBar}>
            <div className={styles.brandCenter}>
              <img src={logo} alt={data.restaurantName} className={styles.logo} />
              <div className={styles.brandTitle}>{data.restaurantName}</div>
            </div>

            {/* ✅ Bouton retour accueil (en haut à droite) */}
            <Link to="/" className={styles.homeBtn} aria-label="Retour à l'accueil">
              Accueil
            </Link>
          </div>
        </div>

        <Tabs value={active} onValueChange={setActive}>
          {/* ✅ Tabbar sticky (en dessous du logo sticky) */}
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