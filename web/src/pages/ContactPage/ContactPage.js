import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <h1>ContactPage</h1>
      <p>
        Nom / Prénom* :
        Nombre de repas servis par jour* :
        Structure* :
        Fonction* :
        Email* : 
        Téléphone* :
        Une question ou remarque ?* :
      </p>
    </>
  )
}

export default ContactPage
