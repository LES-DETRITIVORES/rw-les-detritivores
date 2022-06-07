import { render } from '@redwoodjs/testing/web'

import Equipe from './Equipe'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Equipe', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Equipe />)
    }).not.toThrow()
  })
})
