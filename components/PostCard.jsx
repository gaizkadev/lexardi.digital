import Image from "next/image";
const PostCard = ({ post }) => {
  return (
    <div className="p-12 ">
      <div className="flex flex-col gap-12 md:flex-row max-w-6xl">
        <Image
          alt="Image"
          src={post.frontMatter.thumbnail}
          className="object-cover"
          width={900}
          height={350}
        />
        <div className="items-center">
          <h5 className="text-xs text-gray-400 my-4">
            {post.frontMatter.date}
          </h5>
          <h5 className="text-4xl font-bold tracking-tight text-gray-900 my-4">
            {post.frontMatter.title}
          </h5>
          <p className="mb-4 font-normal text-gray-600">
            {post.frontMatter.subtitle}
          </p>
          <p className="my-4 text-xs text-gray-400">Leer más...</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
