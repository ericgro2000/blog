import { User } from "./types/types"

  export async function getUsers() {
    return fetch(`${process.env.API_URL}/users`)
      .then(res => res.json())
      .then(data => data as User[])
  }
  
  export async function getUser(userId: string | number) {
    return fetch(`${process.env.API_URL}/users/${userId}`)
      .then(res => res.json())
      .then(data => data as User)
  }