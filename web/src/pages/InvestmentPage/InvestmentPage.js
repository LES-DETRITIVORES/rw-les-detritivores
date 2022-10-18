import { Link } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { IoWallet } from 'react-icons/io5'
import { motion } from 'framer-motion'
const InvestmentPage = () => {
  const platformUrl =
    'https://ik.imagekit.io/dttv/SHOOTING/DETRI_211007_027_awZY2DqRm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651843609915'
  const dialogUrl =
    'https://ik.imagekit.io/dttv/SHOOTING/DETRI_211202_619_5Ku1I5UcPu.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651843537900'

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <MetaTags
          title="Investissement Responsable (IR)"
          description="Que vous soyez plutôt part sociale, compte courant d'associé ou encore titres participatifs, notre coopérative vous propose des opportunités d'investissement social, écologique et responsable adapté à vos capacités."
        />
        <div className="font-light inline-flex space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
          <Link to="/" className="underline">
            Retour à l'acceuil
          </Link>
        </div>
        <h1 className="text-md md:text-lg text-green-900 font-semibold mt-3 mb-6">
          <div>
            <IoWallet className="inline mr-2 align-middle h-6 w-6" />
            Investissement Responsable (IR)
          </div>
        </h1>
        <div className="flex flex-col gap-6 mb-8 md:flex-row md:gap-24 md:mb-24">
          <div className="basis-full md:basis-1/2">
            <h2 className="text-xl md:text-3xl text-black font-bold">
              Des solutions réplicables,
              <br />
              ici et maintenant.
            </h2>
            <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
              <p>
                LES DETRITIVORES développent des{' '}
                <span className="font-bold">
                  plateformes locales de compostage
                </span>{' '}
                d’une capacité de traitement de 650 tonnes par an sur une
                surface de 1000 m2. S’appuyant sur le processus bas-carbone de
                l’andain, ces plateformes déploient des activités de formation,
                collecte, tri, lavage des bacs et compostage des biodéchets des{' '}
                <span className="font-bold">particuliers</span>, des{' '}
                <span className="font-bold">professionnels</span> et des{' '}
                <span className="font-bold">collectivités locales</span>.
              </p>
              <p>
                Sur un rayon d’action optimal de 20 km, la collecte des
                biodéchets peut s’effectuer avec l’ensemble des{' '}
                <span className="font-bold">
                  mobilités plurielles et douces
                </span>{' '}
                les plus adaptées au territoire : camion biogaz pour la
                massification, cyclo-cargo électrique pour les zones urbaines
                denses, points d’apports volontaires connectés sur les espaces
                publics, fret fluvial sur les voies navigables.
              </p>
              <p>
                Chaque plateforme permet ainsi de créer{' '}
                <span className="font-bold">5 postes à temps plein</span> dédiés
                à des emplois inclusifs et locaux sur l’ensemble des{' '}
                <span className="font-bold">
                  métiers de la logistique et traitement des biodéchets
                </span>
                .
              </p>
            </div>
          </div>
          <div
            className="basis-full rounded-2xl md:h-auto md:basis-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${platformUrl})` }}
          >
            <div className="h-64 md:h-full"></div>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-6 mb-8 md:flex-row md:gap-24 md:mb-24">
          <div
            className="basis-full rounded-2xl md:h-auto md:basis-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${dialogUrl})` }}
          >
            <div className="h-64 md:h-full"></div>
          </div>
          <div className="basis-full md:basis-1/2">
            <h2 className="text-xl md:text-3xl text-black font-bold">
              Pour une nouvelle économie organique.
            </h2>
            <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
              <p>
                Avec près de 6 millions d’habitants répartis sur 84 000 km2, la
                région <span className="font-bold">Nouvelle-Aquitaine</span> est
                la 3ème région de France en terme de population et la 1ère en
                terme de superficie. Les ménages, les restaurateurs et les
                commerces de ce territoire représentent un potentiel de{' '}
                <span className="font-bold">450 000 tonnes par an</span> de
                matières organiques à traiter.
              </p>
              <p>
                D'ici 2027, notre ambition est de couvrir{' '}
                <span className="font-bold">5% des besoins de la région</span>{' '}
                et de créer{' '}
                <span className="font-bold">
                  175 nouveaux emplois inclusifs
                </span>
                .
              </p>
              <p>
                Investir dans la société coopérative LES DETRITIVORES vous
                assure de contribuer à l'émergence d'une économie pleinement{' '}
                <span className="font-bold">responsable</span>, créateur d'
                <span className="font-bold">emplois locaux</span> et acteur de
                la <span className="font-bold">transition écologique</span>.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default InvestmentPage
