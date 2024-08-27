import {  SkeletonList, SkeletonPostCard } from "@/app/Sleketons/Skeleton"
import { getUserPosts } from "@/api/getPosts"

import { Suspense } from "react"
import { PostCard } from "@/shared/components/Post.catd";

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
  