"use client";

import { ChurkIcon } from "./icons/ChurkIcon";
import googleMapsImage from "@/@media/maps.png";

const WhenAndWhere = () => {
  return (
    <div className="mx-auto container pb-10">
      <h2 className="text-center text-3xl text-yellow-600 font-bold pt-5 pb-5">Când și unde?</h2>
      <div className="border border-gray-100 rounded-lg p-0.5 w-96 mx-auto shadow-sm shadow-rose-200">
        <div className="border border-rose-100 rounded-lg p-2 bg-rose-100">
          <ul className="text-center text-gray-500">
            <li className="flex justify-center py-8">
              <ChurkIcon />
            </li>
            <li className="font-bold text-lg italic mb-5">Ceremonia Botezului</li>
            <li className="text-lg mb-5">31 august 2024</li>
            <li className="text-lg mb-5">Ora 12:00</li>
            <li className="text-lg italic font-light mb-5">Biserica Căinarii vechi</li>
            <li className="text-lg italic font-light mb-5">r. Soroca, s. Căinarii vechi </li>
          </ul>
          <img src={googleMapsImage.src} />
          <ul className="text-center text-gray-500 mt-5">
            <li className="mb-5">
              <a
                href="https://www.google.com/maps/dir/Chi%C8%99in%C4%83u,+Moldova/C%C4%83inarii+Vechi/@47.5860586,27.7078045,9.06z/data=!4m13!4m12!1m5!1m1!1s0x40c97c3628b769a1:0x37d1d6305749dd3c!2m2!1d28.8638102!2d47.0104529!1m5!1m1!1s0x40ccbd64c2a6f0cd:0xd3e68608b73a4882!2m2!1d28.1235816!2d48.0075465?authuser=1&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="text-blue-300 hover:text-blue-400 hover:underline"
              >
                Dă click pentru a deschide ruta Google Maps
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { WhenAndWhere };
