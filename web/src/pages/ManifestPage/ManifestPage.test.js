import { render } from '@redwoodjs/testing/web'

import ManifestPage from './ManifestPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ManifestPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ManifestPage />)
    }).not.toThrow()
  })
})
