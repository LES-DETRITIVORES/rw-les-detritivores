import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { IoFootsteps } from "react-icons/io5"

const IntegrationPage = () => {
  const inclusionUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_220516_0006_KhJB0AFwQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655423300412"

  return (
    <>
      <MetaTags title="Collect" description="Collect page" />
      <h1 className="text-md md:text-lg text-green-900 font-semibold mb-6"><IoFootsteps className="inline mr-2 align-middle h-6 w-6"/>Engagements inclusifs > Entreprise d'insertion</h1>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">Quand le compost crée des postes... d'insertion !</h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>
              En tant qu’Entreprise d’Insertion, nous nous engageons à favoriser l’acquisition par nos salariés de nouvelles compétences. 
              Notre objectif ? Leur permettre d’intégrer le monde du travail avec de solides outils professionnels 
              afin qu’ils puissent poursuivre leur chemin sereinement et avec confiance.
            </p>
            <p>
              Nous veillons à accompagner nos salariés dans la co-construction de leur projet professionnel 
              grâce à la mise en place de parcours professionnels durables et répondant à leurs besoins.
            </p>
            <ul className="space-y-3">
              <li>
                <span className="font-bold">Utilité sociale :</span>S’engager dans une activité à forte utilité sociale en créeant des emplois inclusifs
              </li>
              <li>
                <span className="font-bold">Insertion :</span> Favoriser la réinsertion de personnes rencontrant des difficultés professionnelles et sociales
              </li>
              <li>
                <span className="font-bold">Accompagnement :</span> Permettre une meilleure employabilité grâce à un accompagnement socio-professionnel
              </li>
              <li>
                <span className="font-bold">Autonomie :</span> Favoriser l'autonomie professionnelle des individus que nous soutenons.
              </li>
            </ul>
          </div>
        </div>
        <div className="my-auto basis-full md:basis-1/2">
          <img className="w-full md:w-96 md:m-auto" src={inclusionUrl}></img>
        </div>
      </div>
    </>
  )
}

export default IntegrationPage
