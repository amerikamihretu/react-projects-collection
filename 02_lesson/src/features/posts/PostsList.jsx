import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{post.content.substring(0, 100)}</p>
            <div className="flex items-center gap-4 mt-3 text-sm text-gray-500 dark:text-gray-400">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </div>
            <ReactionButtons post={post} />
        </article>
    ))

    return (
        <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Posts</h2>
            {renderedPosts}
        </section>
    )
}

export default PostsList
