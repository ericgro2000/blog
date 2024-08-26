import { getTodos } from "@/api/getTodos"
import { TodoItem } from "./TodoItem"

export async function TodosList() {
    const todos = await getTodos()
  
    return todos.map(todo => <TodoItem key={todo.id} {...todo} />)
  }