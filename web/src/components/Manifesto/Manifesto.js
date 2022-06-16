import { Link } from '@redwoodjs/router'

const NavLink = (props) => {
  return (
    <span className="bg-orange-600 hover:underline hover:cursor-pointer rotate-3">
      <Link to={props.to}>{props.children}</Link>
    </span>
  )
}

const Manifesto = () => {
  const logoUrl = "https://ik.imagekit.io/dttv/DETRITIVORES_-_Logo_blanc_D9gS55ZaO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655210481453"

  return (
    <>
      <div className="font-sans text-white font-semibold inline-block p-6 space-y-6 leading-tight md:leading-tight">
        <p>
          Nous sommes<a href="/"><img className="w-36 lg:w-48 ml-3 inline" src={logoUrl} alt="LES DETRITITVORES"/></a>
        </p>
        <p>Coopérative inclusive de gestion des <NavLink to="organique">biodéchets</NavLink>, nous collectons, trions et valorisons vos restes alimentaires... 
          pour en faire un <NavLink to="organique">compost</NavLink> nutritif et local.
        </p>
        <p>
          A travers la vie <NavLink to="organique">organique</NavLink>, nous aimons surtout prendre soin de la vie <NavLink to="inclusif">humaine</NavLink>.
          C'est pourquoi nous portons des <NavLink to="inclusif">emplois</NavLink> accessibles, utiles et durables 
          au coeur des <NavLink to="cooperatif">territoires</NavLink> urbains ou ruraux.
        </p>
        <p>
          Face à l'épuisement, nous régénérons les <NavLink to="organique">sols</NavLink>. 
          Face aux exclusions, nous cultivons le <NavLink to="inclusif">respect</NavLink>.
          Face à l'appropriation, nous partageons des <NavLink to="cooperatif">valeurs</NavLink>.
        </p>
        <p>          
        <NavLink to="particuliers">Citoyens</NavLink>, <NavLink to="professionnels">professionnels</NavLink>, <NavLink to="collectivites">collectivités</NavLink>, 
          rejoignez notre mouvement pour des territoires <NavLink to="organique">organiques</NavLink>, <NavLink to="inclusif">inclusifs</NavLink> et <NavLink to="cooperatif">coopératifs</NavLink>&nbsp;!
        </p>
      </div>
    </>
  )
}

export default Manifesto
