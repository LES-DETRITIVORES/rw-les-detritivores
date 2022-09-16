import { render } from '@redwoodjs/testing/web'

import LegalPage from './LegalPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LegalPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LegalPage />)
    }).not.toThrow()
  })
})
