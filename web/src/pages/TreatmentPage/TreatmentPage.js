import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { IoSync } from "react-icons/io5"

const TreatmentPage = () => {
  const truckUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_220516_0817_rsp9hgyd7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655423314890"
  const animationUrl = "https://ik.imagekit.io/dttv/P1940170_mJFrfb3S3E.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1658993495660"
  return (
    <>
      <MetaTags title="Traitement" description="Compostage des biodéchets" />
      <h1 className="text-md md:text-lg text-green-900 font-semibold mb-6"><IoSync className="inline mr-2 align-middle h-6 w-6"/>Services organiques > Compostage des biodéchets</h1>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">Le compostage, c'est simple et naturel !</h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>
              Les biodéchets sont compostés à proximité de leurs lieux de collecte, afin de limiter la pollution liée aux transports. 
              Une fois acheminés sur nos plateformes de compostage, ils sont bichonnés et choyés par nos équipes. 
              Afin de donner un produit fini de qualité, compatible avec l’agriculture biologique et normé NF U 44-051, le processus dure entre 6 et 8 mois.
            </p>
            <p>
              Dans le cas des biodéchets avec des indésirables (emballages), ils sont orientés vers des filières de valorisation énergétique par méthanisation.
              Conformément aux recommandations nationales, nous privilégierons la valorisation matière plus vertueuse que la valorisation énergétique. 
            </p>
          </div>
        </div>
        <div className="my-auto basis-full md:basis-1/2">
          <img className="w-full md:w-96 md:m-auto" src={truckUrl}></img>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse gap-6 mb-6">
        <div className="basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">Le compostage, c'est facile à comprendre !</h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>
              Menées par LES DETRITIVORES et ses partenaires, nos sensibilisations ont pour objectif de vous inclure dans notre démarche environnementale. 
              Elles encouragent aussi à la construction d’une Ville organique, soucieuse de guider ses citoyens dans leur engagement en faveur de l’environnement 
              et de favoriser le retour à la terre de l’ensemble des biodéchets. 
            </p>
            <p>
              A travers ces actions de sensibilisation à la réduction du gaspillage alimentaire, 
              notre équipe d'Animavores vous fait découvrir notre fonctionnement 
              ainsi que la façon dont LES DETRITIVORES collectent et valorisent vos restes alimentaires en les transformant en compost.
            </p>
          </div>
        </div>
        <div className="my-auto basis-full md:basis-1/2">
          <img className="w-full md:w-96 md:m-auto" src={animationUrl}></img>
        </div>
      </div>
    </>
  )
}

export default TreatmentPage
