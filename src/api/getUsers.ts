import { User } from "./types/types"
import { wait } from "./wait"

  export async function getUsers() {
    await wait(2000)
    return fetch(`${process.env.API_URL}/users`)
      .then(res => res.json())
      .then(data => data as User[])
  }
  
  export async function getUser(userId: string | number) {
    await wait(2000)
    return fetch(`${process.env.API_URL}/users/${userId}`)
      .then(res => res.json())
      .then(data => data as User)
  }