import { use } from "react"
import Post from "./Post"

export default function Posts({postsPromise}) {
  const posts = use(postsPromise)
  console.log(posts)
  return(
    <div className="card">
      <h1>All Post are here: {posts.length}</h1>
      {
        posts.map(post => <Post  post={post}></Post>)
      }
    </div>
  )
}
