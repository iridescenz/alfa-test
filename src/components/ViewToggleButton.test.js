import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ViewTiggleButton } from './ViewTiggleButton'
import { configureStore } from '../redux/store'

describe('ViewTiggleButton', () => {
  test('switch from "show liked" to "show all" button', () => {
    const store = configureStore({
      recipes: [],
      liked: [],
      view: 'all',
    })
    render(
      <Provider store={store}>
        <ViewTiggleButton />
      </Provider>
    )

    const button = screen.getByRole('button')

    expect(button).toHaveTextContent('show liked')
    fireEvent.click(button)
    expect(button).toHaveTextContent('show all')
  })

  test('switch from "show all" to "show liked" button', () => {
    const store = configureStore({
      recipes: [],
      liked: [],
      view: 'liked',
    })
    render(
      <Provider store={store}>
        <ViewTiggleButton />
      </Provider>
    )

    const button = screen.getByRole('button')

    expect(button).toHaveTextContent('show all')
    fireEvent.click(button)
    expect(button).toHaveTextContent('show liked')
  })
})
