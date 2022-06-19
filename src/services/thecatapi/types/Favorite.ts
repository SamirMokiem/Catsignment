import {Cat} from "./Cat";

export type Favorite = {
  id: string
  image_id: string
  sub_id: string
  image: {
    id: string,
    url: string
  }
  cat?: Cat;
  created_at: string
}
