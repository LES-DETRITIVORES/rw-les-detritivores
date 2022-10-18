import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { IoBag } from "react-icons/io5"
import { motion } from "framer-motion"
const CompostPage = () => {
  const videoUrl = "https://www.youtube.com/embed/_X-pd2E-AxA"
  //const compostUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_220516_0774_SvSc3HNGiJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655423313602"
  const compostUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_220516_0764_dhumnS1F5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655423313558"

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        exit={{ opacity: 0, y: 20 }}
      >

      <MetaTags title="Vente de compost" description="Fini les produits chimiques, le compost 100% naturel et normé (NF U 44-051 amendements organiques) nourrit aussi bien les grandes terres agricoles, les petits potagers ou les jolies fleurs sur le balcon." />
      <div className="font-light">&lt; <Link to="/" className="underline">retour accueil</Link></div>
      <h1 className="text-md md:text-lg text-green-900 font-semibold mt-3 mb-6">
        <div>
          <IoBag className="inline mr-2 align-middle h-6 w-6"/>Vente de compost
        </div>
      </h1>
      <div className="flex flex-col gap-6 mb-8 md:flex-row md:gap-24 md:mb-24">
        <div className="basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">Un compost solidaire et coopératif.</h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>
              L’ensemble du compost est redistribué sur le territoire auprès de nos agriculteurs et de nos partenaires.
              Il est aussi conditionné pour des particuliers dans des formats de 1 à 15 kilos et en gros volumes pour les projets plus conséquents.
            </p>
            <p>
              En achetant notre compost, vous contribuez directement à la création d'emplois locaux solidaires,
              encouragez le développement de l'économie circulaire
              et concrétisez votre engagement en faveur de la sauvegarde de notre belle planète.
            </p>
          </div>
        </div>
        <div className="basis-full md:basis-1/2">
          <iframe className="h-64 w-full rounded-2xl md:h-full" src={videoUrl} title="Maître Compost" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-6 mb-8 md:flex-row md:gap-24 md:mb-24">
        <div className="basis-full rounded-2xl md:h-auto md:basis-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${compostUrl})` }}>
          <div className="h-64 md:h-full"></div>
        </div>
        <div className="basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">Pour tous, ici et maintenant.</h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>
              Le compost participe à la végétalisation de notre territoire et l’épanouissement de vos plantations en <span className="font-bold">fertilisant les sols</span> et en <span className="font-bold">structurant la terre</span>.
            </p>
            <p>
              Il s’utilise pour :
            </p>
            <ul className="list-disc list-outside space-y-2 ml-6">
              <li>
                <span className="font-bold">Rempoter vos plantes</span>
                <p className="block">Mélangez votre compost à du terreau en respectant les quantités suivantes (2/3 de terreau et 1/3 de compost)</p>
              </li>

              <li className="font-bold">Nourrir votre jardin</li>
              <p className="block">Ajoutez 2 à 3 centimètres de compost directement sur la surface plantée.</p>
              <li className="font-bold">Cultiver en agriculture biologique</li>
              <p className="block">Rythmée par les saisons, l’utilisation de notre compost se fait tout au long de l’année.</p>
            </ul>
          </div>
        </div>
      </div>
      </motion.div>
    </>
  )
}

export default CompostPage
