import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import PostsList from "./features/posts/PostsList";

import AddPostForm from "./features/posts/AddPostForm";

import SinglePostPage from "./features/posts/SinglePostPage";

import EditPostForm from "./features/posts/EditPostForm";

import UsersList from "./features/users/UsersList";

import UserPage from "./features/users/UserPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={<PostsList />}
        />

        <Route
          path="/post"
          element={<AddPostForm />}
        />

        <Route
          path="/post/:postId"
          element={<SinglePostPage />}
        />

        <Route
          path="/edit/:postId"
          element={<EditPostForm />}
        />

        <Route
          path="/users"
          element={<UsersList />}
        />

        <Route
          path="/users/:userId"
          element={<UserPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;