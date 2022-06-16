import { Link, routes } from '@redwoodjs/router'
import NavLink from 'src/components/NavLink'
import { MetaTags } from '@redwoodjs/web'

const ManifestPage = () => {
  const logoUrl = "https://ik.imagekit.io/dttv/DETRITIVORES_-_Logo_blanc_D9gS55ZaO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655210481453"

  return (
    <>
      <MetaTags title="Manifest" description="Manifest page" />
      <div className="font-sans text-white text-xl md:text-3xl font-bold inline-block p-6 md:p-12 space-y-12 leading-tight md:leading-tight">
        <p>
          Nous sommes <img className="w-48 lg:w-64 p-6 inline" src={logoUrl} alt="LES DETRITITVORES"/>
        </p>
        <p>Coopérative inclusive de gestion des <NavLink to="organique">biodéchets</NavLink>, nous pouvons collecter, trier et valoriser vos restes alimentaires... 
          pour en faire un <NavLink to="organique">compost</NavLink> nutritif et local.
        </p>
        <p>
          A travers la vie <NavLink to="organique">organique</NavLink>, nous voulons également prendre soin de la vie <NavLink to="inclusion">humaine</NavLink>.
          C'est pourquoi nous portons des <NavLink to="inclusif">emplois</NavLink> formateurs, utiles et durables 
          au coeur des <NavLink to="cooperatif">territoires</NavLink> urbains ou ruraux.
        </p>
        <p>
        <NavLink to="particuliers">Citoyens</NavLink>, <NavLink to="professionnels">professionnels</NavLink>, <NavLink to="collectivites">collectivités</NavLink>, nous pouvons tout changer ensemble. 
        </p>
        <p>
          Face à l'épuisement, nous régénérons les <NavLink to="organique">sols</NavLink>. 
          Face aux exclusions, nous cultivons le <NavLink to="inclusif">respect</NavLink>.
          Face à l'appropriation, nous partageons des <NavLink to="cooperatif">valeurs</NavLink>.
        </p>
        <p>          
          Rejoignez notre mouvement pour des territoires <NavLink to="organique">organiques</NavLink>, <NavLink to="inclusif">inclusifs</NavLink> et <NavLink to="cooperatif">coopératifs</NavLink> !
        </p>
      </div>
    </>
  )}

export default ManifestPage
