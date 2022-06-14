import { Link, routes } from '@redwoodjs/router'

const Header = () => {
  const logoUrl = "https://ik.imagekit.io/dttv/logo_k7opAuX3K.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652281391081"

  return (
    <div className="bg-transparent">
      <div className="flex flex-row">
        <div class="basis-1/5 my-auto"><Link to={routes.manifest()}><img className="w-36 p-1" src={logoUrl} /></Link></div>
        <div class="basis-1/5 my-auto"><Link to={routes.quiSommesNous()}>Coopérative</Link></div>
        <div class="basis-1/5 my-auto"><Link to={routes.nosActions()}>Biodéchets</Link></div>
        <div class="basis-1/5 my-auto"><Link to={routes.contact()}>Inclusion</Link></div>
        <div class="basis-1/5 my-auto"><Link to={routes.devis()}>Services</Link></div>
      </div>
      <hr/>
    </div>
  )
}

export default Header
