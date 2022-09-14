import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { IoTrailSign } from "react-icons/io5"

const CollectPage = () => {
  //const rulesUrl = "https://ik.imagekit.io/dttv/CONSIGNES_TRI_BIODECHETS_A4_OhrCcMbK1.png?updatedAt=1658956423391&tr=w-563,h-632,fo-custom,cm-extract"
  const rulesUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_220516_0434_qCjL95E8A.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655423310248"
  const userUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_211202_506_ZtSlv6ubQ.jpg?updatedAt=1658958887856&tr=w-1646,h-1700,fo-custom,cm-extract"
  const logisticUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_211007_236_mMiLZ5zy1r.jpg?updatedAt=1658961373505&tr=w-1654,h-1958,fo-custom,cm-extract"

  return (
    <>
      <MetaTags title="Collect" description="Collect page" />
      <div className="font-light">&lt; <a href="/" className="underline">retour accueil</a></div>
      <h1 className="text-md md:text-lg text-green-900 font-semibold mt-3 mb-6">
        <div>
          <IoTrailSign className="inline mr-2 align-middle h-6 w-6"/>Tri des restes alimentaires
        </div>
      </h1>
      <div className="flex flex-col md:flex-row gap-16 mb-16">
        <div className="basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">Ne jetez plus vos déchets alimentaires&nbsp;:<br/>ils se valorisent localement.</h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>
              Bien que nos habitudes de consommation évoluent, le gaspillage alimentaire reste très présent dans notre quotidien.
              En France, ce sont 10 millions de tonnes de nourriture consommables qui sont gaspillés chaque année !
            </p>
            <p>
              Vous avez encore des doutes sur ce qu’il est possible de traiter comme biodéchets ? Chez les DETRITIVORES, c’est simple : <span className="font-bold">nous collectons et traitons tous les matières organiques animales et végétales.</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold">Compostables :</h3>
                <ul className="list-disc list-inside">
                  <li>Aliments crus ou cuits</li>
                  <li>Fruits de mer</li>
                  <li>Dessert</li>
                  <li>Fromage</li>
                  <li>Poisson (dont arêtes)</li>
                  <li>Coquillages et crustacés</li>
                  <li>Viande (dont os)</li>
                  <li>Féculents</li>
                  <li>Coquilles d’œuf</li>
                  <li>Pain</li>
                  <li>Fruits (dont agrumes et bananes)</li>
                  <li>Légumes</li>
                  <li>Marc de café</li>
                  <li>Emballages "OK COMPOST"</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold">Non compostables :</h3>
                <ul className="list-disc list-inside">
                  <li>Emballages non compostables</li>
                  <li>Pots de yaourt</li>
                  <li>Opercules</li>
                  <li>Serviettes</li> 
                  <li>Canettes</li> 
                  <li>Bouchons</li> 
                  <li>Plastique</li> 
                  <li>Déchets verts</li> 
                  <li>Bois</li>
                  <li>Journaux</li>
                  <li>Huile de friture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-full p-8 rounded-2xl md:basis-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${rulesUrl})` }}>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-16 mb-16">
        <div className="basis-full p-8 rounded-2xl md:basis-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${userUrl})` }}>
        </div>
        <div className="basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">Respecter la loi n'a jamais été aussi facile&nbsp;:<br/> nous nous occupons de tout.</h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>
              Au 1er janvier 2024, la loi sur la Transition Ecologique pour la Croissance Verte s’appliquera à l’ensemble du territoire national du professionnel au particulier.
              2024, c’est demain finalement. Heureusement, chez Les DETRITIVORES on a déjà la solution : n’attendez plus et rejoignez le mouvement !
            </p>
            <ol className="space-y-3">
              <li>
                <h3 className="font-bold block">Etude des besoins :</h3>
                <p>Ensemble, évaluons les volumes de biodéchets générés par votre entité et définissons un rythme de collecte. Installés par nos équipes, nos contenants s’adaptent à vos besoins et votre espace.</p>
              </li>
              <li>
                <h3 className="font-bold block">Collectes et nettoyage :</h3>
                <p>La collecte s’adapte à votre activité. A chaque passage, notre équipe de Collectivores échangera votre bac plein contre un bac propre et désinfecté : simple et efficace !</p>
              </li>
              <li>
                <h3 className="font-bold block">Suivi réglementaire :</h3>
                <p>La pesée systématique des restes alimentaires, lors des collectes et sur notre plateforme de compostage, vous permet d’obtenir des données chiffrées des volumes collectées.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-16 mb-16">
        <div className="space-y-3 basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">La logistique des biodéchets&nbsp;:<br/> notre expertise depuis 2015.</h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>
              Ils s’appellent Maud, Alien, Christophe, Ziarmal, Salih, Izak, Zine-Eddine et ils parcourent les rues de Bordeaux et ses alentours en camions, à vélos ou grâce à l'installation de Bornes d'Apport Volontaire, pour collecter l'ensemble de vos restes alimentaires !
            </p>
            <ul className="space-y-3 my-auto">
              <li>
                <h3 className="font-bold block">Camions :</h3> 
                <p>Utilisés pour les collectes en périphérie, nos camions roulent au biogaz afin de limiter leur impact environnemental.</p>
              </li>
              <li>
                <h3 className="font-bold block">Vélos-cargos :</h3> 
                <p>Rapides et légers pour l’environnement, leur utilisation permet de fluidifier et de faciliter le retrait des restes alimentaires de façon régulière au cœur des centres piétons. Nos vélos participent aussi à la diminution de la présence de nos camions de collecte en centre-ville.</p>
              </li>
              <li>
                <h3 className="font-bold block">Bornes d’Apport Volontaire :</h3>
                <p>Déployées au sein de quartiers de la ville, la collecte mise en place permet de fluidifier le retrait de vos restes alimentaires de façon régulière. Actuellement, vous pouvez retrouver des Bornes d’Apport Volontaire à Eysines, Bouliac et Mérignac.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-full p-8 rounded-2xl md:basis-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${logisticUrl})` }}>
        </div>
      </div>
    </>
  )
}

export default CollectPage
