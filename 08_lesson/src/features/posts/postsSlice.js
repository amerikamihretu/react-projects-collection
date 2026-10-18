// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = [
//   {
//     id: "1",
//     title: "Learning Redux Toolkit",
//     content: "Redux Toolkit makes Redux easier.",
//     user: "0",
//     date: new Date().toISOString(),

//     reactions: {
//       thumbsUp: 0,
//       wow: 0,
//       heart: 0,
//       rocket: 0,
//       coffee: 0
//     }
//   }
// ];

// const postsSlice = createSlice({
//   name: "posts",

//   initialState,

//   reducers: {
//     postAdded: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },

//       prepare(title, content, user) {
//         return {
//           payload: {
//             id: nanoid(),
//             title,
//             content,
//             user,
//             date: new Date().toISOString(),

//             reactions: {
//               thumbsUp: 0,
//               wow: 0,
//               heart: 0,
//               rocket: 0,
//               coffee: 0
//             }
//           }
//         };
//       }
//     },

//     postUpdated(state, action) {
//       const {
//         id,
//         title,
//         content
//       } = action.payload;

//       const existingPost = state.find(
//         post => post.id === id
//       );

//       if (existingPost) {
//         existingPost.title = title;

//         existingPost.content = content;
//       }
//     },

//     reactionAdded(state, action) {
//       const {
//         postId,
//         reaction
//       } = action.payload;

//       const existingPost = state.find(
//         post => post.id === postId
//       );

//       if (existingPost) {
//         existingPost.reactions[
//           reaction
//         ]++;
//       }
//     }
//   }
// });

// export const {
//   postAdded,
//   postUpdated,
//   reactionAdded
// } = postsSlice.actions;

// export const selectAllPosts = state =>
//   state.posts;

// export const selectPostById = (
//   state,
//   postId
// ) =>
//   state.posts.find(
//     post => post.id === postId
//   );

// export default postsSlice.reducer;