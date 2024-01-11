import glow from "@/public/images/view/earth/glow.svg"
import backHill from "@/public/images/view/backHill.svg"
import frontHill from "@/public/images/view/frontHill.svg"
import foreground from "@/public/images/view/foreground.svg"
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div className="relative bottom-0">
        {/* hills  */}
        <div className="w-full h-full">
          <Image
            priority
            src={backHill}
            alt="large hill illustration"
            className="absolute w-full h-auto bottom-0"
          />
        </div>
        <div className="w-full h-full">
        <Image
            priority
            src={frontHill}
            alt="hill illustration"
            className="absolute w-full h-auto bottom-0"
          />
        </div>

        {/* foreground */}
        <div className="w-full h-full">
          <Image
            priority
            src={foreground}
            alt="land"
            className="absolute w-full h-auto bottom-0"
          /> 
        </div>
      </div>
      <div className="relative bg-[#b3998aff] w-screen max-w-full h-fit p-5 z-20">
        <p className="text-white">© 2024 Ville Kangas</p>
      </div>
    </div>
  )
}
