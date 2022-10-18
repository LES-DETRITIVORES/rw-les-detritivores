import { Link } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { IoServer } from 'react-icons/io5'
import { motion } from 'framer-motion'
const RgpdPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <MetaTags
          title="Données personnelles"
          description="Politique de confidentialité du site LES DETRITIVORES"
        />
        <div className="font-light">
          &lt;{' '}
          <Link to="/" className="underline">
            retour accueil
          </Link>
        </div>
        <h1 className="text-md md:text-lg text-green-900 font-semibold mt-3 mb-6">
          <div>
            <IoServer className="inline mr-2 align-middle h-6 w-6" />
            Données personnelles
          </div>
        </h1>
        <div>
          <h2 className="text-xl md:text-3xl text-black font-bold">
            Traitement des données personnelles du site LES DETRITIVORES
          </h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <h3 className="font-bold uppercase underline">
              ARTICLE 1 : PRÉAMBULE
            </h3>
            <div class="paragraph">
              Cette politique de confidentialité s'applique au site internet{' '}
              <a
                href="https://www.les-detritivores.co"
                title="Site internet de la coopérative LES DETRITIVORES"
              >
                https://www.les-detritivores.co
              </a>
              . La présente politique de confidentialité a pour but d'exposer
              aux utilisateurs du site :
              <ul>
                <li>
                  La manière dont sont collectées et traitées leurs données à
                  caractère personnel. Doivent être considérées comme données
                  personnelles toutes les données étant susceptibles
                  d'identifier un utilisateur. Il s'agit notamment du prénom et
                  du nom, de l'âge, de l'adresse postale, l'adresse mail, la
                  localisation de l'utilisateur ou encore son adresse IP ;
                </li>
                <li>
                  Quels sont les droits des utilisateurs concernant ces données
                  ;
                </li>
                <li>
                  Qui est responsable du traitement des données à caractère
                  personnel collectées et traitées ;
                </li>
                <li>A qui ces données sont transmises ;</li>
                <li>La politique du site en matière de fichiers "cookies".</li>
              </ul>
            </div>
            <div class="paragraph">
              Cette politique de confidentialité complète les mentions légales
              que les utilisateurs peuvent consulter à l'adresse ci-après :
              <br />
              <a href="/legal" title="Accès à la page des mentions légales">
                https://www.les-detritivores.co/legal
              </a>
              <br />
            </div>
            <h3 className="font-bold uppercase underline">
              ARTICLE 2 : PRINCIPES GÉNÉRAUX EN MATIÈRE DE COLLECTE ET DE
              TRAITEMENT DE DONNÉES
            </h3>
            <div class="paragraph">
              Conformément à la règlementation applicable, la collecte et le
              traitement des données des utilisateurs du site respectent les
              principes suivants :
              <ul>
                <li>
                  Licéité, loyauté et transparence. A chaque fois que des
                  données à caractère personnel seront collectées, il sera
                  indiqué à l'utilisateur que ses données sont collectées, et
                  pour quelles raisons ses données sont collectées ;
                </li>
                <li>
                  Finalités déterminées, explicites et légitimes : la collecte
                  et le traitement des données sont exécutés pour répondre à un
                  ou plusieurs objectifs déterminés dans la présente politique
                  de confidentialité;
                </li>
                <li>
                  Minimisation de la collecte et du traitement des données :
                  seules les données nécessaires à la bonne exécution des
                  objectifs poursuivis par le site sont collectées ;
                </li>
                <li>
                  Exactitude des données : les données sont exactes et sont
                  effacées ou rectifiées sans tarder eu égard aux finalités pour
                  lesquelles elles sont traitées ;
                </li>
                <li>
                  Conservation des données réduites dans le temps : les données
                  sont conservées pour une durée limitée, dont l'utilisateur est
                  informé ;
                </li>
                <li>
                  Intégrité et confidentialité des données collectées et
                  traitées : le responsable du traitement des données s'engage à
                  garantir l'intégrité et la confidentialité des données
                  collectées.
                </li>
              </ul>
            </div>
            <div class="paragraph">
              Afin d'être licites, la collecte et le traitement des données à
              caractère personnel ne pourront intervenir que s'ils respectent au
              moins l'une des conditions ci-après énumérées :
              <ul>
                <li>L'utilisateur a expressément consenti au traitement ;</li>
                <li>
                  Le traitement est nécessaire à la bonne exécution d'un contrat
                  ;
                </li>
                <li>Le traitement répond à une obligation légale ;</li>
                <li>
                  Le traitement s'explique par une nécessité liée à la
                  sauvegarde des intérêts vitaux de la personne concernée ou
                  d'une autre personne physique ;
                </li>
                <li>
                  Le traitement peut s'expliquer par une nécessité liée à
                  l'exécution d'une mission d'intérêt public ou qui relève de
                  l'exercice de l'autorité publique ;
                </li>
                <li>
                  Le traitement et la collecte des données à caractère personnel
                  sont nécessaires aux fins des intérêts légitimes et privés
                  poursuivis par le responsable du traitement ou par un tiers.
                </li>
              </ul>
            </div>
            <h3 className="font-bold uppercase underline">
              ARTICLE 3 : DONNÉES À CARACTÈRE PERSONNEL COLLECTÉES ET TRAITÉES
              DANS LE CADRE DE LA NAVIGATION SUR LE SITE
            </h3>
            <h4 className="font-semibold uppercase underline">
              A. DONNÉES COLLECTÉES ET TRAITÉES ET MODE DE COLLECTE
            </h4>
            <div class="paragraph">
              Les données à caractère personnel collectées sur le site
              les-detritivores.co sont les suivantes :
              <ul>
                <li>Société</li>
                <li>Prénom, Nom</li>
                <li>Téléphone</li>
                <li>Adresse "email"</li>
                <li>Adresse "postale"</li>
              </ul>
            </div>
            <div class="paragraph">
              Ces données sont collectées lorsque l'utilisateur effectue l'une
              des opérations suivantes sur le site :
              <ul>
                <li>
                  Quand vous vous inscrivez sur le site pour recevoir une
                  newsletter régulière afin de découvrir les réalisations et les
                  actualités de l'agence.
                </li>
                <li>
                  Quand vous renseignez le formulaire de contact afin de rentrer
                  en relation avec l'éditeur.
                </li>
              </ul>
            </div>
            <div class="paragraph">
              Le responsable du traitement conservera dans ses systèmes
              informatiques du site et dans des conditions raisonnables de
              sécurité l'ensemble des données collectées pour une durée de :
              <ul>
                <li>
                  Pour la newsletter : pendant une durée de trois ans à compter
                  de leur collecte par LES DETRITIVORES ou du dernier contact
                  émanant de votre part.
                </li>
                <li>
                  Pour le formulaire de contact : pendant une durée de trois ans
                  à compter de leur collecte par LES DETRITIVORES ou du dernier
                  contact émanant de votre part.
                </li>
              </ul>
            </div>
            <div class="paragraph">
              La collecte et le traitement des données répondent aux finalités
              suivantes :
              <ul>
                <li>
                  Les données sont collectées afin de pouvoir vous informer par
                  le biais d'une newsletter, et de répondre à votre demande de
                  prise de contact ;
                </li>
                <li>Vous permettre d'exercer vos droits ;</li>
                <li>Nous permettre d'exercer nos droits.</li>
              </ul>
            </div>
            <h4 className="font-semibold uppercase underline">
              B. DESTINATAIRES DES DONNÉES
            </h4>
            <div class="paragraph">
              Aucune de vos données personnelles n'est communiquée à un tiers
              susceptible de traiter celles-ci à des fins commerciales.
            </div>
            <div class="paragraph">
              Dans le strict respect des finalités exposées ci-avant, nous
              pourrons être amenés à communiquer vos données personnelles à nos
              sous-traitants, comme notre hébergeur ou à des autorités telles
              que des tribunaux ou police ou officiers ministériels qui peuvent
              nous demander de divulguer des données personnelles dans le cadre
              de leur mission.
            </div>
            <h4 className="font-semibold uppercase underline">
              C. HÉBERGEMENT DES DONNÉES{' '}
            </h4>
            <div class="paragraph">
              Le site les-detritivores.co est hébergé par la société VERCEL INC.
              <br />
            </div>
            <h3 className="font-bold uppercase underline">
              ARTICLE 4 : RESPONSABLE DU TRAITEMENT DES DONNÉES ET DÉLÉGUÉ À LA
              PROTECTION DES DONNÉES
            </h3>
            <h4 className="font-semibold uppercase underline">
              A. LE RESPONSABLE DU TRAITEMENT DES DONNÉES
            </h4>
            <div class="paragraph">
              Le responsable du traitement des données à caractère personnel est
              la société LES DETRITIVORES, SCIC SA au capital de 83 100,00 €,
              dont le siège social est 65 QUAI DE BRAZZA, 33100 BORDEAUX,
              immatriculée au numéro suivant : 812 924 538 RCS BORDEAUX,
              Téléphone : +33(0)5 56 67 14 47, adresse e-mail :
              bonjour@les-detritivores.co
            </div>
            <div class="paragraph">
              Le responsable du traitement des données détermine les finalités
              et les moyens mis au service du traitement des données à caractère
              personnel.
            </div>
            <h4 className="font-semibold uppercase underline">
              B. OBLIGATIONS DU RESPONSABLE DU TRAITEMENT DES DONNÉES
            </h4>
            <div class="paragraph">
              Le responsable du traitement s'engage à protéger les données à
              caractère personnel collectées, à ne pas les transmettre à des
              tiers sans que l'utilisateur n'en ait été informé et à respecter
              les finalités pour lesquelles ces données ont été collectées.
              <br />
              Le site dispose d'un certificat SSL afin de garantir que les
              informations et le transfert des données transitant par le site
              sont sécurisés.
              <br />
              Un certificat SSL ("Secure Socket Layer" Certificate) a pour but
              de sécuriser les données échangées entre l'utilisateur et le site.
              <br />
              Dans le cas où l'intégrité, la confidentialité ou la sécurité des
              données à caractère personnel de l'utilisateur est compromise, le
              responsable du traitement s'engage à informer l'utilisateur par
              tout moyen.
              <br />
            </div>
            <h3 className="font-bold uppercase underline">
              ARTICLE 5 : DROITS DE L'UTILISATEUR
            </h3>
            Conformément à la réglementation concernant le traitement des
            données à caractère personnel, l'utilisateur possède les droits
            ci-après énumérés. Afin que le responsable du traitement des données
            fasse droit à sa demande, l'utilisateur est tenu de lui communiquer
            : ses prénom et nom ainsi que son adresse e-mail. Dans l'hypothèse
            où votre demande est susceptible d'avoir des conséquences
            importantes sur vos données ou en cas de doute sur l'identité de la
            personne formulant une demande relative à l'un des droits ci-après
            énumérés, LES DETRITIVORES se réserve le droit de solliciter la
            communication de la copie du recto en noir et blanc d'un document
            d'identité.
            <br />
            LES DETRITIVORES apportera à l'utilisateur une réponse dans un délai
            d'un mois à compter de la réception de votre demande.
            <h4 className="font-semibold uppercase underline">
              A. PRÉSENTATION DES DROITS DE L'UTILISATEUR EN MATIÈRE DE COLLECTE
              ET TRAITEMENT DE DONNÉES
            </h4>
            <div class="paragraph">
              <span class="h4">a. Droit d'accès et de rectification</span>
              <br />
              L'utilisateur peut prendre connaissance, mettre à jour, ou
              demander la modification des données le concernant.
            </div>
            <div class="paragraph">
              <span class="h4">b. Droit d'effacement</span>
              <br />
              L'utilisateur a le droit de demander la suppression de ses données
              personnelles lorsque :
              <ul>
                <li>
                  les données à caractère personnel ne sont plus nécessaires au
                  regard des finalités énoncées à l'article 3,
                </li>
                <li>
                  l'utilisateur retire le consentement sur lequel est fondé le
                  traitement,{' '}
                </li>
                <li>
                  l'utilisateur s'oppose au traitement de ses données à
                  caractère personnel à des fins de prospection, y compris au
                  profilage dans la mesure où il est lié à une telle
                  prospection,
                </li>
                <li>
                  les données personnelles ont fait l'objet d'un traitement
                  illicite,
                </li>
                <li>
                  les données personnelles doivent être effacées pour respecter
                  une obligation légale.
                </li>
              </ul>
              Ce droit à l'effacement ne s'applique pas lorsque le traitement
              des données à caractère personnel est nécessaire :
              <li>
                à l'exercice du droit à la liberté d'expression et
                d'information;
              </li>
              <li>
                au respect d'une obligation légale qui nous incombe et qui
                requiert le traitement de ces données à caractère personnel,
              </li>
              <li>
                à la constatation, à l'exercice ou à la défense de droits en
                justice,
              </li>
              <li>
                pendant la vérification portant sur le point de savoir si les
                motifs légitimes poursuivis prévalent sur celles de
                l'utilisateur lorsqu'il s'est opposé, pour des raisons tenant à
                sa situation particulière, au traitement de ses données à
                caractère personnel fondé sur nos intérêts légitimes.
              </li>
            </div>
            <div class="paragraph">
              <span class="h4">c. Droit à la portabilité des données</span>
              <br />
              L'utilisateur a le droit de demander la portabilité de ses données
              personnelles, détenues par le site, vers un autre site.
            </div>
            <div class="paragraph">
              <span class="h4">
                d. Droit à la limitation et à l'opposition du traitement des
                données
              </span>
              <br />
              L'utilisateur a le droit de demander la limitation du traitement :
              <ul>
                <li>
                  pendant une durée nous permettant de vérifier l'exactitude de
                  vos données personnelles,
                </li>
                <li>
                  lorsque le traitement est illicite et l'utilisateur s'oppose à
                  l'effacement de ses données personnelles et exige à la place
                  la limitation de leur utilisation,
                </li>
                <li>
                  nous n'avons plus besoin des données personnelles mais elles
                  sont encore nécessaires pour la constatation, l'exercice ou la
                  défense de droits en justice de l'utilisateur,
                </li>
                <li>
                  pendant la vérification portant sur le point de savoir si les
                  motifs légitimes poursuivis prévalent sur ceux de
                  l'utilisateur lorsqu'il s'est opposé, pour des raisons tenant
                  à sa situation particulière, au traitement de ses données
                  personnelles fondé sur nos intérêts légitimes.
                </li>
              </ul>
              L'utilisateur a le droit de s'opposer au traitement de ses données
              par le site (i) fondé sur nos intérêts légitimes pour des raisons
              tenant à sa situation particulière et/ou (ii), à des fins de
              prospection, y compris au profilage dans la mesure où il est lié à
              une telle prospection, sans que le site ne puisse refuser, sauf à
              démontrer l'existence de motifs légitimes et impérieux, pouvant
              prévaloir sur les intérêts et les droits et libertés de
              l'utilisateur.
              <br />
              <br />
              LES DETRITIVORES notifiera l'utilisateur en cas de rectification,
              d'effacement ou de limitation des données, à moins que cela
              n'entraîne pour lui des formalités, coûts et démarches
              disproportionnés.
            </div>
            <div class="paragraph">
              <span class="h4">
                e. Droit de ne pas faire l'objet d'une décision fondée
                exclusivement sur un procédé automatisé
              </span>
              <br />
              Conformément aux dispositions du règlement 2016/679, l'utilisateur
              a le droit de ne pas faire l'objet d'une décision fondée
              exclusivement sur un procédé automatisé si la décision produit des
              effets juridiques le concernant, ou l'affecte de manière
              significative de façon similaire.
            </div>
            <div class="paragraph">
              <span class="h4">
                f. Droit de déterminer le sort des données après la mort
              </span>
              <br />
              Il est rappelé à l'utilisateur qu'il peut organiser quel doit être
              le devenir de ses données collectées et traitées s'il décède,
              conformément à la loi n°2016-1321 du 7 octobre 2016.
              <br />
              Ces directives peuvent être modifiées ou révoquées à tout moment.
              <br />
              L'utilisateur peut donner :
              <ul>
                <li>
                  des directives générales concernant l'ensemble de ses données
                  personnelles et peuvent être enregistrées auprès d'un tiers de
                  confiance numérique certifié par la CNIL,
                </li>
                <li>
                  des directives particulières concernant le traitement de ses
                  données personnelles par LES DETRITIVORES et peuvent être
                  enregistrées auprès de nous.
                </li>
              </ul>
              Pour exercer l'ensemble des droits visés à cet article,
              l'utilisateur doit adresser sa demande :
              <ul>
                <li>
                  Par courrier postal à l'adresse suivante : LES DETRITIVORES
                  "protection des données" 65 QUAI DE BRAZZA, 33100 BORDEAUX
                </li>
                <li>
                  Par e-mail : bonjour@les-detritivores.co avec pour objet
                  "protection des données".
                </li>
              </ul>
            </div>
            <div class="paragraph">
              <span class="h4">
                g. Droit de saisir l'autorité de contrôle compétente
              </span>
              <br />
              Dans le cas où le responsable du traitement des données décide de
              ne pas répondre à la demande de l'utilisateur, et que
              l'utilisateur souhaite contester cette décision, ou, s'il pense
              qu'il est porté atteinte à l'un des droits énumérés ci-dessus, il
              est en droit de saisir la CNIL (Commission Nationale de
              l'Informatique et des Libertés, https://www.cnil.fr) ou tout juge
              compétent.
            </div>
            <h4 className="font-semibold uppercase underline">
              B. DONNÉES PERSONNELLES DES PERSONNES MINEURES
            </h4>
            <div class="paragraph">
              Conformément à la réglementation applicable, seuls les mineurs
              âgés de 15 ans ou plus peuvent consentir au traitement de leurs
              données personnelles.
              <br />
              Si l'utilisateur est un mineur de moins de 15 ans, l'accord d'un
              représentant légal sera requis afin que des données à caractère
              personnel puissent être collectées et traitées.
              <br />
              L'éditeur du site se réserve le droit de vérifier par tout moyen
              que l'utilisateur est âgé de plus de 15 ans, ou qu'il aura obtenu
              l'accord d'un représentant légal avant de naviguer sur le site.
            </div>
            <h3 className="font-bold uppercase underline">
              ARTICLE 6 : UTILISATION DES FICHIERS "COOKIES"
            </h3>
            <div class="paragraph">
              Le site a recours aux techniques de "cookies".
              <br />
              Un "cookie" est un fichier de petite taille (moins de 4 ko),
              stocké par le site sur le disque dur de l'utilisateur, contenant
              des informations relatives aux habitudes de navigation de
              l'utilisateur.
              <br />
              Ces fichiers lui permettent de traiter des statistiques et des
              informations sur le trafic, de faciliter la navigation et
              d'améliorer le service pour le confort de l'utilisateur.
              <br />
              Pour l'utilisation de fichiers "cookies" impliquant la sauvegarde
              et l'analyse de données à caractère personnel, le consentement de
              l'utilisateur est nécessairement demandé.
              <br />
              Ce consentement de l'utilisateur est considéré comme valide pour
              une durée de 13 (treize) mois maximum. A l'issue de cette période,
              le site demandera à nouveau l'autorisation de l'utilisateur pour
              enregistrer des fichiers "cookies" sur son disque dur.
              <br />
            </div>
            <div class="paragraph">
              <span class="h4">
                a. Opposition de l'utilisateur à l'utilisation de fichiers
                "cookies" par le site
              </span>
              <br />
              Il est porté à la connaissance de l'utilisateur qu'il peut
              s'opposer à l'enregistrement de ces fichiers "cookies" en
              configurant son logiciel de navigation. Pour information,
              l'utilisateur peut trouver aux adresses suivantes les démarches à
              suivre afin de configurer son logiciel de navigation pour
              s'opposer à l'enregistrement des fichiers "cookies" :
              <ul>
                <li>
                  <strong>Chrome</strong> :{' '}
                  <a
                    href="https://support.google.com/accounts/answer/61416?hl=fr"
                    title="Modifier la gestion des cookies pour le navigateur Chrome"
                  >
                    https://support.google.com/accounts/answer/61416?hl=fr
                  </a>
                </li>
                <li>
                  <strong>Firefox</strong> :{' '}
                  <a
                    href="https://support.mozilla.org/fr/kb/autoriser-bloquer-cookies-preferences-sites"
                    title="Modifier la gestion des cookies pour le navigateur Firefox"
                  >
                    https://support.mozilla.org/fr/kb/autoriser-bloquer-cookies-preferences-sites
                  </a>
                </li>
                <li>
                  <strong>Safari</strong> :{' '}
                  <a
                    href="http://www.apple.com/legal/privacy/fr-ww/"
                    title="Modifier la gestion des cookies pour le navigateur Safari"
                  >
                    http://www.apple.com/legal/privacy/fr-ww/
                  </a>
                </li>
                <li>
                  <strong>Internet Explorer</strong> :{' '}
                  <a
                    href="https://support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-delete-manage-cookies"
                    title="Modifier la gestion des cookies pour le navigateur Internet Explorer"
                  >
                    https://support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-delete-manage-cookies
                  </a>
                </li>
                <li>
                  <strong>Opera</strong> :{' '}
                  <a
                    href="http://www.opera.com/help/tutorials/security/cookies/"
                    title="Modifier la gestion des cookies pour le navigateur Opera"
                  >
                    http://www.opera.com/help/tutorials/security/cookies/
                  </a>
                </li>
              </ul>
            </div>
            <div class="paragraph">
              Dans le cas où l'utilisateur décide de désactiver les fichiers
              "cookies", il pourra poursuivre sa navigation sur le site.
              Toutefois, tout dysfonctionnement du site provoqué par cette
              manipulation ne pourrait être considéré comme étant du fait de
              l'éditeur du site.
            </div>
            <div class="paragraph">
              <span class="h4">
                b. Description des fichiers "cookies" utilisés par le site
              </span>
              <br />
              L'éditeur du site attire l'attention de l'utilisateur sur le fait
              que les cookies suivants sont utilisés lors de sa navigation :
              <br />
              <blockquote>
                "Google Analytics est un outil Google d'analyse d'audience
                Internet permettant aux propriétaires de sites Web et
                d'applications de mieux comprendre le comportement de leurs
                utilisateurs. Cet outil peut utiliser des cookies pour collecter
                des informations et générer des rapports sur les statistiques
                d'utilisation d'un site Web sans que les utilisateurs
                individuels soient identifiés personnellement par Google. Le
                cookie "_ga" est celui qui est le plus utilisé par Google
                Analytics."
              </blockquote>
            </div>
            <h3 className="font-bold uppercase underline">
              ARTICLE 7 : CONDITIONS DE MODIFICATION DE LA POLITIQUE DE
              CONFIDENTIALITÉ
            </h3>
            <div class="paragraph">
              La présente politique de confidentialité peut être consultée à
              tout moment à l'adresse ci-après indiquée :<br />
              <a href="/donnees">https://www.les-detritivores.co/donnees</a>
            </div>
            <div class="paragraph">
              L'éditeur du site se réserve le droit de la modifier afin de
              garantir sa conformité avec le droit en vigueur.
              <br />
              Par conséquent, l'utilisateur est invité à venir consulter
              régulièrement cette politique de confidentialité afin de se tenir
              informé des derniers changements qui lui seront apportés.
              <br />
              Si elle comporte des modifications importantes nous vous en
              informerons par tous les moyens. Il est porté à la connaissance de
              l'utilisateur que la dernière mise à jour de la présente politique
              de confidentialité est intervenue le : 26/02/2019.
              <br />
            </div>
            <h3 className="font-bold uppercase underline">
              ARTICLE 8 : ACCEPTATION PAR L'UTILISATEUR DE LA POLITIQUE DE
              CONFIDENTIALITÉ
            </h3>
            <div class="paragraph">
              En naviguant sur le site, l'utilisateur atteste avoir lu et
              compris la présente politique de confidentialité et en accepte les
              conditions, en ce qui concerne plus particulièrement la collecte
              et le traitement de ses données à caractère personnel, ainsi que
              l'utilisation de fichiers "cookies".
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default RgpdPage
