import Link from "next/link";

export default function Contact() {
  return (
    <div
      id={"contact"}
      className="relative flex justify-center w-screen max-w-full h-screen py-20 px-[5vw]"
    >
      <div className="flex flex-col gap-8 justify-center items-center text-center text-white max-w-5xl h-full">
        <h1 className="uppercase text-4xl sm:text-5xl font-bold">
          Yhteystiedot
        </h1>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href={"mailto:vtkangas@outlook.com"}>
              vt.kangas@outlook.com
            </Link>
          </li>
          <li>
            <Link href={"tel:+358408450826"}>0408450826</Link>
          </li>
          <li>
            <Link href={"www.linkedin.com/in/ville-kangas-2b4400260"}>
              linkedIn
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
