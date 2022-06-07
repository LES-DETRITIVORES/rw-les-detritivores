import { render } from '@redwoodjs/testing/web'

import Sensibilisation from './Sensibilisation'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Sensibilisation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Sensibilisation />)
    }).not.toThrow()
  })
})
