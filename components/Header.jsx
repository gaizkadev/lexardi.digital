import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <>
      <div className="container mx-auto px-5 justify-between items-center pt-4">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <a>
              <p className="link-underline link-underline-black hover:text-orange-500 text-2xl md:text-4xl font-bold tracking-tighter leading-tight text-gray-800">
                home
              </p>
            </a>
          </Link>
          <Link href={"/about"}>
            <a>
              <p className="link-underline link-underline-black hover:text-orange-500 text-2xl md:text-4xl font-bold tracking-tighter leading-tight text-gray-800">
                about
              </p>
            </a>
          </Link>
          <Link href={"/blog"}>
            <a>
              <p className="link-underline link-underline-black hover:text-orange-500 text-2xl md:text-4xl font-bold tracking-tighter leading-tight text-gray-800">
                blog
              </p>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
