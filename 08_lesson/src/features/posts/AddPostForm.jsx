import { useState } from "react";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const users = useSelector(
    state => state.users
  );

  const [title, setTitle] =
    useState("");

  const [content, setContent] =
    useState("");

  const [userId, setUserId] =
    useState("");

  const onSavePost = () => {
    if (
      title &&
      content &&
      userId
    ) {
      dispatch(
        postAdded(
          title,
          content,
          userId
        )
      );

      setTitle("");

      setContent("");

      setUserId("");
    }
  };

  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">
        Add New Post
      </h1>

      <input
        className="mb-3 w-full border p-2"
        placeholder="Title"
        value={title}
        onChange={e =>
          setTitle(
            e.target.value
          )
        }
      />

      <select
        className="mb-3 w-full border p-2"
        value={userId}
        onChange={e =>
          setUserId(
            e.target.value
          )
        }
      >
        <option value="">
          Select Author
        </option>

        {users.map(user => (
          <option
            key={user.id}
            value={user.id}
          >
            {user.name}
          </option>
        ))}
      </select>

      <textarea
        className="mb-3 w-full border p-2"
        placeholder="Content"
        value={content}
        onChange={e =>
          setContent(
            e.target.value
          )
        }
      />

      <button
        onClick={onSavePost}
        className="rounded border px-4 py-2"
      >
        Save Post
      </button>
    </section>
  );
};

export default AddPostForm;