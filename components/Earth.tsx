import Image from "next/image";
import earth from "@/public/images/view/earth/earth.svg";
import glow from "@/public/images/view/earth/glow.svg";
import clouds from "@/public/images/view/earth/clouds.svg";

export default function Earth() {
  return (
    <div className="relative flex w-auto h-full max-h-[500px]">
      <Image
        priority
        src={glow}
        alt="glow"
        className="absolute w-auto h-full animate-pulse scale-150"
      />
      <Image
        priority
        src={earth}
        alt="earth"
        className="w-auto h-full scale-150"
      />
      <Image
        priority
        src={clouds}
        alt="clouds"
        className="absolute w-auto h-full scale-150"
      />
    </div>
  );
}
