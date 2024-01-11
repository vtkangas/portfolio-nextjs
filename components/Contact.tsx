import Link from "next/link";

export default function Contact() {
  return (
    <div id={"contact"} className="w-screen max-w-full h-screen py-20 px-[5vw]">
      <div className="grid gap-4 justify-center text-center text-white">
        <h1 className="uppercase text-4xl lg:text-7xl font-bold">
          Yhteystiedot
        </h1>
        <ul>
          <li><Link href={"mailto:vtkangas@outlook.com"}>vt.kangas@outlook.com</Link></li>
          <li><Link href={"tel:+358408450826"}>0408450826</Link></li>
          <li><Link href={"www.linkedin.com/in/ville-kangas-2b4400260"}>linkedin</Link></li>
        </ul>
      </div>
    </div>
  );
}
