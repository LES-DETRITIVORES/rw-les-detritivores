import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CooperativePage = () => {
  const imageUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_211007_557_AHqbPk0KPD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651843627053"

  return (
    <>
      <MetaTags title="Inclusif" description="Inclusive page" />
      <div className="rounded-lg min-h-screen h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
      </div>
    </>
  )
}

export default CooperativePage
