import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Collecte from 'src/components/Collecte'
import Compostage from 'src/components/Compostage'
import Sensibilisation from 'src/components/Sensibilisation'
import Tri from 'src/components/Tri'

const NosActionsPage = () => {
  return (
    <>
      <MetaTags title="NosActions" description="NosActions page" />

      <h1>NosActionsPage</h1>
      <hr/>
      <Collecte/>
      <hr/>
      <Compostage/>
      <hr/>
      <Sensibilisation/>
      <hr/>
      <Tri/>
    </>
  )
}

export default NosActionsPage
