import { useSelector } from "react-redux";

import { selectAllPosts } from "./postsSlice";

import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const posts = useSelector(
    selectAllPosts
  );

  const orderedPosts =
    [...posts].sort(
      (a, b) =>
        b.date.localeCompare(a.date)
    );

  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">
        Posts
      </h1>

      {orderedPosts.map(post => (
        <PostsExcerpt
          key={post.id}
          post={post}
        />
      ))}
    </section>
  );
};

export default PostsList;