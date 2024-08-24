import { Qwitcher_Grypen } from "next/font/google";
const qwitcherGrypen = Qwitcher_Grypen({ subsets: ["latin"], weight: "700", style: "normal" });

import { BottomWaveIcon } from "./icons/BottomWaveIcon";
import { TopWaveIcon } from "./icons/TopWaveIcon";
import clsx from "clsx";

const InvitaionTextComponent = () => {
  return (
    <div className="bg-rose-100">
      <TopWaveIcon />
      <div className="bg-rose-100 container mx-auto">
        <div className="text-center mt-2 mb-8">
          <p className={clsx(qwitcherGrypen.className, "text-8xl font-bold text-yellow-600 text-pretty")}>Teea</p>
        </div>

        <ul className="text-center px-2 text-gray-500 text-xl font-light italic">
          <li>Împreuna cu părinții mei</li>
          <li>
            <p className="my-2">
              <span className="text-yellow-600 font-semibold underline">Serghei</span>
              <span> și </span>
              <span className="text-yellow-600 font-semibold underline">Doina</span>
            </p>
          </li>
        </ul>

        <ul className="text-center pt-6 text-gray-500 text-xl font-light italic">
          <li>Având alături nașii</li>
          <li>
            <p className="my-2">
              <span className="text-yellow-600 font-semibold underline">Andrei</span>
              <span> și </span>
              <span className="text-yellow-600 font-semibold underline">Lilea</span>
            </p>
          </li>
          <li className="pt-6">Avem plăcerea de a vă invita la botezul meu.</li>
        </ul>
      </div>
      <BottomWaveIcon />
    </div>
  );
};

export { InvitaionTextComponent };
