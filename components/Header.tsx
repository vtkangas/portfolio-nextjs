import Avatar from "./Avatar";

export default function Header() {

  return (
    <div className="relative flex flex-col justify-center items-center min-h-[20vh] px-2 z-10 text-black">
      <h1 className="text-5xl sm:text-7xl uppercase font-bold text-center">Ville Kangas</h1>
      <h3 className="text-sm sm:text-2xl uppercase tracking-widest text-center">web-kehittäjä</h3>
    </div>
  )
}
