import { render } from '@redwoodjs/testing/web'

import InvestmentPage from './InvestmentPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InvestmentPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestmentPage />)
    }).not.toThrow()
  })
})
