import { render } from '@redwoodjs/testing/web'

import OrganicPage from './OrganicPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('OrganicPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrganicPage />)
    }).not.toThrow()
  })
})
