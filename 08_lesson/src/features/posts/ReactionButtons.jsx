import { useDispatch } from "react-redux";

import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕"
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(
    reactionEmoji
  ).map(([name, emoji]) => (
    <button
      key={name}
      onClick={() =>
        dispatch(
          reactionAdded({
            postId: post.id,
            reaction: name
          })
        )
      }
      className="mr-2 rounded border px-2 py-1"
    >
      {emoji} {post.reactions[name]}
    </button>
  ));

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;