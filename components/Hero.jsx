import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="py-8">
        <Image
          src="/fullHD.png"
          alt="Image"
          layout="responsive"
          width={600}
          height={200}
          objectFit="cover"
        />
      </div>
    </>
  );
}
