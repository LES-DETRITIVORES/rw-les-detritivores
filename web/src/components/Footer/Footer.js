import { Link, routes } from '@redwoodjs/router'

const Footer = () => {
  return (
    <div className="bg-transparent">
    <div className="flex flex-row m-6">
      <div class="basis-1/5 my-auto"><Link to={routes.quiSommesNous()}>Coopérative</Link></div>
      <div class="basis-1/5 my-auto"><Link to={routes.nosActions()}>Biodéchets</Link></div>
      <div class="basis-1/5 my-auto"><Link to={routes.contact()}>Inclusion</Link></div>
      <div class="basis-1/5 my-auto"><Link to={routes.devis()}>Services</Link></div>
    </div>
    <hr/>
  </div>
  )
}

export default Footer
