import { render } from '@redwoodjs/testing/web'

import Tri from './Tri'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Tri', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Tri />)
    }).not.toThrow()
  })
})
