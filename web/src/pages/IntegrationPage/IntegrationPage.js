import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { IoFootsteps } from "react-icons/io5"

const IntegrationPage = () => {
  const workUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_220516_0516_MgiSISfUR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655423311749"
  const inclusionUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_220516_0006_KhJB0AFwQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655423300412"

  return (
    <>
      <MetaTags title="Entreprise d'insertion" description="Nous recrutons en priorité des personnes éloignées de l'emploi qui bénéficient tout au long de leur parcours d'un accompagnement professionnel sur mesure." />
      <div className="font-light">&lt; <a href="/" className="underline">retour accueil</a></div>
      <h1 className="text-md md:text-lg text-green-900 font-semibold mt-3 mb-6">
        <div>
        <IoFootsteps className="inline mr-2 align-middle h-6 w-6"/>Entreprise d'insertion
        </div>
      </h1>
      <div className="flex flex-col gap-6 mb-8 md:flex-row md:gap-24 md:mb-24">
        <div className="basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">Un travail à la mesure de chacun.</h2>
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
          </div>
        </div>
        <div className="basis-full rounded-2xl md:h-auto md:basis-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${workUrl})` }}>
          <div className="h-64 md:h-full"></div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-6 mb-8 md:flex-row md:gap-24 md:mb-24">
        <div className="basis-full rounded-2xl md:h-auto md:basis-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${inclusionUrl})` }}>
          <div className="h-64 md:h-full"></div>
        </div>
        <div className="basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">Se tenir debout.</h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>
              Notre coopérative s'appuie sur un socle de missions sociales fortes qui défend la dignité et la liberté des personnes accompagnées :
            </p>
            <ul className="space-y-3">
              <li>
                <span className="font-bold block">Utilité sociale</span> S’engager dans une activité à forte utilité sociale en créant des emplois inclusifs
              </li>
              <li>
                <span className="font-bold block">Insertion</span> Favoriser la réinsertion de personnes rencontrant des difficultés professionnelles et sociales
              </li>
              <li>
                <span className="font-bold block">Accompagnement</span> Permettre une meilleure employabilité grâce à un accompagnement socio-professionnel
              </li>
              <li>
                <span className="font-bold block">Autonomie</span> Favoriser l'autonomie professionnelle des individus que nous soutenons.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default IntegrationPage
