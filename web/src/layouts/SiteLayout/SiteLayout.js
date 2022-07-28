import { Transition } from '@headlessui/react'
import { useState, useEffect } from 'react'
import { IoLeaf, IoGlobe, IoTrailSign, IoSync, IoBag, IoPeople, IoFootsteps, IoSchool, IoChatbubbles, IoHandLeft, IoWallet, IoHome, IoRestaurant, IoBusiness, IoBicycle } from "react-icons/io5"
import { IoLogoFacebook, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import { IoLocation, IoMail, IoCall } from "react-icons/io5";

import Header from 'src/components/Header'
import Manifesto from 'src/components/Manifesto/Manifesto'
import Footer from 'src/components/Footer'
import SiteForm from 'src/components/SiteForm/SiteForm';

const defaultStyle = "bg-orange-700 text-white rounded-full p-3 w-12 h-12 mx-auto mb-1"
const navList = [
  {
    icon: <IoLeaf className={defaultStyle}/>,
    title: 'Services organiques',
    links: [
      {
        icon: <IoTrailSign/>,
        label: "Tri des restes alimentaires",
        to: "/collecte"
      },
      {
        icon: <IoSync/>,
        label: "Compostage des biodéchets",
        to: "/traitement"
      },
      {
        icon: <IoBag/>,
        label: "Vente de compost",
        to: "/compost"
      },
    ]
  },
  {
    icon: <IoPeople className={defaultStyle}/>,
    title: 'Engagements inclusifs',
    links: [
      {
        icon: <IoFootsteps/>,
        label: "Entreprise d'insertion",
        to: "/insertion"
      },
      {
        icon: <IoSchool/>,
        label: "Formation professionnelle",
        to: "/formation"
      }
    ]
  },
  {
    icon: <IoChatbubbles className={defaultStyle}/>,
    title: 'Vie coopérative',
    links: [
      {
        icon: <IoHandLeft/>,
        label: "Société Coopérative d'Intérêt Collectif (SCIC)",
        to: "/cooperation"
      },
      {
        icon: <IoWallet/>,
        label: "Investissement Responsable (IR)",
        to: "/investissement"
      }
    ]
  },
  {
    title: 'Nos solutions',
    links: [
      {
        icon: <IoHome/>,
        label: "Pour les particuliers",
        to: "/particulier"
      },
      {
        icon: <IoRestaurant/>,
        label: "Pour les professionnels",
        to: "/professionnels"
      },
      {
        icon: <IoBusiness/>,
        label: "Pour les collectivites",
        to: "/collectivités"
      }
    ]
  },
  {
    title: 'Nous suivre',
    links: [
      {
        icon: <IoGlobe/>,
        label: "Web",
        to: "/"
      },
      {
        icon: <IoLogoFacebook/>,
        label: "Facebook",
        to: "/facebook"
      },
      {
        icon: <IoLogoLinkedin/>,
        label: "LinkedIn",
        to: "/linkedin"
      },
      {
        icon: <IoLogoInstagram/>,
        label: "Instagram",
        to: "/instagram"
      }
    ]
  },
  {
    title: 'Nous rencontrer',
    links: [
      {
        icon: <IoLocation/>,
        label: "65 quai de Brazza 33100 Bordeaux",
        to: "/"
      },
      {
        icon: <IoMail/>,
        label: "bonjour@les-detritivores.co",
        to: "/mail"
      },
      {
        icon: <IoCall/>,
        label: "05 56 67 14 47",
        to: "/call"
      }
    ]
  },
]

const SiteLayout = ({ children }) => {
  let [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
  // Update the transition state after component mounting
      setIsShowing(true)
  });

  return <>
    <Transition
          appear={true}
          show={isShowing}
          enter="transition-opacity duration-[1000ms] ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-[1000ms] ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
      >
      <div className="flex flex-col">
        {/*<div className="basis-full fixed top-0 left-0 right-0 bg-white/95 backdrop-grayscale z-50">*/}
        <div className="basis-full p-3 text-center w-screen mx-auto">
          <Header navList={navList}/>
        </div>
        {/*<div className="basis-full mt-[100px] md:mt-[180px]">*/}
        <div className="basis-full w-screen max-w-7xl mx-auto">
          {children}
        </div>
        <div id="contact" className="bg-green-900 text-white text-lg md:text-xl">
          <div className="p-6 mx-auto flex flex-col gap-6 md:flex-row">
            <div className="basis-full md:basis-1/2">
              <Manifesto/>
            </div>
            <div className="basis-full md:basis-1/2">
              <SiteForm/>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-full p-6 w-screen mx-auto bg-white text-black">
        <Footer navList={navList} />
      </div>
    </Transition>
  </>
}

export default SiteLayout
