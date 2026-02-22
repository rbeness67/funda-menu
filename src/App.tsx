import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "./components/ui/button";
import { MenuApp } from "./components/menu-app";
import logo from "@/assets/logo.png";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<MenuApp />} />
    </Routes>
  );
}

/* =========================
   HOME PAGE (stone premium)
   ========================= */
function Home() {
  const [openContact, setOpenContact] = useState(false);
  const [openHours, setOpenHours] = useState(false);

  return (
    <div className="min-h-[100dvh] bg-stone-950 text-stone-50">
      {/* ✅ plus large sur desktop, moins “petit centré” */}
      <div className="mx-auto w-full max-w-6xl px-5 pb-10 pt-5 md:px-10 md:pb-14 md:pt-8">
        <header
          className="
            relative overflow-hidden rounded-3xl
            border border-stone-800/60 bg-stone-900/20
            shadow-[0_18px_70px_rgba(0,0,0,0.55)] backdrop-blur-xl
            px-6 py-8 md:px-12 md:py-10
            min-h-[92dvh] md:min-h-[640px]
            flex items-center justify-center
          "
        >
          {/* ✅ centre vertical parfait */}
          <div className="relative z-10 flex w-full flex-col items-center justify-center text-center">
            {/* ✅ LOGO plus grand */}
            <img
              src={logo}
              alt="Somer Grill"
              className="
                h-28 w-auto opacity-95
                drop-shadow-[0_18px_30px_rgba(0,0,0,0.6)]
                md:h-36
              "
            />

            <h1 className="mt-5 text-6xl md:text-7xl font-black tracking-tight uppercase">
              Somer
              <span className="block text-stone-300">Grill</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base md:text-lg text-stone-300/90">
              Grill • Doner • Sandwich 
            </p>

            {/* CTA vertical */}
            <div className="mt-16 flex flex-col items-center gap-5">
              <Button
                asChild
                size="lg"
                className="
                  bg-stone-100 text-stone-950 hover:bg-stone-200
                  rounded-full px-12 py-7
                  text-lg font-semibold
                "
              >
                <Link to="/menu">Accéder au menu</Link>
              </Button>

              <a
                href="https://deliveroo.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-base text-stone-400 hover:text-stone-200
                  underline underline-offset-4 decoration-stone-600
                "
              >
                Commander sur Deliveroo
              </a>
            </div>

            

            {/* Collapsibles */}
            <section className="mt-8 w-full max-w-2xl grid gap-6">
              <Collapsible open={openContact} onOpenChange={setOpenContact}>
                <CollapsibleTrigger
                  className="
                    group flex w-full items-center justify-between
                    rounded-2xl border border-stone-800/60 bg-stone-900/20
                    px-5 py-5 text-left shadow-sm backdrop-blur-xl
                  "
                >
                  <div>
                    <div className="text-xs uppercase tracking-widest text-stone-400">
                      Contacts
                    </div>
                    <div className="mt-1 text-base text-stone-300">
                      Adresse & téléphone
                    </div>
                  </div>

                  <ChevronDown className="h-5 w-5 text-stone-300 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </CollapsibleTrigger>

                <CollapsibleContent
                  className="
                    mt-2 rounded-2xl border border-stone-800/60 bg-stone-900/10
                    px-5 py-5 backdrop-blur-xl
                  "
                >
                  <div className="space-y-4 text-base">
                    <p className="text-stone-200">
                      <span className="text-stone-400">Adresse :</span>{" "}
                      <a
                        className="underline decoration-stone-600 underline-offset-4 hover:text-stone-50"
                        href="https://www.google.com/maps/search/?api=1&query=42%20Rte%20d%27Oberhausbergen%2C%2067200%20Strasbourg"
                        target="_blank"
                        rel="noreferrer"
                      >
                        42 Rte d&apos;Oberhausbergen, 67200 Strasbourg
                      </a>
                    </p>

                    <p className="text-stone-200">
                      <span className="text-stone-400">Téléphone :</span>{" "}
                      <a
                        href="tel:+33388109091"
                        className="underline decoration-stone-600 underline-offset-4 hover:text-stone-50"
                      >
                        03 88 10 90 91
                      </a>
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible open={openHours} onOpenChange={setOpenHours}>
                <CollapsibleTrigger
                  className="
                    group flex w-full items-center justify-between
                    rounded-2xl border border-stone-800/60 bg-stone-900/20
                    px-5 py-5 text-left shadow-sm backdrop-blur-xl
                  "
                >
                  <div>
                    <div className="text-xs uppercase tracking-widest text-stone-400">
                      Horaires
                    </div>
                    <div className="mt-1 text-base text-stone-300">
                      Ouvertures de la semaine
                    </div>
                  </div>

                  <ChevronDown className="h-5 w-5 text-stone-300 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </CollapsibleTrigger>

                <CollapsibleContent
                  className="
                    mt-2 rounded-2xl border border-stone-800/60 bg-stone-900/10
                    px-5 py-5 backdrop-blur-xl
                  "
                >
                  <ul className="space-y-3 text-base">
                    <li className="flex justify-between gap-4">
                      <span className="text-stone-200">Samedi</span>
                      <span className="text-stone-300">11:00 – 22:00</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span className="text-stone-200">Dimanche</span>
                      <span className="text-stone-300">11:00 – 22:00</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span className="text-stone-200">Lundi</span>
                      <span className="text-stone-300">09:00 – 22:00</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span className="text-stone-200">Mardi</span>
                      <span className="text-stone-300">11:00 – 22:00</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span className="text-stone-200">Mercredi</span>
                      <span className="text-stone-300">11:00 – 22:00</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span className="text-stone-200">Jeudi</span>
                      <span className="text-stone-300">11:00 – 22:00</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span className="text-stone-200">Vendredi</span>
                      <span className="text-stone-300">11:00 – 22:00</span>
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>

              <div className="pt-2 text-center text-xs uppercase tracking-[0.2em] text-stone-500">
                Strasbourg • Grill & sauces maison
              </div>
            </section>
          </div>

          {/* glow subtil premium */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,237,213,0.06),transparent_60%)]" />
        </header>
      </div>
    </div>
  );
}