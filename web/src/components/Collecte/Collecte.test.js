import { render } from '@redwoodjs/testing/web'

import Collecte from './Collecte'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Collecte', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Collecte />)
    }).not.toThrow()
  })
})
