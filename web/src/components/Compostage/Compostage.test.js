import { render } from '@redwoodjs/testing/web'

import Compostage from './Compostage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Compostage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Compostage />)
    }).not.toThrow()
  })
})
