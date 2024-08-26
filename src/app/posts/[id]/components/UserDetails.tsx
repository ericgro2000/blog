import { getUser } from "@/api/getUsers"
import Link from "next/link"

export async function UserDetails({ userId }: { userId: number }) {
    const user = await getUser(userId)
  
    return <Link href={`/users/${user.id}`}>{user.name}</Link>
  }