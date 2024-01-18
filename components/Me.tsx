import Image from "next/image";
import me from "@/public/images/ville.jpg";
import { aboutData } from "@/lib/data";

export default function Me() {
  return (
    <div className="grid grid-rows-1 sm:grid-rows-none sm:grid-cols-3 max-w-5xl px-[5vw]">
      <div className="grid row-span-1 sm:col-span-2 items-center text-left">
        <p>{aboutData.description}</p>
      </div>
      <div className="grid sm:col-span-1 order-last sm:order-first">
        <div className="w-4/5 max-w-sm">
          <Image
            priority
            src={me}
            alt="Ville"
            className="mask mask-squircle object-bottom rounded-[10%] rotate-3 w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
