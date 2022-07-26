import { Link, routes } from '@redwoodjs/router'
import { IoGlobe, IoLogoFacebook, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";

const Navigation = () => {    
  const navList = [
    {
      image:'https://ik.imagekit.io/dttv/logo_k7opAuX3K.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652281391081',
      alt: 'LES DETRITIVORES',
      to: routes.home(),
      type: 'logo',
    },
    {
      image: 'https://ik.imagekit.io/dttv/PICTOS/PNG-orange/orange-petit/compostage_Tn4wjFG2E.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655411440172',
      alt: 'Particulier',
      to: '/particulier',
      title: 'Particulier',
      type: 'menu',
    },
    {
      image: 'https://ik.imagekit.io/dttv/PICTOS/PNG-orange/orange-petit/emplois_-8tULXpF6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655411437988',
      alt: 'Professionnel',
      to: '/professionnel',
      title: 'Professionnel',
      type: 'menu',
    },
    {
      image: 'https://ik.imagekit.io/dttv/PICTOS/PNG-orange/orange-petit/exigence_oW0B1BrOL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655411439523',
      alt: 'Collectivité',
      to: '/collectivite',
      title: 'Collectivité',
      type: 'menu',
    },
    {
      image: 'https://ik.imagekit.io/dttv/PICTOS/PNG-orange/orange-petit/compostage_Tn4wjFG2E.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655411440172',
      alt: 'Organique',
      to: routes.organic(),
      title: 'Organique',
      type: 'submenu',
    },
    {
      image: 'https://ik.imagekit.io/dttv/PICTOS/PNG-orange/orange-petit/emplois_-8tULXpF6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655411437988',
      alt: 'Inclusif',
      to: routes.inclusive(),
      title: 'Inclusif',
      type: 'submenu',
    },
    {
      image: 'https://ik.imagekit.io/dttv/PICTOS/PNG-orange/orange-petit/exigence_oW0B1BrOL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655411439523',
      alt: 'Coopératif',
      to: routes.cooperative(),
      title: 'Coopératif',
      type: 'submenu',
    },
  ]
  return (
    <>
      <div className="grid grid-cols-3 p-3 w-screen sm:grid-cols-4 md:grid-cols-5">
      <Link to={navList[0].to} className="m-auto">
        <img
          className="w-28 md:w-36 hover:scale-105 hover:drop-shadow-md"
          src={navList[0].image}
          alt={navList[0].alt}
        />
      </Link>

        {navList.map((nav) => (
          <>
            {nav.type === 'menu' && (
              <Link
                to={nav.to}
                className="m-auto hidden sm:inline text-white font-bold uppercase -rotate-6 hover:scale-105 hover:drop-shadow-md"
              >
                <img
                  src={nav.image}
                  className="w-12 h-12 md:w-16 md:h-16 m-auto"
                  alt={nav.alt}
                />
                <span className="bg-orange-700">{nav.title}</span>
              </Link>
            )}
          </>
        ))}
         <div className="hidden md:inline text-center leading-none my-auto border-orange-700 p-3 border-l-2 rotate-1">
          <span className="text-black text-sm font-light">
            Coopérative inclusive de gestion des biodéchets pour les particuliers, les professionnels et les collectivités <span className="font-bold">#TousDETRITIVORES</span><br/>
          </span>
          <br/>
          <a href="/"><IoGlobe size="1.5em" className="inline mr-3 hover:text-orange-700"/></a>
          <a href="/facebook"><IoLogoFacebook size="1.5em" className="inline mr-3 hover:text-orange-700"/></a>
          <a href="/linkedin"><IoLogoLinkedin size="1.5em" className="inline mr-3 hover:text-orange-700"/></a>
          <a href="/instagram"><IoLogoInstagram size="1.5em" className="inline mr-3 hover:text-orange-700"/></a>
        </div>  
      </div>
    </>
  )
}

export default Navigation