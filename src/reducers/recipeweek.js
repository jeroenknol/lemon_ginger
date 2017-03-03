import { FETCHED_ROTW } from '../actions/recipes/fetchROTW'

export default (state = {}, { type, payload } = {}) => {
  switch(type) {

    case FETCHED_ROTW :
      console.log('Recipe of the week payload: ',payload)
        return Object.assign({}, payload )

    default :
      return state
  }
}
