import { render } from '@redwoodjs/testing/web'

import CallPage from './CallPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CallPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CallPage />)
    }).not.toThrow()
  })
})
