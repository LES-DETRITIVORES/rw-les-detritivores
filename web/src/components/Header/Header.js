import { Link, routes } from '@redwoodjs/router'
import { IoMenu, IoGlobe, IoLogoFacebook, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";

const Header = (props) => {
  const logoUrl = 'https://ik.imagekit.io/dttv/logo_k7opAuX3K.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652281391081'
  return (
    <>
      <div className="grid gap-3 mt-3 grid-cols-2 md:grid-cols-6">
        <Link to="/" className="m-auto">
          <img
            className="w-36 hover:scale-105"
            src={logoUrl}
            alt="LES DETRITIVORES"
          />
        </Link>
        {props.navList.map((nav) => (
        <>
          {nav.icon && 
            <Link
              to={nav.to}
              className="mx-auto my-4 hidden leading-6 md:inline text-white font-bold uppercase -rotate-6 hover:scale-105 hover:cursor-pointer"
            >
              {nav.icon}  
              <span className="bg-orange-700 leading-6 p-1 text-sm md:text-md">{nav.title}</span>
            </Link>
          }
        </>
        ))}
        <Link
          to=""
          className="mx-auto my-4 leading-3 md:hidden text-white rotate-6 font-bold uppercase hover:scale-105 hover:cursor-pointer"
        >
          <IoMenu className="bg-orange-700 text-white rounded-full p-3 w-12 h-12 mx-auto mb-1"/>
          <span className="text-orange-700 p-1 text-sm md:text-md">Menu</span>
        </Link>
        <div className="p-2 m-3 col-span-2 text-center leading-none my-auto border-orange-700 md:border-l-2 rotate-1">
          <span className="text-black text-sm font-light">
            Coopérative inclusive de gestion des biodéchets pour les particuliers, les professionnels et les collectivités <span className="font-bold">#TousDETRITIVORES</span><br/>
          </span>
          <br/>
          <a href="/"><IoGlobe size="1.5em" className="inline mr-3 hover:text-orange-700 hover:scale-110"/></a>
          <a href="/facebook"><IoLogoFacebook size="1.5em" className="inline mr-3 hover:text-orange-700 hover:scale-110"/></a>
          <a href="/linkedin"><IoLogoLinkedin size="1.5em" className="inline mr-3 hover:text-orange-700 hover:scale-110"/></a>
          <a href="/instagram"><IoLogoInstagram size="1.5em" className="inline mr-3 hover:text-orange-700 hover:scale-110"/></a>
        </div>  
      </div>
    </>
  )
}

export default Header
