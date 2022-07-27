import { render } from '@redwoodjs/testing/web'

import CollectPage from './CollectPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CollectPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CollectPage />)
    }).not.toThrow()
  })
})
