import { MetaTags } from '@redwoodjs/web'
import { motion } from 'framer-motion'
const OrganicPage = () => {
  const imageUrl =
    'https://ik.imagekit.io/dttv/SHOOTING/DETRI_211202_571_0kF54-dUo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651844829336'

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <MetaTags title="Organic" description="Organic page" />
        <img className="h-full object-cover object-center" src={imageUrl}></img>
      </motion.div>
    </>
  )
}

export default OrganicPage
