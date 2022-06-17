import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  const imageUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_211202_223_qNNb-iKOBh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651843524959"

  return (
    <>
      <MetaTags title="Accueil" description="Home page" />
      <div className="rounded-lg min-h-screen h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
      </div>
    </>
  )
}

export default HomePage
