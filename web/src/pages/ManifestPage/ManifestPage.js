import { Link, routes } from '@redwoodjs/router'
import NavLink from 'src/components/NavLink'
import { MetaTags } from '@redwoodjs/web'

const ManifestPage = () => {
  const logoUrl = "https://ik.imagekit.io/dttv/DETRITIVORES_-_Logo_blanc_D9gS55ZaO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655210481453"

  return (
    <>
      <MetaTags title="Manifest" description="Manifest page" />
      <div className="font-sans text-white text-3xl md:text-6xl font-bold inline-block mx-12 md:mx-24 my-6 space-y-12 leading-tight md:leading-tight">
        <p>
          Nous sommes <img className="w-72 p-6 inline" src={logoUrl} alt="LES DETRITITVORES"/>.
        </p>
        <p>Coopérative inclusive de gestion des <NavLink to={routes.accueil()}>biodéchets</NavLink>, nous pouvons collecter, trier et valoriser vos restes alimentaires... 
          pour en faire un <NavLink to="compost">compost</NavLink> nutritif et local.
        </p>
        <p>
          A travers la <NavLink>vie organique</NavLink>, nous voulons également prendre soin de la <NavLink>vie humaine</NavLink>.
          C'est pourquoi nous portons des <NavLink>emplois</NavLink> formateurs, utiles et durables 
          au coeur des <NavLink>territoires</NavLink> urbains ou ruraux.
        </p>
        <p>
        <NavLink>Citoyens</NavLink>, <NavLink>professionnels</NavLink>, <NavLink>collectivités</NavLink>, nous pouvons tout changer ensemble. 
        </p>
        <p>
          Face à l'épuisement, régénérons les <NavLink>sols</NavLink>.
          Face aux exclusions, accompagnons vers le <NavLink>respect</NavLink>.
          Face aux profits, cultivons des <NavLink>valeurs</NavLink>.
          Face aux monopoles, partageons nos <NavLink>ressources</NavLink>.
        </p>
        <p>          
          Rejoignez notre mouvement pour des territoires <NavLink>organiques</NavLink>, <NavLink>inclusifs</NavLink> et <NavLink>coopératifs</NavLink> !
        </p>
      </div>
    </>
  )
}

export default ManifestPage
