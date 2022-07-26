import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { IoLeaf, IoTrailSign, IoSync, IoBag, IoPeople, IoFootsteps, IoSchool, IoChatbubbles, IoHandLeft, IoWallet, IoHome } from "react-icons/io5"

const HomePage = () => {
  const organicUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_211202_223_qNNb-iKOBh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651843524959"
  const inclusiveUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_211007_725_aGTFOEFP5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651843630508"
  const cooperativeUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_211007_557_AHqbPk0KPD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651843627053"

  return (
    <>
      <MetaTags title="Accueil" description="Home page" />
      <div className="flex flex-col rounded-r-2xl overflow-hidden md:flex-row m-3 md:m-6">
        <div className="w-full p-16 md:basis-1/2 lg:basis-3/5 xl:basis-2/3 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${organicUrl})` }}>
          <div className="-rotate-6 mt-16">
            <span className="bg-green-900 font-extrabold uppercase text-3xl text-white lg:text-5xl py-1">
              <span className="p-2 inline-block mb-1 lg:mb-4">Face&nbsp;à&nbsp;leur&nbsp;épuisement,</span><br/><span className="p-2">régénérons&nbsp;les&nbsp;sols.</span>
            </span>
          </div>
        </div>
        <div className="bg-green-900 text-white basis-full p-6 md:basis-1/2 lg:basis-2/5 xl:basis-1/3">
          <p className="-rotate-1">
            <p className="mb-3 text-3xl font-semibold text-center">
              <IoLeaf className="rounded-full text-green-900 bg-white p-3 w-14 h-14 inline mr-2"/>Actions organiques
            </p>
            <p className="text-center">  
              Pionnier de la gestion des biodéchets depuis 2015, nous vous aidons à trier, collecter et valoriser tous vos restes alimentaires... pour en faire un compost nutritif et local.
            </p>
          </p>
          <hr className="my-6 rotate-1"/>
          <div className="block text-xl text-white font-bold uppercase">
            Tri des restes alimentaires
          </div>
          <p className="my-3">
            En camion, à vélos ou en apport volontaire, il y a toujours une solution pour trier vos restes alimentaires. Simple, efficace et économique car vous ne payez que ce que vous produisez.
          </p>
          <a href="/collecte" className="rounded-md inline-block p-3 font-semi-bold text-lg bg-white shadow-xl text-green-900 hover:bg-green-100 ">
            <IoTrailSign className="inline mr-2 align-middle h-6 w-6"/>
            Organiser le tri des biodéchets
          </a>
          <hr className="my-6 -rotate-1"/>
          <div className="block text-xl text-white font-bold uppercase mt-6">
            Compostage des biodéchets
          </div>
          <p className="my-3">
            En valorisant les biodéchets sur une plateforme locale de compostage, vous évitez le gaspillage d'une ressource précieuse pour la planète tout en limitant les nuisances du transport.
          </p>
          <a href="/traitement" className="rounded-md inline-block p-3 font-semi-bold text-lg bg-white shadow-xl text-green-900 hover:bg-green-100">
            <IoSync className="inline mr-2 align-middle h-6 w-6"/>
            Installer un site de compostage
          </a>
          <hr className="my-6 rotate-1"/>
          <div className="block text-xl text-white font-bold uppercase mt-6">
            Fabrication de compost
          </div>
          <p className="my-3" >
            Fini les produits chimiques, le compost 100% naturel et normé (NF U 44-051 amendements organiques) nourrit aussi bien les grandes terres agricoles, les petits potagers ou les jolies fleurs sur le balcon.
          </p>
          <a href="/compost" className="rounded-md inline-block p-3 font-semi-bold text-lg bg-white shadow-xl text-green-900 hover:bg-green-100">
            <IoBag className="inline mr-2 align-middle h-6 w-6"/>
            Acheter du compost
          </a>
        </div>
      </div>
      <div className="flex flex-col-reverse rounded-l-2xl overflow-hidden md:flex-row m-3 md:m-6">
        <div className="bg-orange-700 text-white basis-full p-6 md:basis-1/2 lg:basis-2/5 xl:basis-1/3">
          <p className="-rotate-1">
            <p className="mb-3 text-3xl font-semibold text-center">
              <IoPeople className="rounded-full text-orange-700 bg-white p-3 w-14 h-14 mr-2 inline"/>Actions inclusives
            </p>
            <p className="text-center">
              Entreprise d'insertion agrée par l'Etat, nous accompagnons des parcours professionnels accessibles, utiles et durables au coeur des territoires urbains et ruraux.
            </p>
          </p>
          <hr className="my-6 rotate-1"/>
          <div className="block text-xl text-white font-bold uppercase">
            Entreprise d'insertion
          </div>
          <p className="my-3">
            Nous recrutons en priorité des personnes éloignées de l'emploi qui bénéficient tout au long de leur parcours d'un accompagnement professionnel sur mesure.
          </p>
          <a href="/insertion" className="rounded-md inline-block p-3 font-semi-bold text-lg bg-white shadow-xl text-orange-700 hover:bg-orange-100">
            <IoFootsteps className="inline mr-2 align-middle h-6 w-6"/>
            Postuler à une offre d'emploi
          </a>
          <hr className="my-6 -rotate-1"/>
          <div className="block text-xl text-white font-bold uppercase mt-6">
            Formation professionnelle
          </div>
          <p className="my-3">
            Conducteur de camion, logisticien à vélo, technicien de plateforme, agent de compostage, etc... nos équipes développent de nombreuses compétences techniques et humaines pour la société et l'économie locale de demain.
          </p>
          <a href="/formation" className="rounded-md inline-block p-3 font-semi-bold text-lg bg-white shadow-xl text-orange-700 hover:bg-orange-100">
            <IoSchool className="inline mr-2 align-middle h-6 w-6"/>
            Recruter un futur talent
          </a>
        </div>
        <div className="basis-full p-16 md:basis-1/2 lg:basis-3/5 xl:basis-2/3 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${inclusiveUrl})` }}>
          <div className="-rotate-6 mt-24">
            <span className="bg-orange-700 font-extrabold uppercase text-3xl text-white lg:text-5xl py-1">
              <span className="p-2 inline-block mb-1 lg:mb-4">Face&nbsp;aux&nbsp;fragilités,</span><br/><span className="p-2">cultivons&nbsp;les&nbsp;relations.</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-r-2xl overflow-hidden md:flex-row m-3 md:m-6">
        <div className="w-full p-16 md:basis-1/2 lg:basis-3/5 xl:basis-2/3 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${cooperativeUrl})` }}>
          <div className="-rotate-6 mt-16">
            <span className="bg-yellow-500 font-extrabold uppercase text-3xl text-black lg:text-5xl py-1">
              <span className="p-2 inline-block mb-1 lg:mb-4">Face&nbsp;à&nbsp;la&nbsp;démesure,</span><br/><span className="p-2">partageons&nbsp;des&nbsp;valeurs.</span>
            </span>
          </div>
        </div>
        <div className="bg-yellow-500 text-black basis-full p-6 md:basis-1/2 lg:basis-2/5 xl:basis-1/3">
          <p className="-rotate-1">
            <p className="mb-3 text-3xl font-semibold text-center">
              <IoChatbubbles className="rounded-full text-yellow-500 bg-black p-3 w-14 h-14 mx-auto mr-2 inline"/>Actions coopératives
            </p>
            <p className="text-center">
              Citoyens, professionnels, collectivités, rejoignez notre mouvement pour des territoires organiques, inclusifs et coopératifs !
            </p>
          </p>
          <hr className="my-6 border-black rotate-1"/>
          <div className="block text-xl font-bold uppercase">
            Société Coopérative d'Intérêt Collectif (SCIC)
          </div>
          <p className="my-3">
            Notre projet coopératif rassemble les particuliers, les professionnels, les financeurs, les institutions, les collectivités autour d'un projet commun de transition organique, inclusive et coopérative des territoires.
          </p>
          <a href="/cooperation" className="rounded-md inline-block p-3 font-semi-bold text-lg bg-white shadow-xl text-yellow-700 hover:bg-yellow-100">
            <IoHandLeft className="inline mr-2 align-middle h-6 w-6"/>
            Participer à la vie coopérative
          </a>
          <hr className="my-6 border-black -rotate-1"/>
          <div className="block text-xl font-bold uppercase mt-6">
            Investissement responsable
          </div>
          <p className="my-3">
             Que vous soyez plutôt part sociale, compte courant d'associé ou encore titres participatifs, notre coopérative vous propose des opportunités d'investissement social, écologique et responsable adapté à vos capacités.
          </p>
          <a href="/investissement" className="rounded-md inline-block p-3 font-semi-bold text-lg  bg-white shadow-xl text-yellow-700 hover:bg-yellow-100">
            <IoWallet className="inline mr-2 align-middle h-6 w-6"/>
            Investir dans la transition
          </a>
        </div>
      </div>
    </>
  )
}

export default HomePage
