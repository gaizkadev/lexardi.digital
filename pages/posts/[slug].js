// pages/posts/[slug.js]
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

const Post = ({ frontMatter, mdxSource }) => {
  return (
    <>
      <div className="">
        <h1 className="font-semibold my-8 text-3xl text-blue-700">
          {frontMatter.title}
        </h1>
        <MDXRemote {...mdxSource} />
      </div>
    </>
  );
};

export async function getStaticPaths() {
  // Read the files inside the pages/posts dir
  const files = fs.readdirSync(path.join("pages/posts"));

  // Generate path for each file
  const paths = files.map((file) => {
    return {
      params: {
        slug: file.replace(".mdx", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  // read each file
  const markdown = fs.readFileSync(
    path.join("pages/_posts", slug + ".mdx"),
    "utf-8"
  );

  // Extract front matter
  const { data: frontMatter, content } = matter(markdown);

  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
}
