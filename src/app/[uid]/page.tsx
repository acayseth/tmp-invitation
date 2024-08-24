import clsx from "clsx";
import type { Metadata } from "next";
import { InvitaionTextComponent } from "@/components/InvitaionTextComponent";
import { WhenAndWhere } from "@/components/WhenAndWhere";
import ramaImage from "@/@media/rama.jpg";
import { FooterWaveIcon } from "@/components/icons/FooterWaveIcon";
import { HeaderWaveIcon } from "@/components/icons/HeaderWaveIcon";
import { notFound } from "next/navigation";

interface People {
  [key: string]: string[];
}
const _PEOPLES: People = {
  pc7a7cbf9d42842341b7f7fcf2446aea: ["Pavel", "Carolina"],
  sa8e5dd70db647fdb86aea30be8020fd: ["Sergiu", "Ana"],
  alcc2687ac38113d845d170cabde7534: ["Andrei", "Lilia"],
  nc28d54ebd46c57f884edeeaed673251: ["Lucia ", "Nicolae"],
  ai5193dafb3abd52f8225e76090b91e6: ["Ina", "Alexandru"],
  ddba38844ec42d9498583fc30b4e46a8: ["Dan"],
  aa1c4e8e0d5589d2571c7850f83bc75b: ["Andrei"],
  ovd518aac7e0bf845e55c524a7be4a32: ["Viorel", "Olesea"],
  tvc034d5c0a27db99bfcbd21f178cc0a: ["Veceslav", "Tatiana"],
  cn4a3cf562f1e35dc5bb66df1cdcdf30: ["Constantin", "Natalia"],
  va1c99d250056e3ad28c8483b8e8e079: ["Vitalie", "Silvia"],
  cae2c9c1b64d52175e414ea036a13728: ["Constantin", "Silvia"],
};

type Props = {
  params: { uid: string };
};

export function generateMetadata({ params: { uid } }: Props): Metadata {
  const peoples = _PEOPLES[uid];

  if (typeof peoples === "undefined") {
    return {
      title: "not found",
    };
  }

  return {
    title: `${peoples.length == 2 ? "Cumetrii" : "Cumetrul"} - ${peoples.join(" și ")}`,
  };
}

export default function Home({ params: { uid } }: Props) {
  const peoples = _PEOPLES[uid];

  if (typeof peoples === "undefined") {
    return notFound();
  }

  return (
    <>
      <HeaderWaveIcon />
      <div className="relative mx-auto w-[375px] h-[541px] mt-1 mb-1">
        <img className="absolute object-cover" width={375} height={541} src={ramaImage.src} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ul className="text-center text-yellow-600 w-80">
            <li className="text-4xl font-semibold py-10">
              <p>{peoples.length == 2 ? "Cumetrii" : "Cumetrul"}</p>
            </li>
            <li className="text-xl italic font-light underline">{peoples.join(" și ")}</li>
          </ul>
        </div>
      </div>
      <InvitaionTextComponent />
      <WhenAndWhere />
      <FooterWaveIcon />
    </>
  );
}
