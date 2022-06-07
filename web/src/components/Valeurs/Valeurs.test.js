import { render } from '@redwoodjs/testing/web'

import Valeurs from './Valeurs'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Valeurs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Valeurs />)
    }).not.toThrow()
  })
})
