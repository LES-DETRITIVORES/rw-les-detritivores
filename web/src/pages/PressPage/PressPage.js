import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PressPage = () => {
  return (
    <>
      <MetaTags title="Press" description="Press page" />

      <h1>PressPage</h1>
      <p>
        Find me in <code>./web/src/pages/PressPage/PressPage.js</code>
      </p>
      <p>
        My default route is named <code>press</code>, link to me with `
        <Link to={routes.press()}>Press</Link>`
      </p>
    </>
  )
}

export default PressPage
