import { render } from '@redwoodjs/testing/web'

import IntegrationPage from './IntegrationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('IntegrationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IntegrationPage />)
    }).not.toThrow()
  })
})
