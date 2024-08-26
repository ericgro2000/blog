
import Link from "next/link"
import { Suspense } from "react"
import { PostDetails } from "./components/PostDetails"
import { Comments } from "./components/Comments"

export default function PostPage({
  params: { postId },
}: {
  params: { postId: string }
}) {
  return (
    <>
      
        <PostDetails postId={postId} />

      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
      
      
          <Comments postId={postId} />
      </div>
    </>
  )
}
