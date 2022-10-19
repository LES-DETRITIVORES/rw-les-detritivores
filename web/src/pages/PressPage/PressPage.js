import { Link } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { IoNewspaper } from 'react-icons/io5'
import { motion } from 'framer-motion'
const PressPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <MetaTags title="Espace presse" description="Espace presse" />
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
            <IoNewspaper className="inline mr-2 align-middle h-6 w-6" />
            Espace presse
          </div>
        </h1>
        <p>
          Pour toutes demandes concernant la presse, merci d'écrire à notre
          service de communication :{' '}
          <a
            href="mailto:communication@actes-atlantique.fr"
            className="underline"
          >
            communication@actes-atlantique.fr
          </a>
        </p>
      </motion.div>
    </>
  )
}

export default PressPage
