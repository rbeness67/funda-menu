import { Routes, Route, Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import { MenuApp } from "./components/menu-app";
import logo from "@/assets/logo.png";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<MenuApp />} />
    </Routes>
  );
}

/* =========================
   HOME PAGE
   ========================= */
function Home() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-50 flex items-center justify-center">
      <div className="w-full max-w-2xl px-4 text-center">
        {/* LOGO */}
        <div className="mb-6 flex justify-center">
          <img
            src={logo}
            alt="Somer Grill"
            className="h-20 w-auto opacity-95"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
          Somer
          <span className="block text-stone-300">Grill</span>
        </h1>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-stone-100 text-stone-950 hover:bg-stone-200 rounded-full px-10 text-base font-semibold"
          >
            <Link to="/menu">Accéder au menu</Link>
          </Button>

          {/* DELIVEROO */}
          <a
            href="https://deliveroo.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-400 hover:text-stone-200 underline underline-offset-4 decoration-stone-600"
          >
            Commander sur Deliveroo
          </a>
        </div>

        {/* INFOS */}
        <div className="mt-10 rounded-2xl border border-stone-800 bg-stone-900/30 p-6 text-left shadow-sm">
          <div className="grid gap-5 md:grid-cols-2">
            {/* Contact */}
            <div>
              <div className="text-xs uppercase tracking-widest text-stone-400">
                Contact
              </div>

              <div className="mt-3 space-y-2 text-sm">
                <p className="text-stone-200">
                  <span className="text-stone-400">Adresse :</span>{" "}
                  42 Rte d&apos;Oberhausbergen, 67200 Strasbourg
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
            </div>

            {/* Horaires */}
            <div>
              <div className="text-xs uppercase tracking-widest text-stone-400">
                Horaires
              </div>

              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Samedi</span>
                  <span className="text-stone-300">11:00 – 22:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="text-stone-300">11:00 – 22:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Lundi</span>
                  <span className="text-stone-300">09:00 – 22:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Mardi</span>
                  <span className="text-stone-300">11:00 – 22:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Mercredi</span>
                  <span className="text-stone-300">11:00 – 22:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Jeudi</span>
                  <span className="text-stone-300">11:00 – 22:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Vendredi</span>
                  <span className="text-stone-300">11:00 – 22:00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 border-t border-stone-800 pt-4 text-xs text-stone-400">
            Strasbourg • Grill & sauces maison
          </div>
        </div>
      </div>
    </div>
  );
}