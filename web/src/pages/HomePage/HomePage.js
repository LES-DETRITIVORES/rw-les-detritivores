import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="flex flex-row">
      <div className="basis-auto md:basis-1/2"></div>
      <div className="basis-full md:basis-2/2">
        <div className="font-bold text-center text-3xl md:text-5xl mt-16 text-white w-min mx-auto -rotate-2">
          <span className="bg-green-900 p-1 block w-min">LES&nbsp;DETRITIVORES&nbsp;:</span> 
          <span className="bg-green-900 p-1 block w-min mt-1">Le&nbsp;tri&nbsp;des&nbsp;biodéchets, ici&nbsp;et&nbsp;maintenant&nbsp;!</span>
        </div>
        <div className="container mx-auto max-w-xl font-sans">
          <div></div>
          <div className="bg-white rounded-t-lg shadow-lg p-8 mt-8 text-center hidden">
            <p>
              Depuis 2015, la Société Coopérative d’Intérêt Collectif et Entreprise d’Insertion LES DETRITIVORES accompagne la gestion des restes alimentaires. Au service de l’inclusion sociale et professionnelle de personnes fortement éloignées de l’emploi, nous proposons un service de formation, de collecte, de tri et de compostage de vos restes alimentaires en Nouvelle-aquitaine.
            </p>
            <p>
              Au 1er janvier 2024, particuliers, collectivités et particuliers, nous serons tenus de respecter la Loi sur la Transition Ecologique pour la Croissance Verte (LTECV) rend obligatoire le tri à la source, la collecte sélective et la valorisation des biodéchets.
            </p>
            </div>
            <div className='hidden'>
                <a
                  className="sm:text-sm md:text-lg uppercase font-bold bg-green-800 rounded-b-md p-4 text-white w-full shadow-lg">En savoir plus</a>
            </div>
          </div>
          <div class="columns-2">
            <div class="bg-yellow-500">Tri</div>
            <div class="bg-orange-500">Collecte</div>
            <div class="bg-green-800">Compostage</div>
            <div class="bg-green-500">Inclusion</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
