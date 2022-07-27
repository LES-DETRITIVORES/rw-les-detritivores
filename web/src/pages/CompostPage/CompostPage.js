import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CompostPage = () => {
  return (
    <>
      <MetaTags title="Compost" description="Compost page" />

      <h1>CompostPage</h1>
      <p>
        Find me in <code>./web/src/pages/CompostPage/CompostPage.js</code>
      </p>
      <p>
        My default route is named <code>compost</code>, link to me with `
        <Link to={routes.compost()}>Compost</Link>`
      </p>
    </>
  )
}

export default CompostPage
