import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import styles from "./OfferMenu.module.css";

export function KidsMenuCard() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");

    const apply = () => {
      const mobile = mq.matches;
      setIsMobile(mobile);

      // Desktop: open by default, Mobile: closed by default
      setOpen(!mobile);
    };

    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  return (
    <Card className={styles.kidsCardOuter} aria-label="Menu enfant">
      <CardContent className={styles.kidsContent}>
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger asChild>
            <button type="button" className={styles.kidsCollapseTrigger}>
              <div className={styles.kidsTop}>
                <div className={styles.kidsEyebrow}>Menu enfant</div>
                <div className={styles.kidsPrice}>7,00 €</div>
              </div>

              <span
                className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
                aria-hidden="true"
              >
                ▾
              </span>
            </button>
          </CollapsibleTrigger>

          <CollapsibleContent className={styles.kidsCollapseContent}>

            <div className={styles.kidsText}>
              <div className={styles.kidsLine}>
                Hamburger (45 g de viande) ou 5 nuggets
              </div>
              <div className={styles.kidsLine}>Frites &amp; Capri-Sun</div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}

export default KidsMenuCard;