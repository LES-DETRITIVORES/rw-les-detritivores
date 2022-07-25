import { Link, routes } from '@redwoodjs/router'
import { IoLeaf, IoLink, IoTrailSign, IoSync, IoBag, IoPeople, IoFootsteps, IoSchool, IoChatbubbles, IoHandLeft, IoWallet, IoHome, IoRestaurant, IoBusiness } from "react-icons/io5"
import { IoLogoFacebook, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import { IoLocation, IoMail, IoCall } from "react-icons/io5";


const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 p-3">
        <div class="">
          <div className="uppercase font-bold">Impacts organiques</div>
          {/* <p class="text-xs italic mb-2">Vivifier durablement la Terre et les Humains en récoltant la matière organique.</p>*/}
          <a href="/collecte" className="hover:underline block"><IoTrailSign className="inline mr-1"/>Tri des restes alimentaires</a>
          <a href="/traitement" className="hover:underline block"><IoSync className="inline mr-1"/>Compostage des biodéchets</a>
          <a href="/compost" className="hover:underline block"><IoBag className="inline mr-1"/>Fabrication de compost</a>
        </div>
        <div class="">
          <div className="uppercase font-bold">Impacts inclusifs</div>
          {/* <p class="text-xs italic mb-2">Accompagner et valoriser les personnes pour lutter collectivement contre les situations d’exclusion.</p>*/}
          <a href="/insertion" className="hover:underline block"><IoFootsteps className="inline mr-1"/>Entreprise d'insertion</a>
          <a href="/formation" className="hover:underline block"><IoSchool className="inline mr-1"/>Formation professionnelle</a>
        </div>
        <div class="">
          <div className="uppercase font-bold">Impacts coopératives</div>
          {/* <p class="text-xs italic mb-2">Participer au développement des territoires en créant des emplois inclusifs à fortes valeurs sociales et environnementales.</p> */}
          <a href="/cooperative" className="hover:underline block"><IoHandLeft className="inline mr-1"/>Société Coopérative d'Intérêt Collectif (SCIC)</a>
          <a href="/investissement" className="hover:underline block"><IoWallet className="inline mr-1"/>Investissement Responsable (IR)</a>
        </div>
        <div class="">
          <div className="uppercase font-bold">Nos solutions</div>
          <a href="/particuliers" className="hover:underline block"><IoHome className="inline mr-1"/>Particuliers</a>
          <a href="/professionnels" className="hover:underline block"><IoRestaurant className="inline mr-1"/>Professionnels</a>
          <a href="/collectivites" className="hover:underline block"><IoBusiness className="inline mr-1"/>Collectivités</a>
        </div>
        <div class="">
          <div className="uppercase font-bold">Nous suivre :</div>
          <a href="https://les-detritrivores.co" className="hover:underline block"><IoLink className="inline mr-1"/>Internet</a>
          <a href="/facebook" className="hover:underline block"><IoLogoFacebook className="inline mr-1"/>Facebook</a>
          <a href="/linkedin" className="hover:underline block"><IoLogoLinkedin className="inline mr-1"/>LinkedIn</a>
          <a href="/instagram" className="hover:underline block"><IoLogoInstagram className="inline mr-1"/>Instagram</a>
        </div>
        <div className="">
          <p className="font-bold uppercase">Nous contacter :</p>
          <p><IoLocation className="inline mr-1"/>65 quai de Brazza 33100 Bordeaux</p>
          <p><IoMail className="inline mr-1"/>bonjour@les-detritivores.co</p>
          <p><IoCall className="inline mr-1"/>05 56 67 14 47</p>
        </div>
      </div>
  </div>
  )
}

export default Footer
