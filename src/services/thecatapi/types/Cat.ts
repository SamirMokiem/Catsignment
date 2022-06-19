import {Breed} from "./Breed";

export type Cat = {
  id: string
  url: string
  width: number
  height: number
  breeds: Breed[]
  favorite_id?: string

  //todo type
  categories: any[]
}
