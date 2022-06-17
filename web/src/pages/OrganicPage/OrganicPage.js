import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const OrganicPage = () => {
  const imageUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_211202_571_0kF54-dUo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651844829336"

  return (
    <>
      <MetaTags title="Organic" description="Organic page" />
      <div className="rounded-lg min-h-screen h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
      </div>
    </>
  )
}

export default OrganicPage
