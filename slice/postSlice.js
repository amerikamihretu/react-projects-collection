import { createSlice, nanoid } from "@reduxjs/toolkit"

// --------------------
// INITIAL STATE
// --------------------

const initialState = [
    {
        id: "1",
        title: "Learning Redux",
        content: "Redux is fun!",

        reactions: {
            thumbsUp: 0,
            heart: 0,
            rocket: 0
        }
    }
]

// --------------------
// SLICE
// --------------------

const postsSlice = createSlice({

    // NAME
    name: "posts",

    // INITIAL STATE
    initialState,

    // REDUCERS
    reducers: {

        // --------------------
        // CREATE A POST
        // --------------------

        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },

            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,

                        reactions: {
                            thumbsUp: 0,
                            heart: 0,
                            rocket: 0
                        }
                    }
                }
            }
        },

        // --------------------
        // UPDATE A POST
        // --------------------

        postUpdated(state, action) {

            const { id, title, content } =
                action.payload

            const existingPost =
                state.find(
                    post => post.id === id
                )

            if (existingPost) {

                existingPost.title =
                    title

                existingPost.content =
                    content
            }
        },

        // --------------------
        // DELETE A POST
        // --------------------

        postDeleted(state, action) {

            return state.filter(
                post =>
                    post.id !== action.payload
            )
        },

        // --------------------
        // UPDATE A REACTION
        // --------------------

        reactionAdded(state, action) {

            const { postId, reaction } =
                action.payload

            const existingPost =
                state.find(
                    post =>
                        post.id === postId
                )

            if (existingPost) {

                existingPost.reactions[
                    reaction
                ]++
            }
        },

        // --------------------
        // RESET REACTIONS
        // --------------------

        reactionsCleared(
            state,
            action
        ) {

            const existingPost =
                state.find(
                    post =>
                        post.id ===
                        action.payload
                )

            if (existingPost) {

                existingPost.reactions = {

                    thumbsUp: 0,

                    heart: 0,

                    rocket: 0
                }
            }
        }
    }
})

// --------------------
// ACTIONS
// --------------------

export const {

    postAdded,

    postUpdated,

    postDeleted,

    reactionAdded,

    reactionsCleared

} = postsSlice.actions

// --------------------
// SELECTORS
// --------------------

// READ ALL POSTS

export const selectAllPosts =
    state => state.posts

// READ ONE POST

export const selectPostById =
    (state, postId) =>
        state.posts.find(
            post =>
                post.id === postId
        )

// --------------------
// EXPORT REDUCER
// --------------------

export default postsSlice.reducer




















 //Where are the CRUD operations found inside a slice?
// Slice
// │
// ├── Name                    → Not CRUD
// │
// ├── Initial state           → Not CRUD
// │
// ├── Reducers                → CREATE, UPDATE, DELETE
// │
// ├── Actions                 → Trigger CREATE, UPDATE, DELETE
// │
// ├── Selectors               → READ
// │
// └── Extra reducers          → Optional (can perform any CRUD operation)

// So, CRUD operations are mostly found in two places:

// WRITE operations
// (CREATE, UPDATE, DELETE)
//         ↓
// Reducers


// READ operations
//         ↓
// Selectors





// Which lines correspond to which CRUD operation?
// Code	CRUD
// postAdded()	CREATE
// selectAllPosts()	READ
// selectPostById()	READ
// postUpdated()	UPDATE
// reactionAdded()	UPDATE
// reactionsCleared()	UPDATE
// postDeleted()	DELETE
// CRUD for posts
// POSTS


// CREATE
// │
// └── postAdded()


// READ
// │
// ├── selectAllPosts()
// │
// └── selectPostById()


// UPDATE
// │
// └── postUpdated()


// DELETE
// │
// └── postDeleted()
// CRUD for reactions

// Remember that reactions belong to a post.

// {
//     id: "1",


//     title: "Learning Redux",


//     reactions: {


//         thumbsUp: 5,


//         heart: 2,


//         rocket: 1
//     }
// }

// So reaction CRUD looks like this:

// REACTIONS


// CREATE
// │
// └── Not needed


// READ
// │
// └── selectPostById()


// UPDATE
// │
// ├── reactionAdded()
// │
// └── reactionsCleared()


// DELETE
// │
// └── Not needed

// Notice that reactions don't usually have their own IDs.

// You don't create a new 👍 button every time a user clicks it.

// Instead, you update a counter.

// The most important thing to remember is this:

// Reducers
//     ↓
// Change data
// (CREATE, UPDATE, DELETE)


// Selectors
//     ↓
// Read data
// (READ)


// Actions
//     ↓
// Trigger reducers









// App.jsx

import { useEffect, useState } from "react";

function App() {
  console.log("1. App component started");

  const [users, setUsers] = useState([]);

  console.log("2. useState executed");

  async function getUsers() {
    console.log("5. getUsers started");

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    console.log("6. fetch completed");

    const data = await response.json();

    console.log("7. JSON conversion completed");

    setUsers(data);

    console.log("8. setUsers executed");
  }

  useEffect(() => {
    console.log("4. useEffect executed");

    getUsers();
  }, []);

  console.log("3. JSX is about to be returned");

  return <div>{users.length}</div>;
}

export default App;




















import { useState } from "react";

function Login() {
  // React tracks the values while the user types
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // UI state
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    // Clear previous message
    setMessage("");

    // Basic frontend validation
    if (!email || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

    setLoading(true);

    try {
      // --------------------------------
      // THIS IS WHERE YOUR BACKEND CALL
      // WOULD GO IN A REAL APPLICATION
      // --------------------------------

      // Fake delay so we can see loading
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Fake credentials for learning
      if (
        email === "amerika@gmail.com" &&
        password === "123456"
      ) {
        setMessage("Login successful!");

        // In a real application, the backend
        // would return authentication information here.
      } else {
        setMessage("Invalid email or password.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        {/* EMAIL */}
        <div>
          <label htmlFor="email">
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={loading}
            required
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label htmlFor="password">
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            disabled={loading}
            required
          />
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* MESSAGE */}
      {message && (
        <p>
          {message}
        </p>
      )}
    </div>
  );
}

export default Login;