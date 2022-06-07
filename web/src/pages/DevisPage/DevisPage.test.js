import { render } from '@redwoodjs/testing/web'

import DevisPage from './DevisPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DevisPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DevisPage />)
    }).not.toThrow()
  })
})
