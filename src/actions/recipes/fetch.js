export const FETCHED_RECIPES = 'FETCHED_RECIPES'
console.log('FetchRecipes action loaded')

export default () => {
  return(dispatch) => {
    console.log('in the fetch action')
    return fetch('http://localhost:3000/api/recipes/')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        dispatch({
          type: FETCHED_RECIPES,
          payload: responseJson
          })

      })
      .catch((error) => {
        console.error(error);
      });
  }
}


//
// export const FETCHED_RECIPES = 'FETCHED_RECIPES'
// console.log('FetchRecipes action loaded')
//
// export default () => {
//   console.log('in the fetch action')
//   return fetch('http://localhost:3000/api/recipes/')
//     .then((response) => response.json())
//     .then((responseJson) => {
//
//       return {
//         type: FETCHED_RECIPES
//         // payload: responseJson.recipes
//       }
//
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }
