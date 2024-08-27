import { Comment } from "./types/types"
import { wait } from "./wait"

  export async function getPostComments(postId: string | number) {
    await wait(2000)
    return fetch(`${process.env.API_URL}/posts/${postId}/comments`)
      .then(res => res.json())
      .then(data => data as Comment[])
  }
