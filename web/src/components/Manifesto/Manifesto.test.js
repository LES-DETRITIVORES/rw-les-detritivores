import { render } from '@redwoodjs/testing/web'

import Manifesto from './Manifesto'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Manifesto', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Manifesto />)
    }).not.toThrow()
  })
})
