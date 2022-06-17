import { Link, routes } from '@redwoodjs/router'

const Footer = () => {
  return (
    <div className="bg-transparent">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 p-3">
        <div class="">
          <a href="/organique" className="uppercase font-bold underline">Mission organique</a>
          <a href="/collecte" className="hover:underline block">Collecte des restes alimentaires</a>
          <a href="/traitement" className="hover:underline block">Traitement des biodéchets</a>
          <a href="/compost" className="hover:underline block">Vente de compost</a>
        </div>
        <div class="">
          <a href="/inclusif" className="uppercase font-bold underline">Mission inclusive</a>
          <a href="/insertion" className="hover:underline block">Insertion par l'activité économique</a>
          <a href="/equipe" className="hover:underline block">Nos équipes</a>
          <a href="/recrutement" className="hover:underline block">Recrutement</a>
        </div>
        <div class="">
          <a href="/cooperatif" className="uppercase font-bold underline">Mission coopérative</a>
          <a href="/scic" className="hover:underline block">Société coopérative d'intérêt collectif</a>
          <a href="/societaire" className="hover:underline block">Devenir sociétaire</a>
          <a href="/titres-participatifs" className="hover:underline block">Titres participatifs</a>
        </div>
        <div class="">
          <a href="/services" className="uppercase font-bold underline">Nos services</a>
          <a href="/particuliers" className="hover:underline block">Particuliers</a>
          <a href="/professionnels" className="hover:underline block">Professionnels</a>
          <a href="/collectivites" className="hover:underline block">Collectivités</a>
        </div>
        <div class="">
          <a href="/reseaux" className="uppercase font-bold underline">Réseaux sociaux</a>
          <a href="/facebook" className="hover:underline block">Facebook</a>
          <a href="/linkedin" className="hover:underline block">LinkedIn</a>
          <a href="/instagram" className="hover:underline block">Instagram</a>
        </div>
        <div className="">
          <p className="font-bold underline">LES DETRITIVORES</p>
          <p>65 quai de Brazza 33100 Bordeaux</p>
          <p>bonjour@les-detritivores.co</p>
          <p>05 56 67 14 47</p>
        </div>
      </div>
  </div>
  )
}

export default Footer
