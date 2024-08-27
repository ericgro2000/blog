import { Post } from "./types/types";
import { wait } from "./wait";

export async function getPost(postId: string | number) {
  await wait(2000)
  return fetch(`${process.env.API_URL}/posts/${postId}`)
    .then(res => res.json())
    .then(data => data as Post)
}

export async function getPosts() {
  await wait(2000)
    return fetch(`${process.env.API_URL}/posts`)
      .then(res => res.json())
      .then(data => data as Post[])
  }

  export async function getUserPosts(userId: string | number) {
    await wait(2000)
    return fetch(`${process.env.API_URL}/posts?userId=${userId}`)
      .then(res => res.json())
      .then(data => data as Post[])
  }