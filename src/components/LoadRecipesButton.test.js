import { render, fireEvent, screen } from '@testing-library/react'
import { LoadRecipesButton } from './LoadRecipesButton'
import { Provider } from 'react-redux'
import { configureStore } from '../redux/store'
import { config } from './config'
var axios = require('axios')
var MockAdapter = require('axios-mock-adapter')
var mock = new MockAdapter(axios)

const apiKey = config.API_KEY
const url = `https://api.spoonacular.com/recipes/random?&apiKey=${apiKey}&number=33`

mock.onGet(url).reply(200, {
  recipes: ['test data1', 'test data2'],
})

describe('LoadRecipesButton', () => {
  test('getting data from api', async () => {
    const store = configureStore({
      recipes: [],
      liked: [],
      view: 'liked',
    })
    render(
      <Provider store={store}>
        <LoadRecipesButton />
      </Provider>
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)

    await new Promise((r) => setTimeout(r, 300))

    expect(await store.getState().recipes).toEqual(['test data1', 'test data2'])
  })
})
