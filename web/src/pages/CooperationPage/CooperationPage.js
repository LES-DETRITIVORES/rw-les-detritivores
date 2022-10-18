import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { IoHandLeft } from "react-icons/io5"
import { motion } from 'framer-motion'
const CooperationPage = () => {
  const teamUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_211007_678_0j3dm7hjRI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651843629208"
  const userUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_211202_599__s4xTKpKa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651844829335"
  const cycleUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_211202_799_m6brY_eePD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651843538772"

  return (
    <>
          <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        exit={{ opacity: 0, y: 20 }}
      >
      <MetaTags title="Société Coopérative d'Intérêt Collectif (SCIC)" description="Notre projet coopératif rassemble les particuliers, les professionnels, les financeurs, les institutions, les collectivités autour d'un projet commun de transition organique, inclusive et coopérative des territoires." />
      <div className="font-light">&lt; <Link to="/" className="underline">retour accueil</Link></div>
      <h1 className="text-md md:text-lg text-green-900 font-semibold mt-3 mb-6">
        <div>
          <IoHandLeft className="inline mr-2 align-middle h-6 w-6"/>Société Coopérative d'Intérêt Collectif (SCIC)
        </div>
      </h1>
      <div className="flex flex-col gap-6 mb-8 md:flex-row md:gap-24 md:mb-24">
        <div className="basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">Ensemble, allons plus loin&nbsp;!</h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>
              En 2019, une nouvelle page de LES DETRITIVORES a commencé à s’écrire :
              nous avons quitté le monde associatif auquel nous étions attachés depuis notre création en 2015 et sommes devenus une <span className="font-bold">SCIC : Société Coopérative d'Intérêt Collectif</span>.
            </p>
            <p className="font-extralight px-6 hidden">
              « Les Sociétés Coopératives d'Intérêt Collectif ont pour objet la <span className="font-bold">production ou la fourniture de biens et de services d’intérêt collectif</span> qui présentent un caractère d’<span className="font-bold">utilité sociale</span>.» <span className="align-right italic text-sm">- Loi n°2001-624 du 17 juillet 2001</span>
            </p>
            <p>
              Acteurs du <span class="font-bold">développement durable</span>, les SCIC s’inscrivent sur le long terme en prenant soin des intérêts des parties prenantes et de son territoire :
            </p>
            <p>
              <ul className="list-disc list-inside">
                <li>Coopérer pour <span class="font-bold">répondre collectivement</span> à un besoin auquel des entités seules ne peuvent répondre que partiellement.</li>
                <li>Innover socialement pour <span class="font-bold">créer de nouvelles chaînes de valeurs</span> qui ne sont plus seulement monétaires.</li>
                <li>Intégrer l’activité de nos entreprises dans une <span class="font-bold">économie locale</span>.</li>
                <li>Faire corps pour transformer nos modèles concurrentiels en <span class="font-bold">modèles coopératifs et compétitifs</span> qui soient capables de gérer durablement et de la manière la plus juste les ressources du territoire.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="basis-full rounded-2xl md:h-auto md:basis-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${teamUrl})` }}>
          <div className="h-64 md:h-full"></div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-6 mb-8 md:flex-row md:gap-24 md:mb-24">
        <div className="basis-full rounded-2xl md:h-auto md:basis-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${userUrl})` }}>
          <div className="h-64 md:h-full"></div>
        </div>
        <div className="basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">Prenez part à la transition.</h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>
              Nous œuvrons au quotidien pour que notre activité de collecte et de valorisation des biodéchets soit <span className="font-bold">une réelle plus-value
              pour notre territoire et ses acteurs</span>.
              Dans cet objectif, nous vous invitons à participer à la vie de notre coopérative en devenant <span className="font-bold">sociétaire</span> :
            </p>
            <p>
              <ol className="list-none space-y-3">
                <li>
                  <span className="font-bold">Vous participez au développement de notre activité :</span>
                  <ul className="list-disc list-inside">
                    <li>
                      En prenant part aux grandes décisions et à la <span className="font-bold">stratégie</span> de la coopérative
                    </li>
                    <li>
                      En faisant remonter vos <span className="font-bold">besoins</span> et ceux du territoire
                    </li>
                    <li>
                      En participant à la définition de nos <span className="font-bold">services</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">Vous contribuez au développement de notre territoire :</span>
                  <ul className="list-disc list-inside">
                    <li>En soutenant une activité qui œuvre pour une <span className="font-bold">transition écologique et sociale</span></li>
                    <li>En favorisant la création d’<span className="font-bold">emplois inclusifs</span></li>
                    <li>En devenant des acteurs engagés dans la co-construction d’une <span className="font-bold">économie sociale et solidaire</span></li>
                  </ul>
                </li>
              </ol>
            </p>
          </div>
        </div>
        </div>
        </motion.div>
    </>
  )
}

export default CooperationPage
