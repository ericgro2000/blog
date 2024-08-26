import { SkeletonList, SkeletonPostCard } from "@/Skeleton"
import { getUserPosts } from "@/api/getPosts"
import { PostCard } from "@/app/posts/components/PostCatd"
import { Suspense } from "react"

export async function UserPosts({ userId }: { userId: string }) {
    const posts = await getUserPosts(userId)
  
    return (
        <Suspense
          fallback={
            <SkeletonList amount={3}>
              <SkeletonPostCard />
            </SkeletonList>
          }
        >
          <>
            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </>
        </Suspense>
      );
    }
  