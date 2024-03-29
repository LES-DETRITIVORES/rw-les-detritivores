import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
const LocationPage = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href =
        'https://www.google.com/maps/place/65+Quai+de+Brazza,+33100+Bordeaux/@44.8554532,-0.550648,17z/data=!3m1!4b1!4m5!3m4!1s0xd5528a21e17e1b7:0x8b0813175afece1c!8m2!3d44.8554494!4d-0.5484593'
      setTimeout(() => {
        window.location.href = routes.home()
      }, 1000)
    }, 5000)
  }, [])
  return (
    <>
      <MetaTags title="Location" description="Redirection vers la carte" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <div className="w-full h-screen flex flex-col space-y-6 justify-center items-center">
          <div className="-rotate-6 mt-16">
            <span className="bg-green-900 font-extrabold uppercase text-xl sm:text-2xl md:text-3xl text-white lg:text-5xl py-1">
              <span className="p-2 inline-block mb-1 lg:mb-4">Redirection</span>
              <br />
              <span className="p-2">Vers votre requête !</span>
            </span>
          </div>
          <p className="text-2xl text-center -rotate-6">
            Vous allez être redirigé vers la carte !
          </p>
          <svg
            className="animate-spin w-10 md:h-20 h-10 md:w-20 text-green-900 rounded-md"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-0"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75 rounded-md"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </motion.div>
    </>
  )
}

export default LocationPage
