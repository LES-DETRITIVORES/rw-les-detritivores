import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { motion } from 'framer-motion'
export default () => {
  return (
    <>
      <MetaTags title="Erreur 404" description="Page non trouvée" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <div className="w-full h-screen flex flex-col space-y-6 justify-center items-center">
          <div className="-rotate-6 mt-16">
            <span className="bg-green-900 font-extrabold uppercase text-xl sm:text-2xl md:text-3xl text-white lg:text-5xl py-1">
              <span className="p-2 inline-block mb-1 lg:mb-4">Oops</span>
              <br />
              <span className="p-2">Page non trouvée !</span>
            </span>
          </div>
          <p className="text-2xl text-center -rotate-6">
            Cliquez sur le bouton ci-dessous pour revenir à la page d'accueil.
          </p>
          <Link
            to={routes.home()}
            className="bg-green-900 -rotate-6 text-white font-bold py-2 px-4 rounded-md"
          >
            Retourner à l'accueil
          </Link>
        </div>
      </motion.div>
    </>
  )
}
