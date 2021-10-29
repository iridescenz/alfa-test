import React from 'react'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { RecipesComponent } from './components/RecipesComponent'

export const App = () => {

  return (
    <Provider store={store}>
<RecipesComponent />
    </Provider>
  )
}
