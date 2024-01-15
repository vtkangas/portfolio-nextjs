import Image from "next/image";
import earth from "@/public/images/view/earth/earth.svg";
import glow from "@/public/images/view/earth/glow.svg";
import clouds from "@/public/images/view/earth/clouds.svg";
import Earth from "./Earth";

export default function Landing() {
  return (
    <div className="relative w-screen max-w-full h-[100vh] px-2">
      <Earth />
    </div>
  );
}
