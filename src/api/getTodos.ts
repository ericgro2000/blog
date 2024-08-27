import { Todo } from "./types/types"
import { wait } from "./wait"

  
  export async function getTodos() {
    await wait(2000)
    return fetch(`${process.env.API_URL}/todos`)
      .then(res => res.json())
      .then(data => data as Todo[])
  }
  
  export async function getUserTodos(userId: string | number) {
    await wait(2000)
    return fetch(`${process.env.API_URL}/todos?userId=${userId}`)
      .then(res => res.json())
      .then(data => data as Todo[])
  }