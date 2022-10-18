import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import {motion} from "framer-motion"
const InclusivePage = () => {
  const imageUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_211007_725_aGTFOEFP5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651843630508"

  return (
    <>
            <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        exit={{ opacity: 0, y: 20 }}
      >
      <MetaTags title="Inclusif" description="Inclusive page" />
      <img className="h-full object-cover object-center" src={imageUrl}></img>

      </motion.div>
    </>
  )
}

export default InclusivePage
