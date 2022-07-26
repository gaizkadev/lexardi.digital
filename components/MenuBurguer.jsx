import Link from "next/link";

function MenuBurguer() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="lg:px-12 lg:py-12 sm:px-6 sm:py-12">
          <ul>
            <li className="text-white lg:text-8xl md:text-6xl sm:text-4xl mb-6">
              <Link href={"/design"}>
                <a>Design</a>
              </Link>
            </li>
            <li className="text-white lg:text-8xl md:text-6xl sm:text-4xl mb-6">
              <Link href={"/art"}>
                <a>Art</a>
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
            <p className="ml-2 lg:text-lg sm:text-xs">
              gaizka | Frontend Developer
            </p>
          </span>
          <span className="bottom-10 right-10 absolute items-center flex text-xs font-bold">
            Coded with &nbsp; &nbsp; by gaizka
          </span>
          <div className="grid grid-cols-2">
            <div className="h-screen">
              <ul className="absolute lg:bottom-10 sm:bottom-20 justify-center">
                <li className="lg:text-4xl sm:text-xl font-bold mb-4">
                  github
                </li>
                <li className="lg:text-4xl sm:text-xl font-bold mb-4">
                  twitter
                </li>
                <li className="lg:text-4xl sm:text-xl font-bold mb-4">
                  instagram
                </li>
                <li className="lg:text-4xl sm:text-xl font-bold">linkedin</li>
              </ul>
            </div>
            <div className="">
              <p>columa derecha</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MenuBurguer;
