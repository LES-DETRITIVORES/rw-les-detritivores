import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CooperationPage = () => {
  return (
    <>
      <MetaTags title="Cooperation" description="Cooperation page" />

      <h1>CooperationPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/CooperationPage/CooperationPage.js</code>
      </p>
      <p>
        My default route is named <code>cooperation</code>, link to me with `
        <Link to={routes.cooperation()}>Cooperation</Link>`
      </p>
    </>
  )
}

export default CooperationPage
