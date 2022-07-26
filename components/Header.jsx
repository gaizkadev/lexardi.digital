import Link from "next/link";
function Header() {
  return (
    <>
      <div className="lg:mx-20 md:mx-12 sm:mx-6 justify-between items-center pt-2 mb-12">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <a>
              <p className="link-underline link-underline-black hover:text-orange-500 text-4xl md:text-4xl font-bold tracking-tighter leading-tight text-gray-800">
                home
              </p>
            </a>
          </Link>
          <Link href={"/about"}>
            <a>
              <p className="link-underline link-underline-black hover:text-orange-500 text-4xl md:text-4xl font-bold tracking-tighter leading-tight text-gray-800">
                about
              </p>
            </a>
          </Link>
          <Link href={"/design"}>
            <a>
              <p className="link-underline link-underline-black hover:text-orange-500 text-4xl md:text-4xl font-bold tracking-tighter leading-tight text-gray-800">
                blog
              </p>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Header;
