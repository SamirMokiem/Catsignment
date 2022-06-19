// Todo:: maybe better type naming?
import {UserService} from "../../userservice/userService";

export type _FavoriteRequest = {
  sub_id: string | null
  limit: number
  page: number
}

export function FavoriteRequest(options?: Partial<_FavoriteRequest>): _FavoriteRequest {
  const defaults = {
    page: 0,
    limit: 25,
    sub_id: null
  }

  return {
    ...defaults,
    ...options
  }
}
