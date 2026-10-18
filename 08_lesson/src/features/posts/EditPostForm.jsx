import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  postUpdated,
  selectPostById
} from "./postsSlice";

const EditPostForm = () => {
  const { postId } = useParams();

  const post = useSelector(state =>
    selectPostById(state, postId)
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  if (!post) {
    return <h2>Post not found.</h2>;
  }

  const [title, setTitle] = useState(
    post.title
  );

  const [content, setContent] = useState(
    post.content
  );

  const onSavePost = () => {
    if (title && content) {
      dispatch(
        postUpdated({
          id: postId,
          title,
          content
        })
      );

      navigate(`/post/${postId}`);
    }
  };

  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">
        Edit Post
      </h1>

      <input
        className="mb-3 w-full border p-2"
        value={title}
        onChange={e =>
          setTitle(e.target.value)
        }
      />

      <textarea
        className="mb-3 w-full border p-2"
        value={content}
        onChange={e =>
          setContent(e.target.value)
        }
      />

      <button
        onClick={onSavePost}
        className="rounded border px-4 py-2"
      >
        Update Post
      </button>
    </section>
  );
};

export default EditPostForm;