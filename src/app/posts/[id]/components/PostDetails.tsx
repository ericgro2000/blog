import { Skeleton } from "@/Skeletons/Skeleton"
import { getPost } from "@/api/getPosts"
import { Suspense } from "react"
import { UserDetails } from "./UserDetails"

export async function PostDetails({ postId }: { postId: string }) {
    const post = await getPost(postId)
  
    return (
      <>
        <Suspense
        fallback={
          <>
            <h1 className="page-title">
              <Skeleton inline short />
            </h1>
            <span className="page-subtitle">
              By: <Skeleton short inline />
            </span>
            <div>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          </>
        }
      >
        <h1 className="page-title">{post.title}</h1>
        <span className="page-subtitle">
          By:{" "}
          <Suspense fallback={<Skeleton short inline />}>
            <UserDetails userId={post.userId} />
          </Suspense>
        </span>
        <div>{post.body}</div>
        </Suspense>
      </>
    )
  }