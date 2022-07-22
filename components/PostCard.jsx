import Link from "next/link";
import Image from "next/image";

function PostCard({ title, date, description, thumbnail, slug }) {
  return (
    <div className="p-12 border-b">
      <div className="flex flex-col gap-12 md:flex-row max-w-6xl">
        <Image
          alt="Image"
          src={thumbnail}
          className="object-cover"
          width={900}
          height={350}
        />
        <div className="items-center">
          <h2 className="font-bold text-2xl my-4">{title}</h2>
          <time className="text-gray-400">{date}</time>
          <p className="mt-4 italic">{description}</p>

          <Link href="/[slug]" as={`/${slug}`}>
            <a className="text-blue-500 mt-4 mb-2 block">Read more</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
