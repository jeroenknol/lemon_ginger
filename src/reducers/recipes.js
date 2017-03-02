import { FETCHED_RECIPES } from '../actions/recipes/fetch'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_RECIPES :
      console.log('Payload0rz in reduc0rrzz: ',payload)
      return [].concat(payload)

    default :
      return state
  }
}
