import { render } from '@redwoodjs/testing/web'

import EntrepriseInsertion from './EntrepriseInsertion'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EntrepriseInsertion', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EntrepriseInsertion />)
    }).not.toThrow()
  })
})
