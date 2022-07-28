import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { IoTrailSign } from "react-icons/io5"

const CompostPage = () => {
  const rulesUrl = "https://ik.imagekit.io/dttv/CONSIGNES_TRI_BIODECHETS_A4_OhrCcMbK1.png?updatedAt=1658956423391&tr=w-563,h-632,fo-custom,cm-extract"
  const userUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_211202_506_ZtSlv6ubQ.jpg?updatedAt=1658958887856&tr=w-1646,h-1700,fo-custom,cm-extract"
  const logisticUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_211007_236_mMiLZ5zy1r.jpg?updatedAt=1658961373505&tr=w-1654,h-1958,fo-custom,cm-extract"

  return (
    <>
      <MetaTags title="Collect" description="Collect page" />
      <h1 className="text-md md:text-lg text-green-900 font-semibold mb-6"><IoTrailSign className="inline mr-2 align-middle h-6 w-6"/>Services organiques > Vente de compost</h1>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">Plus besoin d'abandonner les déchets alimentaires : nous les valorisons localement.</h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>
              Bien que nos habitudes de consommation évoluent, le gaspillage alimentaire reste très présent dans notre quotidien.
              En France, ce sont 10 millions de tonnes de nourriture consommables qui sont gaspillés chaque année !
            </p>
            <p>
              Vous avez encore des doutes sur ce qu’il est possible de traiter comme biodéchets ? Chez les DETRITIVORES, c’est simple : <span className="font-bold">nous collectons et traitons tous les matières organiques animales et végétales.</span>
            </p>
            <ul className="space-y-3">
              <li>
                <span className="font-bold">Compostables :</span> Aliments crus ou cuits ~ Fruits de mer ~ Dessert ~ Fromage ~ Poisson (dont arêtes) ~ Coquillages et crustacés ~ Viande (dont os) ~ Féculents ~ Coquilles d’œuf ~ Pain ~ Fruits (dont agrumes et bananes) ~ Légumes ~ Marc de café
              </li>
              <li>
                <span className="font-bold">Non compostables :</span> Emballages ~ Pots de yaourt ~ Opercules ~ Serviettes ~ Canettes ~ Bouchons ~ Plastique ~ Déchets verts ~ Bois ~ Journaux ~ Huile de friture
              </li>
            </ul>
          </div>
        </div>
        <div className="my-auto basis-full md:basis-1/2">
          <img className="w-full md:w-96 md:m-auto" src={rulesUrl}></img>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-6 mb-6">
        <div className="my-auto basis-full md:basis-1/2">
          <img className="w-full md:w-96 md:m-auto" src={userUrl}></img>
        </div>
        <div className="basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">Respecter la loi n'a jamais été aussi facile : nous nous occupons de tout.</h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>
              Au 1er janvier 2024, la loi sur la Transition Ecologique pour la Croissance Verte s’appliquera à l’ensemble du territoire national du professionnel au particulier.
              2024, c’est demain finalement. Heureusement, chez Les DETRITIVORES on a déjà la solution : n’attendez plus et rejoignez le mouvement !
            </p>
            <ol className="space-y-3">
              <li>
                <span className="font-bold">Etude des besoins :</span> ensemble, évaluons les volumes de biodéchets générés par votre entité et définissons un rythme de collecte. Installés par nos équipes, nos contenants s’adaptent à vos besoins et votre espace.
              </li>
              <li>
                <span className="font-bold">Collectes et nettoyage :</span> la collecte s’adapte à votre activité. A chaque passage, notre équipe de Collectivores échangera votre bac plein contre un bac propre et désinfecté : simple et efficace !
              </li>
              <li>
                <span className="font-bold">Suivi réglementaire :</span> la pesée systématique des restes alimentaires, lors des collectes et sur notre plateforme de compostage, vous permet d’obtenir des données chiffrées des volumes collectées.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="space-y-3 basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">La logistique des biodéchets : notre expertise depuis 2015.</h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>
              Ils s’appellent Maud, Alien, Christophe, Ziarmal, Salih, Izak, Zine-Eddine et ils parcourent les rues de Bordeaux et ses alentours en camions, à vélos ou grâce à l'installation de Bornes d'Apport Volontaire, pour collecter l'ensemble de vos restes alimentaires !
            </p>
            <ul className="space-y-3 my-auto">
              <li><span className="font-bold">Camions :</span> utilisés pour les collectes en périphérie, nos camions roulent au biogaz afin de limiter leur impact environnemental.</li>
              <li><span className="font-bold">Vélos-cargos :</span> rapides et légers pour l’environnement, leur utilisation permet de fluidifier et de faciliter le retrait des restes alimentaires de façon régulière au cœur des centres piétons. Nos vélos participent aussi à la diminution de la présence de nos camions de collecte en centre-ville.</li>
              <li><span className="font-bold">Bornes d’Apport Volontaire :</span> déployées au sein de quartiers de la ville, la collecte mise en place permet de fluidifier le retrait de vos restes alimentaires de façon régulière. Actuellement, vous pouvez retrouver des Bornes d’Apport Volontaire à Eysines, Bouliac et Mérignac.</li>
            </ul>
          </div>
        </div>
        <div className="my-auto basis-full md:basis-1/2">
          <img className="w-full md:w-96 md:m-auto" src={logisticUrl}></img>
        </div>
      </div>
    </>
  )
}

export default CompostPage
