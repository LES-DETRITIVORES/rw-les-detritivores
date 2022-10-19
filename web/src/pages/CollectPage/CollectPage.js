import { Link } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { IoTrailSign } from 'react-icons/io5'
import React from 'react'
import { motion } from 'framer-motion'
const CollectPage = () => {
  const rulesUrl =
    'https://ik.imagekit.io/dttv/SHOOTING/DETRI_220516_0434_qCjL95E8A.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655423310248'
  const userUrl =
    'https://ik.imagekit.io/dttv/SHOOTING/DETRI_211202_506_ZtSlv6ubQ.jpg?updatedAt=1658958887856&tr=w-1646,h-1700,fo-custom,cm-extract'

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <MetaTags
          title="Tri des restes alimentaires"
          description="En camion, à vélos ou en apport volontaire, il y a toujours une solution pour trier vos restes alimentaires. Simple, efficace et économique car vous ne payez que ce que vous produisez."
        />
        <div className="font-light inline-flex space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
          <Link to="/" className="underline">
            Retour à l'acceuil
          </Link>
        </div>
        <h1 className="text-md md:text-lg text-green-900 font-semibold mt-3 mb-6">
          <div className="flex items-center">
            <IoTrailSign className="inline mr-2 align-middle h-6 w-6" />
            Tri des restes alimentaires
          </div>
        </h1>
        <div className="flex flex-col gap-6 mb-8 md:flex-row md:gap-24 md:mb-24">
          <div className="basis-full md:basis-1/2">
            <h2 className="text-xl md:text-3xl text-black font-bold">
              Plus besoin de jeter ses déchets alimentaires.
            </h2>
            <div className="mt-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
              <p>
                Bien que nos habitudes de consommation évoluent, le gaspillage
                alimentaire reste très présent dans notre quotidien. En France,
                ce sont 10 millions de tonnes de nourriture consommables qui
                sont gaspillés chaque année !
              </p>
              <p>
                Vous avez encore des doutes sur ce qu’il est possible de traiter
                comme biodéchets ? Chez les DETRITIVORES, c’est simple :{' '}
                <span className="font-bold">
                  nous collectons et traitons tous les matières organiques
                  animales et végétales.
                </span>
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
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
          <div
            className="basis-full rounded-2xl md:h-auto md:basis-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${rulesUrl})` }}
          >
            <div className="h-64 md:h-full"></div>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-6 mb-8 md:flex-row md:gap-24 md:mb-24">
          <div
            className="basis-full rounded-2xl md:basis-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${userUrl})` }}
          >
            <div className="h-64 md:h-full"></div>
          </div>
          <div className="basis-full md:basis-1/2">
            <h2 className="text-xl md:text-3xl text-black font-bold">
              Respecter la loi n'a jamais été aussi simple.
            </h2>
            <div className="mt-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
              <p>
                Au 1er janvier 2024, la loi sur la Transition Ecologique pour la
                Croissance Verte s’appliquera à l’ensemble du territoire
                national du professionnel au particulier. 2024, c’est demain
                finalement. Heureusement, chez Les DETRITIVORES on a déjà la
                solution : n’attendez plus et rejoignez le mouvement !
              </p>
              <ol className="space-y-3">
                <li>
                  <h3 className="font-bold block">Etude des besoins :</h3>
                  <p>
                    Ensemble, évaluons les volumes de biodéchets générés par
                    votre entité et définissons un rythme de collecte. Installés
                    par nos équipes, nos contenants s’adaptent à vos besoins et
                    votre espace.
                  </p>
                </li>
                <li>
                  <h3 className="font-bold block">Collectes et nettoyage :</h3>
                  <p>
                    La collecte s’adapte à votre activité. A chaque passage,
                    notre équipe de Collectivores échangera votre bac plein
                    contre un bac propre et désinfecté : simple et efficace !
                  </p>
                </li>
                <li>
                  <h3 className="font-bold block">Suivi réglementaire :</h3>
                  <p>
                    La pesée systématique des restes alimentaires, lors des
                    collectes et sur notre plateforme de compostage, vous permet
                    d’obtenir des données chiffrées des volumes collectées.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default CollectPage
