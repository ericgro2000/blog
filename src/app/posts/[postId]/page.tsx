

import { PostDetails } from "./components/PostDetails"
import { Comments } from "./components/Comments"
import { Suspense } from "react"
import { Skeleton, SkeletonList } from "@/app/Sleketons/Skeleton"

export default function PostPage({
  params: { postId },
}: {
  params: { postId: string }
}) {
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
        <PostDetails postId={postId} />
        </Suspense>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
      
      <Suspense
        fallback={
          <SkeletonList amount={5}>
            <div className="card">
              <div className="card-body">
                <div className="text-sm mb-1">
                  <Skeleton short />
                </div>
                <Skeleton />
                <Skeleton />
              </div>
            </div>
          </SkeletonList>
        }
      >
          <Comments postId={postId} />
          </Suspense>
      </div>
    </>
  )
}
