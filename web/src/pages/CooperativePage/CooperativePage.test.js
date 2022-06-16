import { render } from '@redwoodjs/testing/web'

import CooperativePage from './CooperativePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CooperativePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CooperativePage />)
    }).not.toThrow()
  })
})
