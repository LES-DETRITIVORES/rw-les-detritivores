import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { IoNewspaper } from "react-icons/io5"

const PressPage = () => {
  return (
    <>
      <MetaTags title="Espace presse" description="Espace presse" />
      <div className="font-light">&lt; <Link to="/" className="underline">retour accueil</Link></div>
      <h1 className="text-md md:text-lg text-green-900 font-semibold mt-3 mb-6">
        <div>
          <IoNewspaper className="inline mr-2 align-middle h-6 w-6"/>Espace presse
        </div>
      </h1>
      <p>
        Pour toutes demandes concernant la presse, merci d'écrire à notre service de communication : <a href="mailto:communication@actes-atlantique.fr" className="underline">communication@actes-atlantique.fr</a>
      </p>
    </>
  )
}

export default PressPage
