import stars from "@/public/images/view/starsfull.svg";
import glow from "@/public/images/view/earth/glow.svg"
import earth from "@/public/images/view/earth/earth.svg";
import clouds from "@/public/images/view/earth/clouds.svg";
import planet from "@/public/images/view/planet.svg"
import backHill from "@/public/images/view/backHill.svg"
import frontHill from "@/public/images/view/frontHill.svg"
import foreground from "@/public/images/view/foreground.svg"
import Image from "next/image";

export default function Landing() {
  return (
    <div className="w-screen max-w-full h-[400vh] relative overflow-hidden bg-gradient-to-b from-slate-950 to-[#212d42ff]">
      

      {/* stars */} 
      <div className="absolute w-full h-full bg-repeat scale-150 -top-5 left-12 animate-[pulse_6s_infinite]" style={{backgroundImage: `url(${stars.src})`}}></div>
      <div className="absolute w-full h-full bg-repeat rotate-180  animate-pulse" style={{backgroundImage: `url(${stars.src})`}}></div> 



      {/* earth */}
      <div className="relative grid w-[200vw] -left-[50vw] -bottom-[40vh] h-auto align-items-center">
        <Image
          priority
          src={glow}
          alt="glow"
          className="absolute w-full h-auto animate-[pulse_3s_infinite]"
        />
        <Image
          priority
          src={earth}
          alt="earth"
          className="absolute w-full h-auto -rotate-45 animate-[spin_100s_infinite]"
        />
        <Image
          priority
          src={clouds}
          alt="clouds"
          className="absolute w-full h-auto"
        />
      </div>

      {/* text */}
      <div className="absolute flex w-full h-screen justify-center items-center">
        <div className="w-fit">
          <h1 className="text-7xl uppercase font-bold tracking-widest text-center text-white">Ville Kangas</h1>          
          <h3 className="text-2xl uppercase italic font-bold tracking-widest text-center text-white">web-kehittäjä</h3>
        </div>
      </div>

      {/* planet */}
      <div className="w-[20vw] h-auto absolute top-[30vh] right-20">
        <Image
          priority
          src={planet}
          alt="moon"
          className="absolute w-full h-auto bottom-0 fill-current text-green-600"
        />
      </div>

      {/* hills */}
      <div className="w-full h-full absolute">
        <Image
          priority
          src={backHill}
          alt="large hill illustration"
          className="absolute w-full h-auto bottom-0"
        />
      </div>
      <div className="w-full h-full absolute">
      <Image
          priority
          src={frontHill}
          alt="hill illustration"
          className="absolute w-full h-auto bottom-0"
        />
      </div>

      {/* foreground */}
      <div className="w-full h-full absolute">
        <Image
          priority
          src={foreground}
          alt="land"
          className="absolute w-full h-auto bottom-0"
        />
      </div>
      
    </div>
  )
}
