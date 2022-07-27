import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const IntegrationPage = () => {
  return (
    <>
      <MetaTags title="Integration" description="Integration page" />

      <h1>IntegrationPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/IntegrationPage/IntegrationPage.js</code>
      </p>
      <p>
        My default route is named <code>integration</code>, link to me with `
        <Link to={routes.integration()}>Integration</Link>`
      </p>
    </>
  )
}

export default IntegrationPage
