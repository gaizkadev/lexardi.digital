import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Image
        src="/fullHD.png"
        alt="Image"
        layout="responsive"
        width={600}
        height={220}
        objectFit="cover"
      />
    </>
  );
}
