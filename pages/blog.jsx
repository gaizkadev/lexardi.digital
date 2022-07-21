// pages/index.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import PostCard from "../components/PostCard";
import Header from "../components/Header";

const Home = ({ posts }) => {
  return (
    <>
      <Header />
      <div>
        {posts.map((post) => (
          <Link href={`/_posts/${post.slug}`} key={post.slug}>
            <a>
              <PostCard post={post} />
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  // Read the pages/posts dir
  let files = fs.readdirSync(path.join("_posts"));

  // Get only the mdx files
  files = files.filter((file) => file.split(".")[1] === "mdx");

  // Read each file and extract front matter
  const posts = await Promise.all(
    files.map((file) => {
      const mdWithData = fs.readFileSync(path.join("_posts", file), "utf-8");

      const { data: frontMatter } = matter(mdWithData);

      return {
        frontMatter,
        slug: file.split(".")[0],
      };
    })
  );

  // Return all the posts frontMatter and slug as props
  return {
    props: {
      posts,
    },
  };
}
