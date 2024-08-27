import { Skeleton, SkeletonList } from "@/app/Sleketons/Skeleton"
import { getUserTodos } from "@/api/getTodos"
import { TodoItem } from "@/app/todos/components/TodoItem"
import { Suspense } from "react"

export async function UserTodos({ userId }: { userId: string }) {
    const todos = await getUserTodos(userId)
  
    return (
        <>
        <Suspense
          fallback={
            <SkeletonList amount={5}>
              <li>
                <Skeleton short />
              </li>
            </SkeletonList>
          }
        >
        {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </Suspense>
        </>
    )
  }