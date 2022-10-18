import { MetaTags } from '@redwoodjs/web'
import { motion } from 'framer-motion'
const CooperativePage = () => {
  const imageUrl =
    'https://ik.imagekit.io/dttv/SHOOTING/DETRI_211007_557_AHqbPk0KPD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651843627053'

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <img className="h-full object-cover object-center" src={imageUrl}></img>
      </motion.div>
      <MetaTags title="Inclusif" description="Inclusive page" />
    </>
  )
}

export default CooperativePage
