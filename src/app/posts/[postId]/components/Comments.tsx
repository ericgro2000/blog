
import { Skeleton, SkeletonList } from "@/Skeleton"
import { getPostComments } from "@/api/getPostsComments"
import { Suspense } from "react"

export async function Comments({ postId }: { postId: string }) {
    const comments = await getPostComments(postId)
  
    return(
      <>
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
    {   comments.map(comment => (
      <div key={comment.id} className="card">
        <div className="card-body">
          <div className="text-sm mb-1">{comment.email}</div>
          {comment.body}
        </div>
      </div>
    ))}
    </Suspense>
      </>
    )
  }