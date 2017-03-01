import { NAVIGATE_TO } from '../actions/navigate'
import routes from '../routes'

export default (state = 0, { type, payload }) => {
  switch(type) {
    case NAVIGATE_TO :
      console.log(payload)
      return routes.reduce((prev, next, index) => {
        if (next.name === payload) {
          return index
        }

        return prev
      }, 0)

    default :
      return state
  }
}
