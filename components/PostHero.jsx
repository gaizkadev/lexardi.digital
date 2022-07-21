import Image from "next/image";

export default function PostHero() {
  return (
    <>
      <div className="mb-12 mt-6">
        <Image
          className="rounded-xl"
          alt="Image"
          src="/blog_1.png"
          layout="responsive"
          width={900}
          height={350}
        />
      </div>
    </>
  );
}
