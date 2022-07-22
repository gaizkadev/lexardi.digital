import PostCard from "../components/PostCard";
import getPosts from "../helpers/getPosts";

export default function Blog({ posts }) {
  return (
    <>
      <div>
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.data.title}
            date={post.data.date}
            description={post.data.description}
            thumbnail={post.data.thumbnail}
            slug={post.slug}
          />
        ))}
      </div>
    </>
  );
}

export const getStaticProps = () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};
