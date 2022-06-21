import { Link, routes } from '@redwoodjs/router'

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 p-3">
        <div class="">
          <a href="/organique" className="uppercase font-bold underline">Mission organique</a>
          <p class="text-xs italic mb-2">Vivifier durablement la Terre et les Humains en récoltant la matière organique.</p>
          <a href="/collecte" className="hover:underline block">Collecte des restes alimentaires</a>
          <a href="/traitement" className="hover:underline block">Traitement des biodéchets</a>
          <a href="/compost" className="hover:underline block">Vente de compost</a>
        </div>
        <div class="">
          <a href="/inclusif" className="uppercase font-bold underline">Mission inclusive</a>
          <p class="text-xs italic mb-2">Accompagner et valoriser les personnes pour lutter collectivement contre les situations d’exclusion.</p>
          <a href="/insertion" className="hover:underline block">Entreprise d'insertion</a>
          <a href="/equipe" className="hover:underline block">Nos talents</a>
          <a href="/recrutement" className="hover:underline block">Recrutement</a>
        </div>
        <div class="">
          <a href="/cooperatif" className="uppercase font-bold underline">Mission coopérative</a>
          <p class="text-xs italic mb-2">Participer au développement des territoires en créant des emplois inclusifs à fortes valeurs sociales et environnementales.</p>
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
