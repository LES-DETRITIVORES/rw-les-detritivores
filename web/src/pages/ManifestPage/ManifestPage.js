import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ManifestPage = () => {
  const logoUrl = "https://ik.imagekit.io/dttv/DETRITIVORES_-_Logo_blanc_D9gS55ZaO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655210481453"

  return (
    <>
      <MetaTags title="Manifest" description="Manifest page" />
      <a href="https://les-detritivores.co"><img className="w-72 p-6 mx-auto" src={logoUrl} /></a>

      <div className="font-sans text-white text-6xl font-bold inline-block mx-24 my-6 space-y-12 leading-tight">
        <p>
          Nous sommes <span className="bg-orange-600">LES&nbsp;DETRITIVORES</span>.
        </p>
        <p>
          La transformation des restes alimentaires est notre métier. 
          Oui, nous pouvons trier, collecter, valoriser vos <span className="bg-orange-600">biodéchets</span>... 
          pour en faire un <span className="bg-orange-600">compost</span> nutritif et local.
        </p>
        <p>
          Mais plus que ça, nous voulons prendre soin chaque jour de la <span className="bg-orange-600">vie humaine</span> et <span className="bg-orange-600">organique</span>.
          C'est pourquoi nous créons des <span className="bg-orange-600">emplois</span> proches, utiles et durables au coeur des <span className="bg-orange-600">territoires</span> urbains et ruraux.
        </p>
        <p>
        <span className="bg-orange-600">Citoyens</span>, <span className="bg-orange-600">professionnels</span>, <span className="bg-orange-600">collectivités</span>, nous pouvons tout changer ensemble. 
        </p>
        <p>
          Face à l'épuisement, régénérons la <span className="bg-orange-600">terre</span>.
          Face à l'exclusion, accompagnons vers le <span className="bg-orange-600">respect</span>.
          Face au profit, défendons des <span className="bg-orange-600">valeurs</span>.
          Face au monopole, partageons les <span className="bg-orange-600">ressources</span>.
        </p>
        <p>          
          Rejoignez notre mouvement pour des territoires <span className="bg-orange-600">organiques</span>, <span className="bg-orange-600">inclusifs</span> et <span className="bg-orange-600">coopératifs</span> !
        </p>
      </div>
    </>
  )
}

export default ManifestPage
