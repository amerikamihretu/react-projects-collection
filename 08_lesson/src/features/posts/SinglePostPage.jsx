import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

import { selectPostById } from "./postsSlice";

import PostAuthor from "./PostAuthor";

import TimeAgo from "./TimeAgo";

import ReactionButtons from "./ReactionButtons";

const SinglePostPage = () => {
  const { postId } = useParams();

  const post = useSelector(state =>
    selectPostById(
      state,
      postId
    )
  );

  if (!post) {
    return <h2>Post not found.</h2>;
  }

  return (
    <article className="rounded border p-6">
      <h1 className="text-3xl font-bold">
        {post.title}
      </h1>

      <p className="my-4">
        {post.content}
      </p>

      <div className="mb-4 flex gap-3">
        <PostAuthor userId={post.user} />

        <TimeAgo timestamp={post.date} />
      </div>

      <ReactionButtons post={post} />

      <Link
        to={`/edit/${post.id}`}
        className="mt-4 inline-block"
      >
        Edit Post
      </Link>
    </article>
  );
};

export default SinglePostPage;