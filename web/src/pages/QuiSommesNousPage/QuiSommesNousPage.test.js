import { render } from '@redwoodjs/testing/web'

import QuiSommesNousPage from './QuiSommesNousPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('QuiSommesNousPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<QuiSommesNousPage />)
    }).not.toThrow()
  })
})
