export const FETCHED_ROTW = 'FETCHED_ROTW'

export default () => {
  return(dispatch) => {
    console.log('in the fetch action')
    return fetch('https://lemon-ginger.herokuapp.com/api/recipes/week/')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        dispatch({
          type: FETCHED_ROTW,
          payload: responseJson
          })

      })
      .catch((error) => {
        console.error(error);
      });
  }
}
