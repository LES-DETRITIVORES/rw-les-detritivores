import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const InclusivePage = () => {
  const imageUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_211007_725_aGTFOEFP5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651843630508"

  return (
    <>
      <MetaTags title="Inclusif" description="Inclusive page" />
      <div className="min-h-screen h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
      </div>
    </>
  )
}

export default InclusivePage
