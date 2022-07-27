import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TreatmentPage = () => {
  return (
    <>
      <MetaTags title="Treatment" description="Treatment page" />

      <h1>TreatmentPage</h1>
      <p>
        Find me in <code>./web/src/pages/TreatmentPage/TreatmentPage.js</code>
      </p>
      <p>
        My default route is named <code>treatment</code>, link to me with `
        <Link to={routes.treatment()}>Treatment</Link>`
      </p>
    </>
  )
}

export default TreatmentPage
