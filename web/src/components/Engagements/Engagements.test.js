import { render } from '@redwoodjs/testing/web'

import Engagements from './Engagements'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Engagements', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Engagements />)
    }).not.toThrow()
  })
})
