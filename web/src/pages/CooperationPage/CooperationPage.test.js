import { render } from '@redwoodjs/testing/web'

import CooperationPage from './CooperationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CooperationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CooperationPage />)
    }).not.toThrow()
  })
})
