export type Comment = {
  id: number
  email: string
  body: string
  postId: number
}

export type Todo = {
  id: number
  title: string
  completed: boolean
}

export type User = {
  id: number
  name: string
  email: string
  website: string
  address: {
    city: string
    street: string
    zipcode: string
    suite: string
  }
  company: {
    name: string
  }
}

export type Post = {
    id: number
    title: string
    body: string
    userId: number
  }
