import { render } from '@redwoodjs/testing/web'

import PressPage from './PressPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PressPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PressPage />)
    }).not.toThrow()
  })
})
