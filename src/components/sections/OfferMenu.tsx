import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import styles from "./OfferMenu.module.css";

export function OfferMenuCard() {
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

export default OfferMenuCard;