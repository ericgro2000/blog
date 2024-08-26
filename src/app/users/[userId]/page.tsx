

import { Suspense } from "react"
import { UserPosts } from "./components/UserPosts"
import { UserTodos } from "./components/UserTodos"
import { UserDetails } from "./components/UserDetails"

export default function UserPage({
  params: { userId },
}: {
  params: { userId: string }
}) {
  return (
    <>
        <UserDetails userId={userId} />

      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
          <UserPosts userId={userId} />
      </div>
      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
          <UserTodos userId={userId} />
      </ul>
    </>
  )
}

