import { Comment } from "./types/types"

  export async function getPostComments(postId: string | number) {
    return fetch(`${process.env.API_URL}/posts/${postId}/comments`)
      .then(res => res.json())
      .then(data => data as Comment[])
  }
