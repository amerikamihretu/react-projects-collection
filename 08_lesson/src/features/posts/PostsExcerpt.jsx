import { Link } from "react-router-dom";

import PostAuthor from "./PostAuthor";

import ReactionButtons from "./ReactionButtons";

import TimeAgo from "./TimeAgo";

const PostsExcerpt = ({ post }) => {
  return (
    <article className="mb-4 rounded border p-4">
      <h2 className="text-xl font-bold">
        {post.title}
      </h2>

      <p>{post.content.substring(0, 100)}</p>

      <div className="my-2 flex gap-3 text-sm">
        <PostAuthor userId={post.user} />

        <TimeAgo timestamp={post.date} />
      </div>

      <ReactionButtons post={post} />

      <Link
        to={`/post/${post.id}`}
        className="mt-4 inline-block"
      >
        View Post
      </Link>
    </article>
  );
};

export default PostsExcerpt;