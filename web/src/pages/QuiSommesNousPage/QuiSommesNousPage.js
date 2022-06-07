import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import EntrepriseInsertion from 'src/components/EntrepriseInsertion'
import Equipe from 'src/components/Equipe'
import Valeurs from 'src/components/Valeurs'
import Engagements from 'src/components/Engagements'
import SCIC from 'src/components/SCIC'

const QuiSommesNousPage = () => {
  return (
    <>
      <MetaTags title="QuiSommesNous" description="QuiSommesNous page" />
      <h1>QuiSommesNousPage</h1>
      <hr/>
      <EntrepriseInsertion/>
      <hr/>
      <Equipe/>
      <hr/>
      <Valeurs/>
      <hr/>
      <Engagements/>
      <hr/>
      <SCIC/>
    </>
  )
}

export default QuiSommesNousPage
