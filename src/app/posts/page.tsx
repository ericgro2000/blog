
import { getPosts } from "@/api/getPosts"
import { PostCard } from "@/shared/components/Post.catd"


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