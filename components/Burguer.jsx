import { useState } from "react";
import MenuBurguer from "./MenuBurguer";
const Burguer = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <>
      <header className="flex justify-end items-center">
        {showNavbar ? (
          <svg
            onClick={() => setShowNavbar(!showNavbar)}
            className="cursor-pointer top-5 right-20 fixed z-50"
          >
            <line
              x1="5"
              y1="5"
              x2="30"
              y2="30"
              strokeWidth="5"
              stroke="black"
            />
            <line
              x1="5"
              y1="30"
              x2="30"
              y2="5"
              strokeWidth="5"
              stroke="black"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setShowNavbar(!showNavbar)}
            className="cursor-pointer lg:mr-20 md:mr-12 sm:mr-6 my-6"
            viewBox="0 0 100 80"
            width="50"
            height="50"
          >
            <rect width="90" height="8" />
            <rect y="30" width="90" height="8" />
          </svg>
        )}
      </header>
      <div
        className={`${
          showNavbar
            ? "w-full fixed h-full z-40 bg-gray-400 overflow-hidden"
            : "hidden"
        }`}
      >
        <MenuBurguer />
      </div>
    </>
  );
};

export default Burguer;
