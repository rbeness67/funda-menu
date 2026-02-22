import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from "../config.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import styles from "./menu-app.module.css";

import logo from "@/assets/logo.png";

import { DonerTab } from "./sections/doner-tab";
import { SandwichTacosTab } from "./sections/sandwich-tab";
import { DefaultTab } from "./sections/default-tab";

type Category = { id: string; label: string };

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const update = () => setReduced(!!mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return reduced;
}

export function MenuApp() {
  const categories = data.categories as Category[];

  const initialActive = useMemo(() => categories[0]?.id ?? "", [categories]);
  const [active, setActive] = useState(initialActive);

  const tabbarRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // ✅ Auto-center active tab on change
  useEffect(() => {
    const el = tabbarRef.current;
    if (!el) return;

    const activeBtn = el.querySelector<HTMLElement>(
      `[data-state="active"][role="tab"]`
    );
    if (!activeBtn) return;

    // Center the active tab
    const behavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth";
    activeBtn.scrollIntoView({
      behavior,
      block: "nearest",
      inline: "center",
    });
  }, [active, prefersReducedMotion]);

  // ✅ Desktop wheel → horizontal scroll
  useEffect(() => {
    const el = tabbarRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // If already horizontal wheel, let it do its thing
      const isMostlyVertical = Math.abs(e.deltaY) > Math.abs(e.deltaX);
      if (!isMostlyVertical) return;

      // Prevent page scroll if user wheels over the tabbar
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel as any);
  }, []);

  // ✅ Drag-to-scroll (mouse) on desktop
  useEffect(() => {
    const el = tabbarRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let startScrollLeft = 0;

    const onDown = (e: PointerEvent) => {
      // only left click / primary
      if (e.pointerType === "mouse" && e.button !== 0) return;
      isDown = true;
      startX = e.clientX;
      startScrollLeft = el.scrollLeft;
      el.setPointerCapture?.(e.pointerId);
      el.classList.add(styles.dragging);
    };

    const onMove = (e: PointerEvent) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      el.scrollLeft = startScrollLeft - dx;
    };

    const onUp = (e: PointerEvent) => {
      if (!isDown) return;
      isDown = false;
      el.releasePointerCapture?.(e.pointerId);
      el.classList.remove(styles.dragging);
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Sticky header (logo + retour) */}
        <div className={styles.brandSticky}>
          <div className={styles.brandBar}>
            <div className={styles.brandCenter}>
              <img src={logo} alt={data.restaurantName} className={styles.logo} />
              <div className={styles.brandTitle}>{data.restaurantName}</div>
            </div>

            {/* Bouton retour accueil */}
            <Link to="/" className={styles.homeBtn} aria-label="Retour à l'accueil">
              Accueil
            </Link>
          </div>
        </div>

        <Tabs value={active} onValueChange={setActive}>
          {/* ✅ Tabbar sticky */}
          <div className={styles.tabbarSticky}>
            <TabsList className={styles.tabbar} ref={tabbarRef}>
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
              {cat.id === "sandwich_tacos" && <SandwichTacosTab label={cat.label} />}
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