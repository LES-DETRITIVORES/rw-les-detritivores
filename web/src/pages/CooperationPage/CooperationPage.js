import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { IoHandLeft } from "react-icons/io5"

const CooperationPage = () => {
  const groupUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_211007_678_0j3dm7hjRI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651843629208"
  const teamUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_220516_0516_MgiSISfUR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655423311749"

  return (
    <>
      <MetaTags title="Collect" description="Collect page" />
      <h1 className="text-md md:text-lg text-green-900 font-semibold mb-6"><IoHandLeft className="inline mr-2 align-middle h-6 w-6"/>Vie coopérative > Société Coopérative d'Intérêt Collectif (SCIC)</h1>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">Tout seul on va plus vite mais ensemble on va plus loin !</h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>
              En 2019, une nouvelle page de LES DETRITIVORES a commencé à s’écrire : 
              nous avons quitté le monde associatif auquel nous étions attachés depuis notre création en 2015 et sommes devenus une SCIC.
            </p>
            <p>
              « Les Sociétés Coopératives à Intérêt Collectif ont pour objet la production ou la fourniture de biens et de services d’intérêt collectif qui présentent un caractère d’utilité sociale » Loi n°2001-624 du 17 juillet 2001. 
              Elles encouragent un meilleur partage de la Gouvernance ainsi qu’une répartition plus juste des bénéfices : au moins 57,5% des bénéfices doivent être réinjectés dans l’entreprise et les sociétaires ont le pouvoir de porter ce taux à 100%.
            </p>
            Ces objectifs principaux sont :
            <ul className="space-y-3">
              <li>
                <span className="font-bold">Mobiliser</span> les acteurs autour d’un projet commun
              </li>
              <li>
                <span className="font-bold">Valoriser</span> la coopération entre les partie-prenantes
              </li>
              <li>
                <span className="font-bold">Participer</span> au développement du Territoire
              </li>
              <li>
                <span className="font-bold">Agir</span> pour le plus grand nombre
              </li>
            </ul>
          </div>
        </div>
        <div className="my-auto basis-full md:basis-1/2">
          <img className="w-full md:w-96 md:m-auto" src={groupUrl}></img>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-6 mb-6">
        <div className="my-auto basis-full md:basis-1/2">
          <img className="w-full md:w-96 md:m-auto" src={teamUrl}></img>
        </div>
        <div className="basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">Devenez acteur de la transition.</h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>
              En tant qu’Entreprise d’Insertion et coopérative d’intérêt collectif, nous œuvrons au quotidien 
              pour que notre activité de collecte et de valorisation des biodéchets soit une réelle plus-value 
              pour notre territoire et ses acteurs. 
              Dans cet objectif, nous vous invitons à participer à la vie de notre coopérative en devenant sociétaire !
            </p>
            <p>
              Nous proposons à nos clients de s’engager en tant que sociétaire dans notre coopérative en prenant au minimum une part sociale.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CooperationPage
