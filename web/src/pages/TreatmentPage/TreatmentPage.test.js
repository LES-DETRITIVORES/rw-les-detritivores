import { render } from '@redwoodjs/testing/web'

import TreatmentPage from './TreatmentPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TreatmentPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TreatmentPage />)
    }).not.toThrow()
  })
})
