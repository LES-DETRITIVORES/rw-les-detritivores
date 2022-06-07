import { render } from '@redwoodjs/testing/web'

import Scic from './Scic'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Scic', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Scic />)
    }).not.toThrow()
  })
})
