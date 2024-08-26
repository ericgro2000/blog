import { Post } from "./types/types";

export async function getPost(postId: string | number) {
  return fetch(`${process.env.API_URL}/posts/${postId}`)
    .then(res => res.json())
    .then(data => data as Post)
}

export async function getPosts() {
    return fetch(`${process.env.API_URL}/posts`)
      .then(res => res.json())
      .then(data => data as Post[])
  }
