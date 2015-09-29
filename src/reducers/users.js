import {USER_CREATED} from '../constants/users'

export default function users(state = [{name: 'Max', email: 'mpolun@mdsol.com'}], action) {
  switch(action.type) {
    case USER_CREATED: {
      return state.concat([action.payload])
    }
  }
  return state
}
