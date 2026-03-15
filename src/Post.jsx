export default function Post({post}){
  return(
    <div className="card">
    <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}