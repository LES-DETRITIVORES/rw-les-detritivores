import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TrainingPage = () => {
  return (
    <>
      <MetaTags title="Training" description="Training page" />

      <h1>TrainingPage</h1>
      <p>
        Find me in <code>./web/src/pages/TrainingPage/TrainingPage.js</code>
      </p>
      <p>
        My default route is named <code>training</code>, link to me with `
        <Link to={routes.training()}>Training</Link>`
      </p>
    </>
  )
}

export default TrainingPage
