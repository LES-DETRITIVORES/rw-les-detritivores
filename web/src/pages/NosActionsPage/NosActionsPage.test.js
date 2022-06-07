import { render } from '@redwoodjs/testing/web'

import NosActionsPage from './NosActionsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NosActionsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NosActionsPage />)
    }).not.toThrow()
  })
})
