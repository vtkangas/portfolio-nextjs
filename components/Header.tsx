import headerShape from "@/public/images/masks/header-shape.svg"
import Image from "next/image";

export default function Header() {
  return (
    <div className="absolute -top-32 sm:-top-48 left-[2%] flex flex-col sm:flex-row justify-center items-center z-10">
      <Image
        priority
        src={headerShape}
        alt="top waves shape"
        className="absolute min-w-[250px] sm:min-w-[390px] drop-shadow-xl"
      />
      <div className="flex flex-col z-10">
        <h1 className="text-5xl sm:text-7xl uppercase font-black text-left text-white">Ville</h1>
        <h1 className="text-5xl sm:text-7xl uppercase font-black text-left text-white">Kangas</h1>
      </div>
    </div>
  )
}