import { render } from '@redwoodjs/testing/web'

import RgpdPage from './RgpdPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RgpdPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RgpdPage />)
    }).not.toThrow()
  })
})
