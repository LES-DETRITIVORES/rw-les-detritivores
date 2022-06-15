import { render } from '@redwoodjs/testing/web'

import HorizontalLayout from './HorizontalLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HorizontalLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HorizontalLayout />)
    }).not.toThrow()
  })
})
