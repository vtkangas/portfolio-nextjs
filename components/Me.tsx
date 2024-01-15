import Image from "next/image";
import me from "@/public/images/ville.jpg";

export default function Me() {
  return (
    <div className="grid grid-rows-2 sm:grid-rows-none sm:grid-cols-3 max-w-5xl mt-10 px-[5vw]">
      <div className="grid sm:col-span-2 text-left justify-start place-items-center">
        <p>
          {" "}
          Olen IT-tradenomi opiskelija Oulusta. Opiskelen viimeistä vuotta
          Mikkelin ammattikorkeakoulussa tietojenkäsittelyn tradenomiksi ja
          suoritan tutkintoa verkkototeutuksella Oulusta käsin. Tällä hetkellä
          osaamiseni on frontend painotteista ja pitää sisällään seuraavia
          teknologioita: Typescript, React (Nextjs), HTML + CSS. Aikaisemman
          koulutukseni ansiosta minulla on myös Audiovisuaalista osaamista ja
          näkemystä, josta on hyötyä frontend-devauksessa.
        </p>
      </div>
      <div className="grid sm:col-span-1 justify-items-center sm:justify-items-end">
        <div className="w-4/5 max-w-smd">
          <Image
            priority
            src={me}
            alt="Meikäläinen"
            className="mask mask-squircle object-bottom rounded-[10%] rotate-3 w-auto h-full"
          />
        </div>
      </div>
    </div>
  );
}
