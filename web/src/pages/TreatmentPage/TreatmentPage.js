import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { IoSync } from "react-icons/io5"

const TreatmentPage = () => {
  const truckUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_220516_0817_rsp9hgyd7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655423314890"
  const animationUrl = "https://ik.imagekit.io/dttv/P1940170_mJFrfb3S3E.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1658993495660"
  
  return (
    <>
      <MetaTags title="Compostage des biodéchets" description="En valorisant les biodéchets sur une plateforme locale de compostage, vous évitez le gaspillage d'une ressource précieuse pour la planète tout en limitant les nuisances du transport." />
      <div className="font-light">&lt; <a href="/" className="underline">retour accueil</a></div>
      <h1 className="text-md md:text-lg text-green-900 font-semibold mt-3 mb-6">
        <div>
        <IoSync className="inline mr-2 align-middle h-6 w-6"/>Compostage des biodéchets
        </div>
      </h1>
      <div className="flex flex-col gap-6 mb-8 md:flex-row md:gap-24 md:mb-24">
        <div className="basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">Simplement naturel.</h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>
              Les biodéchets sont compostés à proximité de leurs lieux de collecte, afin de limiter la pollution liée aux transports. 
              Une fois acheminés sur nos <span className="font-bold">plateformes de compostage</span>, ils sont bichonnés et choyés par nos équipes. 
              Afin de donner un produit fini de qualité, <span className="font-bold">compatible avec l’agriculture biologique</span> et normé NF U 44-051, le processus dure entre 6 et 8 mois.
            </p>
            <p>
              Dans le cas des biodéchets avec des indésirables (emballages), ils sont orientés vers des filières de valorisation énergétique par méthanisation.
              Conformément aux <span className="font-bold">recommandations nationales</span>, nous privilégierons toujours la valorisation matière plus vertueuse que la valorisation énergétique. 
            </p>
          </div>
        </div>
        <div className="basis-full rounded-2xl md:h-auto md:basis-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${truckUrl})` }}>
          <div className="h-64 md:h-full"></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse gap-6 mb-6">
        <div className="basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">Etonnamment évident.</h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>
              A travers des <span className="font-bold">ateliers ou des visites guidées</span>, 
              nos équipes vont font découvrir les coulisses du tri et du compostage des biodéchets.
            </p>
            <p>
              Nos sensibilisations ont pour objectif de vous inclure dans notre <span className="font-bold">démarche environnementale</span>. 
              Elles encouragent aussi à la construction d’une ville organique, soucieuse de guider ses citoyens dans leur engagement en faveur de l’environnement 
              et de favoriser le retour à la terre de l’ensemble des biodéchets. 
            </p>
          </div>
        </div>
        <div className="basis-full rounded-2xl md:h-auto md:basis-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${animationUrl})` }}>
          <div className="h-64 md:h-full"></div>
        </div>
      </div>
    </>
  )
}

export default TreatmentPage
