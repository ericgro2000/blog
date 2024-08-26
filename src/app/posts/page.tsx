// import { getPosts } from "../../../api/"

import { getPosts } from "@/api/getPosts"
import { PostCard } from "./components/PostCatd"


export default async function PostsPage() {

    const posts = await getPosts()
  
    return (
      <>
        <div className="card-grid">
          {posts.map(post => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </>
    )
  }