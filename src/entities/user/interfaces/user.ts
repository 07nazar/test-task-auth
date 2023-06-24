export interface IUser {
  name: string
  email: string
  slug: string
  bio: string
  image: {
    id: string
    url: string
    width: string
    height: string
  }
  cover: {
    id: string
    url: string
    width: string
    height: string
  }
}
