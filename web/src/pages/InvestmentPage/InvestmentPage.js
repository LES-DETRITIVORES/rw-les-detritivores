import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const InvestmentPage = () => {
  return (
    <>
      <MetaTags title="Investment" description="Investment page" />

      <h1>InvestmentPage</h1>
      <p>
        Find me in <code>./web/src/pages/InvestmentPage/InvestmentPage.js</code>
      </p>
      <p>
        My default route is named <code>investment</code>, link to me with `
        <Link to={routes.investment()}>Investment</Link>`
      </p>
    </>
  )
}

export default InvestmentPage
