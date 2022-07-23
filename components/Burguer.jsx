import Image from "next/image";
import { useState } from "react";
import { BsHeartHalf } from "react-icons/bs";
import Link from "next/link";

function Burguer() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <header className="container mx-auto px-6 justify-end flex py-6 items-center">
      <div>
        <p className="mr-6 font-bold">hello@lexardi.com</p>
      </div>
      <nav>
        <div className="flex">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8  bg-gray-800"></span>
            <span className="block h-0.5 w-8  bg-gray-800"></span>
          </div>

          <div
            className={
              isNavOpen
                ? "block absolute w-full top-0 left-0 flex-col z-10 bg-black h-full overflow-hidden"
                : "hidden"
            }
          >
            <div
              className="absolute top-0 right-0 px-5 py-6"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="grid grid-cols-2">
              <div className="lg:px-12 lg:py-12 sm:px-6 sm:py-6">
                <ul>
                  <li className="text-white lg:text-8xl md:text-6xl sm:text-4xl mb-6">
                    <Link href={"/blog"}>
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li className="text-white lg:text-8xl md:text-6xl sm:text-4xl mb-6">
                    <Link href={"/about"}>
                      <a>About</a>
                    </Link>
                  </li>
                  <li className="text-white lg:text-8xl md:text-6xl sm:text-4xl">
                    <Link href={"/contact"}>
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-white lg:px-12 lg:py-12 sm:px-2">
                <span className="flex items-center mb-8 lg:mt-8 sm:mt-20 lg:justify-start sm:justify-center">
                  <Image src="/logo.png" width={32} height="32" alt="Logo" />
                  <p className="ml-2 lg:text-lg sm:text-xs">
                    gaizka | Frontend Developer
                  </p>
                </span>
                <span className="bottom-10 right-10 absolute items-center flex text-xs font-bold">
                  Coded with &nbsp; <BsHeartHalf /> &nbsp; by gaizka
                </span>
                <div className="grid grid-cols-2">
                  <div className="h-screen">
                    <ul className="block absolute lg:bottom-10 sm:bottom-20">
                      <li className="lg:text-4xl sm:text-xl font-bold mb-4">
                        github
                      </li>
                      <li className="lg:text-4xl sm:text-xl font-bold mb-4">
                        twitter
                      </li>
                      <li className="lg:text-4xl sm:text-xl font-bold mb-4">
                        instagram
                      </li>
                      <li className="lg:text-4xl sm:text-xl font-bold">
                        linkedin
                      </li>
                    </ul>
                  </div>
                  <div className="">
                    <p>columa derecha</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Burguer;
