import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle('')
            setContent('')
            setUserId('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Add a New Post</h2>
            <form className="space-y-4">
                <div>
                    <label htmlFor="postTitle" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Post Title:
                    </label>
                    <input
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChanged}
                        className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    />
                </div>
                <div>
                    <label htmlFor="postAuthor" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Author:
                    </label>
                    <select
                        id="postAuthor"
                        value={userId}
                        onChange={onAuthorChanged}
                        className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                        <option value="">Select Author</option>
                        {usersOptions}
                    </select>
                </div>
                <div>
                    <label htmlFor="postContent" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Content:
                    </label>
                    <textarea
                        id="postContent"
                        name="postContent"
                        value={content}
                        onChange={onContentChanged}
                        rows={4}
                        className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    />
                </div>
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                    className={`px-4 py-2 rounded-lg transition ${
                        canSave
                            ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                            : 'bg-gray-400 cursor-not-allowed text-white'
                    }`}
                >
                    Save Post
                </button>
            </form>
        </div>
    )
}

export default AddPostForm
