import Burguer from "../components/Burguer";
import Header from "../components/Header";
import Image from "next/image";
import Logo from "../public/about/about-1.jpeg";
function About() {
  return (
    <>
      <Burguer />
      <Header />

      <div className="grid lg:grid-cols-2 md:grid-cols-1">
        <div>
          <img
            src="/about/about-1.jpeg"
            className="object-cover h-screen w-full"
            alt=""
          />
        </div>
        <div>
          <div>
            <p className="font-light ml-12 mt-12">03 - project-1</p>
            <h2 className="ml-12 mt-24 uppercase text-6xl font-bold">
              WHERE BRANDS ARE YOUR FANS
            </h2>
            <p className="text-xl w-80 mt-32 ml-24">
              Reward app where you connect your bank card to get personal
              rewards and offers from brands you love.
            </p>
            <p className="text-lg ml-40 mt-24 mb-6">- View</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
