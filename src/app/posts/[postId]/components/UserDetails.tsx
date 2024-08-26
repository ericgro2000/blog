import { Skeleton } from "@/Skeleton"
import { getUser } from "@/api/getUsers"
import Link from "next/link"
import { Suspense } from "react"

export async function UserDetails({ userId }: { userId: number }) {
    const user = await getUser(userId)
  
    return (
      <>
      <Suspense fallback={<Skeleton short inline />}>
    <Link href={`/users/${user.id}`}>{user.name}</Link>
    </Suspense>
    </>
    )
  }