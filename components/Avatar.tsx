import Image from "next/image";
import avatar from "@/public/images/character.svg";

export default function Avatar() {
  return (
    <div className="avatar h-full justify-self-center">
      <div className="mask mask-circle bg-teal-300">
        <Image
          priority
          src={avatar}
          alt="Meikäläinen"
          className="object-center w-auto h-full"
        />
      </div>
    </div>
  )
}
