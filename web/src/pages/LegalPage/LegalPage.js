import { Link } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { IoCreate } from 'react-icons/io5'
import { motion } from 'framer-motion'
const LegalPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <MetaTags
          title="Mentions légales"
          description="Mentions légales du site LES DETRITIVORES"
        />
        <div className="font-light">
          &lt;{' '}
          <Link to="/" className="underline">
            retour accueil
          </Link>
        </div>
        <h1 className="text-md md:text-lg text-green-900 font-semibold mt-3 mb-6">
          <div>
            <IoCreate className="inline mr-2 align-middle h-6 w-6" />
            Mentions légales
          </div>
        </h1>

        <div>
          <h2 className="text-xl md:text-3xl text-black font-bold">
            Mentions légales du site LES DETRITIVORES
          </h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>
              Conformément aux dispositions des Articles 6-III et 19 de la Loi
              n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie
              numérique, dite L.C.E.N., il est porté à la connaissance des
              utilisateurs et visiteurs du site LES DETRITIVORES les présentes
              mentions légales. Le site LES DETRITIVORES est accessible à
              l'adresse suivante : https://www.les-detritivores.co (ci-après "le
              Site"). L'accès et l'utilisation du Site sont soumis aux présentes
              "Mentions légales" détaillées ci-après ainsi qu'aux lois et/ou
              règlements applicables. La connexion, l'utilisation et l'accès à
              ce Site impliquent l'acceptation intégrale et sans réserve de
              l'utilisateur de toutes les dispositions des présentes Mentions
              Légales.
            </p>
            <h3 className="font-bold uppercase underline">
              ARTICLE 1 - INFORMATIONS LÉGALES
            </h3>
            <p>
              En vertu de l'Article 6-III de la Loi n° 2004-575 du 21 juin 2004
              pour la confiance dans l'économie numérique, il est précisé dans
              cet article l'identité des différents intervenants dans le cadre
              de sa réalisation et de son suivi.
            </p>
            <h4 className="font-semibold uppercase underline">
              A. EDITEUR DU SITE
            </h4>
            <p>Le site LES DETRITIVORES est édité par :</p>
            <p>LES DETRITIVORES, SCIC SA au capital de 83 100,00 €</p>
            <p>
              ayant son siège social à l'adresse suivante : 65 QUAI DE BRAZZA,
              33100 BORDEAUX, et immatriculée au numéro suivant : 812 924 538
              RCS BORDEAUX.
            </p>
            <p>Téléphone : +33(0)5 56 67 14 47</p>
            <p>Adresse e-mail : bonjour@les-detritivores.co</p>
            <p>ci-après "l'Éditeur"</p>

            <h4 className="font-semibold uppercase underline">
              B. DIRECTEUR DE PUBLICATION
            </h4>
            <p>Le Directeur de publication est : Monsieur Frédéric PETIT</p>
            <p>Adresse e-mail de contact : bonjour@les-detritivores.co</p>
            <p>ci-après "le Directeur de publication"</p>

            <h4 className="font-semibold uppercase underline">
              C. HÉBERGEUR DU SITE
            </h4>
            <p>Le site LES DETRITIVORES est hébergé par : VERCEL INC.</p>
            <p>Adresse e-mail : legal@vercel.com</p>
            <p>ci-après "l'Hébergeur"</p>

            <h4 className="font-semibold uppercase underline">
              D. UTILISATEURS
            </h4>
            <p>
              Sont considérés comme utilisateurs tous les internautes qui
              naviguent, lisent, visionnent et utilisent le site LES
              DETRITIVORES.
            </p>
            <p>ci-après les "Utilisateurs"</p>

            <h3 className="font-bold uppercase underline">
              ARTICLE 2 – ACCESSIBILITÉ
            </h3>
            <p>
              Le Site est par principe accessible aux Utilisateurs 24/24h et
              7/7j, sauf interruption, programmée ou non, pour des besoins de
              maintenance ou en cas de force majeure. En cas d'impossibilité
              d'accès au Site, celui-ci s'engage à faire son maximum afin d'en
              rétablir l'accès. Le Site ne saurait être tenu pour responsable de
              tout dommage, quelle qu'en soit la nature, résultant de son
              indisponibilité.
            </p>
            <h3 className="font-bold uppercase underline">
              ARTICLE 3 - LOI APPLICABLE ET JURIDICTION
            </h3>
            <p>
              Les présentes Mentions Légales sont régies par la loi française.
              En cas de différend et à défaut d'accord amiable, le litige sera
              porté devant les tribunaux français conformément aux règles de
              compétence en vigueur.
            </p>

            <h3 className="font-bold uppercase underline">
              ARTICLE 4 – CONTACT
            </h3>
            <p>
              Pour tout signalement de contenus ou d'activités illicites,
              l'Utilisateur peut contacter l'Éditeur à l'adresse suivante :
              bonjour@les-detritivores.co, ou par courrier recommandé avec
              accusé de réception adressé à l'Éditeur aux coordonnées précisées
              dans les présentes mentions légales.
            </p>

            <h3 className="font-bold uppercase underline">COPYRIGHT PHOTOS</h3>
            <p>LES DETRITIVORES - INOXIA – François PASSERINI</p>
            <p>
              Le site LES DETRITIVORES vous souhaite une excellente navigation !
            </p>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default LegalPage
