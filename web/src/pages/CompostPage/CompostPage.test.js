import { render } from '@redwoodjs/testing/web'

import CompostPage from './CompostPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CompostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CompostPage />)
    }).not.toThrow()
  })
})
