export const NAVIGATE_TO = 'NAVIGATE_TO'

export default (route) => {
  return {
    type: NAVIGATE_TO,
    payload: route
  }
}
