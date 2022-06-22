import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  const organicUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_211202_223_qNNb-iKOBh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651843524959"
  const inclusiveUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_211007_725_aGTFOEFP5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651843630508"
  const cooperativeUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_211007_557_AHqbPk0KPD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651843627053"

  return (
    <>
      <MetaTags title="Accueil" description="Home page" />
      <div className="flex flex-col rounded-r-xl overflow-hidden md:flex-row m-3 md:m-6">
        <div className="w-full p-16 md:basis-1/2 lg:basis-3/5 xl:basis-2/3 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${organicUrl})` }}>
          <div className="-rotate-6 mt-16">
            <span className="bg-green-900 font-extrabold uppercase text-3xl text-white lg:text-5xl">
              Face à l'épuisement,<br/>régénérons les sols.
            </span>
          </div>
        </div>
        <div className="bg-green-900 text-white basis-full p-6 md:basis-1/2 lg:basis-2/5 xl:basis-1/3">
          <p className="text-center font-semibold italic">
          Expert de la gestion des biodéchets, nous vous aidons à trier, collecter et valoriser tous vos restes alimentaires... pour en faire un compost nutritif et local.
          </p>
          <hr className="my-6"/>
          <div className="mb-3 block text-xl text-white font-extrabold uppercase">
            Collecte des restes alimentaires
          </div>
          <p className="mb-3">
            En camion ou à vélos, nos équipes passent régulièrement collecter vos restes alimentaires. Simple, efficace et économique car vous ne payez que ce que vous produisez.
          </p>
          <a href="/collecte" className="rounded-sm inline-block p-3 mt-3 font-semi-bold border-solid border-2 border-white hover:bg-white hover:text-green-900">
            Adhérer à la collecte
          </a>

          <div className="my-3 block text-xl text-white font-extrabold uppercase mt-12">
            Traitement local des biodéchets
          </div>
          <p>
            En traitant les biodéchets sur nos plateformes locales de compostage, nous évitons le gaspillage d'une ressource précieuse pour la planète.
          </p>
          <a href="/traitement" className="rounded-sm inline-block p-3 mt-3 font-semi-bold border-solid border-2 border-white hover:bg-white hover:text-green-900">
            Découvrir nos plateformes
          </a>

          <div className="my-3 block text-xl text-white font-extrabold uppercase mt-12">
            Vente de compost naturel
          </div>
          <p>
            Fini les produits chimiques, notre compost 100% naturel et normé (NF U 44-051 amendements organiques) nourrit aussi bien les grandes terres agricoles, les petits potagers ou les jolies fleurs sur le balcon.
          </p>
          <a href="/compost" className="rounded-sm inline-block p-3 mt-3 font-semi-bold border-solid border-2 border-white hover:bg-white hover:text-green-900">
            Acheter du compost
          </a>
        </div>
      </div>
      <div className="flex flex-col-reverse rounded-l-xl overflow-hidden md:flex-row m-3 md:m-6">
        <div className="bg-orange-600 text-white basis-full p-6 md:basis-1/2 lg:basis-2/5 xl:basis-1/3">
          <p className="text-justify">
            A travers la vie organique, nous aimons surtout prendre soin de la vie humaine. C'est pourquoi nous portons des emplois accessibles, utiles et durables au coeur des territoires urbains ou ruraux.
          </p>
          <a href="/insertion" className="my-3 block text-xl text-white font-extrabold underline hover:cursor-pointer">
            Entreprise d'insertion
          </a>
          <p>
            Nous recrutons exclusivement des personnes éloignées de l'emploi. Nos salariés bénéficient d’un accompagnement professionnel individuel et/ou collectif.
          </p>
          <a href="/equipe" className="my-3 block text-xl text-white font-extrabold underline hover:cursor-pointer">
            Nos talents
          </a>
          <p>
            Collectivores, cyclovores, compostivores, bacivores, fraternivores, etc... Découvrez nos différents rôles utiles, accessibles et originaux.
          </p>
          <a href="/recrutement" className="my-3 block text-xl text-white font-extrabold underline hover:cursor-pointer">
            Recrutement
          </a>
          <p>
            Envie de nous rejoindre ? Consultez nos offres d'emplois, de stage ou de formation en cours.
          </p>
        </div>
        <div className="basis-full p-16 md:basis-1/2 lg:basis-3/5 xl:basis-2/3 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${inclusiveUrl})` }}>
          <div className="-rotate-6 mt-16">
            <span className="bg-orange-600 font-extrabold uppercase text-3xl text-white lg:text-5xl">
            Face aux fragilités,<br/>cultivons le respect.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-r-xl overflow-hidden md:flex-row m-3 md:m-6">
        <div className="w-full p-16 md:basis-1/2 lg:basis-3/5 xl:basis-2/3 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${cooperativeUrl})` }}>
          <div className="-rotate-6 mt-16">
            <span className="bg-yellow-500 font-extrabold uppercase text-3xl text-black lg:text-5xl">
              Face à l'appropriation,<br/>partageons des valeurs.
            </span>
          </div>
        </div>
        <div className="bg-yellow-500 text-black basis-full p-6 md:basis-1/2 lg:basis-2/5 xl:basis-1/3">
          <p className="text-justify">
            Tous engagés sur le territoire vers la construction d’une économie locale, durable et inclusive, nous sommes rassemblés au sein d'une Société Coopérative d'Intérêt Collectif (SCIC).
          </p>
          <a href="/societaires" className="my-3 block text-xl font-extrabold underline hover:cursor-pointer">
            Projet coopératif
          </a>
          <p>
            Notre projet coopératif vise à rassembler toutes les parties prenantes de la gestion des biodéchets autour d'une même ambition organique, inclusive et coopérative.
          </p>
          <a href="/traitement" className="my-3 block text-xl font-extrabold underline hover:cursor-pointer">
            Sociétaires
          </a>
          <p>
            Pour que la collecte et la valorisation des biodéchets génère une réelle plus-value sociale et économique pour les territoire et ses acteurs, nous vous invitons à participer à la vie de notre coopérative en devenant sociétaire.
          </p>
          <a href="/compost" className="my-3 block text-xl font-extrabold underline hover:cursor-pointer">
            Titres participatifs
          </a>
          <p>
             Les titres participatifs LES DETRITIVORES permettent de renforcer l'indépendance financière de la coopérative au service de la transition organique, inclusive et coopérative de nos territoires.
          </p>
        </div>
      </div>
    </>
  )
}

export default HomePage
