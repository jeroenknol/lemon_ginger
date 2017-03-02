import { FETCHED_RECIPES } from '../actions/recipes/fetch'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_RECIPES :
      return [].concat(payload)

    default :
      return state
  }
}
