import {USER_CREATED} from '../constants/users'

export function createUser(user) {
  return {
    type: USER_CREATED,
    payload: user
  }
}
