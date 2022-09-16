import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { IoSchool } from "react-icons/io5"

const TrainingPage = () => {
  const professionalUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_220516_0555_0ALCg4wdb.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655423311951"
  const logisticUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_211202_795_WGpL5BuFeI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651843538856"

  return (
    <>
      <MetaTags title="Collect" description="Collect page" />
      <div className="font-light">&lt; <a href="/" className="underline">retour accueil</a></div>
      <h1 className="text-md md:text-lg text-green-900 font-semibold mt-3 mb-6">
        <div>
          <IoSchool className="inline mr-2 align-middle h-6 w-6"/>Formation professionnelle
        </div>
      </h1>

      <div className="flex flex-col gap-6 mb-8 md:flex-row md:gap-24 md:mb-24">
        <div className="basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">Exigeant, comme vous.</h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>
              LES DETRITIVORES investissent fortement dans une <span className="font-bold">politique de formation, prévention, hygiène et sécurité</span> afin de valoriser les déchets 
              en toute sécurité et de maintenir la propreté conformément à la réglementation en vigueur. 
              Travaillant avec des usagers très exigeants telles que les institutions, les grand groupes de restauration, 
              les hôtels, nous garantissons le <span className="font-bold">respect de la réglementation</span> : installations respectant la 
              Réglementation Sanitaire Départementale SPAn C3, activités de transport de déchets non dangereux déclarés en préfecture.
            </p>
          </div>
        </div>
        <div className="basis-full rounded-2xl md:h-auto md:basis-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${professionalUrl})` }}>
          <div className="h-64 md:h-full"></div>
        </div>
      </div>
      <div className="flex flex-col gap-6 mb-8 md:flex-row md:gap-24 md:mb-24">
        <div className="basis-full rounded-2xl md:basis-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${logisticUrl})` }}>
          <div className="h-64 md:h-full"></div>
        </div>
        <div className="space-y-3 basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">Vous êtes entre de bonnes roues.</h2>
          <div className="mt-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>
              Pour collecter l'ensemble de vos restes alimentaires, nos équipes sont formés aux différents outils de la logistique moderne : camions biogaz, vélos-cargos électriques, points d'apport volontaire, gestion d'un espace logistique de proximité.
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
                <p>Déployées au sein de quartiers de la ville, la collecte mise en place permet de fluidifier le retrait de vos restes alimentaires de façon régulière. Actuellement, vous pouvez retrouver des Points d’Apport Volontaire à Eysines, Bouliac et Mérignac.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default TrainingPage
