import { MDXRemote } from "next-mdx-remote";
import getPost from "../helpers/getPost";
import getPosts from "../helpers/getPosts";
import { serialize } from "next-mdx-remote/serialize";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PostHero from "../components/PostHero";

function Post({ data, content }) {
  return (
    <>
      <Header />
      <PostHero />
      <div className="flex mx-auto container">
        <div className="w-full">
          <h1 className="font-semibold my-4 text-3xl text-blue-700">
            {data.title}
          </h1>
          <time className="text-gray-500 italic">{data.date}</time>
          <p className="prose mt-12">
            <MDXRemote {...content} />
          </p>
        </div>
        <div className="bg-blue-200 w-1/2">
          <p className="">columnaderecha</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  const mdxSource = await serialize(post.content);
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};
