import { render } from '@redwoodjs/testing/web'

import InclusivePage from './InclusivePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InclusivePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InclusivePage />)
    }).not.toThrow()
  })
})
