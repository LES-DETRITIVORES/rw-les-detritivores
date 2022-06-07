import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DevisPage = () => {
  return (
    <>
      <MetaTags title="Devis" description="Devis page" />

      <h1>DevisPage</h1>
      <p>
        Vous aussi, valorisez vos biodéchets
        Vous produisez une quantité significative de déchets organiques et souhaitez obtenir une évaluation du coût de collecte et de traitement des Détritivores ?

        N’hésitez pas à renseigner le plus précisément possible ce formulaire et nous reviendrons vers vous dans les meilleurs délais !

        Nom / Prénom* :
        Nombre de repas servis par jour* :
        Structure* :
        Fonction* :
        Email* : 
        Téléphone* :
        Votre demande* :
          Demande de devis pour une sensibilisation
          Demande de devis pour des collectes à vélo-cargos 
          Demande de devis pour des collectes en camion
          Autre
        Nous vous écoutons (précisez-nous tout ce qui vous semble utile pour le traitement de votre demande) :
      </p>
    </>
  )
}

export default DevisPage
