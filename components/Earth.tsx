import Image from "next/image";
import earth from "@/public/images/view/earth/earth.svg";
import glow from "@/public/images/view/earth/glow.svg";
import clouds from "@/public/images/view/earth/clouds.svg";

export default function Earth() {
  return (
    <div className="relative flex z-20 row-span-1 w-[322px] sm:min-w-[322px]">
    <Image
      priority
      src={glow}
      alt="glow"
      className="absolute w-full h-auto animate-pulse "
    />
    {/* this is wrapped with spin-animation div so the animation won't effect the scale of image */}
    <div className="absolute w-auto animate-[spin_60s_linear_infinite]">
      <Image priority src={earth} alt="earth" className="w-full h-auto" />
    </div>
    <Image
      priority
      src={clouds}
      alt="clouds"
      className="absolute w-full h-auto"
    />
  </div>
  )
}
