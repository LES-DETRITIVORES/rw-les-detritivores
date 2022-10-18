import { render } from '@redwoodjs/testing/web'

import MailPage from './MailPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MailPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MailPage />)
    }).not.toThrow()
  })
})
