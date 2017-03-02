import Page1 from './screens/routing/Page1'
import Page2 from './screens/routing/Page2'
import Page3 from './screens/routing/Page3'

import Home from './screens/Home'
import AllRecipes from './screens/AllRecipes'
import Recipe from './screens/Recipe'
import About from './screens/About'

const routes = [
  { name: 'Home', title: 'Home', index: 0, leftButton: null, rightButton: null, component: Home },
  { name: 'AllRecipes', title: 'Alle recepten', index: 1, leftButton: null, rightButton: null, component: AllRecipes },
  { name: 'Recipe', title: 'Recept van de week', index: 2, leftButton: null, rightButton: null, component: Recipe },
  { name: 'About', title: 'Over Roos', index: 3, leftButton: null, rightButton: null, component: About },
]

export default routes
