import { Skeleton } from "@/Skeleton"
import { getUser } from "@/api/getUsers"
import { Suspense } from "react"

async function UserDetails({ userId }: { userId: string }) {
    const user = await getUser(userId)
  
    return (
      <>
      <Suspense
        fallback={
          <>
            <h1 className="page-title">
              <Skeleton short inline />
            </h1>
            <div className="page-subtitle">
              <Skeleton short inline />
            </div>
            <div>
              <b>Company:</b> <Skeleton short inline />
            </div>
            <div>
              <b>Website:</b> <Skeleton short inline />
            </div>
            <div>
              <b>Address:</b> <Skeleton short inline />
            </div>
          </>
        }
      >
        <h1 className="page-title">{user.name}</h1>
        <div className="page-subtitle">{user.email}</div>
        <div>
          <b>Company:</b> {user.company.name}
        </div>
        <div>
          <b>Website:</b> {user.website}
        </div>
        <div>
          <b>Address:</b>{" "}
          {`${user.address.street} ${user.address.suite}
      ${user.address.city} ${user.address.zipcode}`}
        </div>
        </Suspense>
      </>
    )
  }