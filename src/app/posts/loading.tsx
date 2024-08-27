import { SkeletonList, SkeletonPostCard } from "../Sleketons/Skeleton";


export default function LoadingPostsPage() {
  return (
    <>


      <div className="card-grid">
        <SkeletonList amount={6}>
          <SkeletonPostCard />
        </SkeletonList>
      </div>
    </>
  )
}