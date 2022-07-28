import { Link, routes } from '@redwoodjs/router'
import { IoMenu, IoGlobe, IoLogoFacebook, IoLogoLinkedin, IoLogoInstagram, IoChatbox } from "react-icons/io5";
import { Menu } from '@headlessui/react'

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
            <Menu as="div" className="relative hidden md:inline-block">
              <Menu.Button className="mx-auto my-4 leading-6 text-white font-bold uppercase -rotate-6 hover:scale-105 hover:cursor-pointer">
                {nav.icon}  
                <span className="bg-orange-700 leading-6 p-1 text-sm md:text-md">{nav.title}</span>
              </Menu.Button>
              <Menu.Items className="absolute w-96 z-10 p-2 bg-white drop-shadow-lg rounded-lg text-orange-700">
                {nav.links.map((link) => (
                  <Menu.Item>
                    {({ active }) => (
                      <a href={link.to} className="rounded-md hover:bg-orange-700 hover:text-white block p-2 text-left"><span className="inline-block my-auto mr-1">{link.icon}</span>{link.label}</a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>
          }
        </>
        ))}
        <Menu as="div" className="relative inline-block md:hidden">
          <Menu.Button className="mx-auto my-4 leading-3 md:hidden text-white rotate-3 font-bold uppercase hover:scale-105 hover:cursor-pointer">
            <IoMenu className="bg-orange-700 text-white rounded-full p-3 w-12 h-12 mx-auto mb-1"/>
            <span className="text-orange-700 p-1 text-sm md:text-md">Menu</span>
          </Menu.Button>
          <Menu.Items className="absolute w-screen z-10 right-0 -mr-3 bg-white drop-shadow-lg rounded-lg text-orange-700 divide-y divide-orange-700">
            {props.navList.map((nav) => (
            <>    
              {nav.icon && 
                <div class="p-3">
                  <div className="uppercase font-bold text-left">{nav.title}</div>
                  {nav.links.map((link) => (
                    <Menu.Item>
                    {({ active }) => (
                      <a href={link.to} className="rounded-md hover:bg-orange-700 hover:text-white block p-2 text-left"><span className="inline-block mr-1">{link.icon}</span>{link.label}</a>
                    )}
                    </Menu.Item>
                  ))}
                </div>    
              }        
            </>
            ))}
          </Menu.Items>
        </Menu>
        <div className="p-2 m-3 col-span-2 text-center leading-none my-auto rotate-1 border-orange-700 border-y-2 md:border-2 md:rounded-lg">
          <div className="text-black text-sm">
            Coopérative inclusive de gestion des biodéchets pour les particuliers, les professionnels et les collectivités. <span className="font-bold">#TousDETRITIVORES</span><br/>
          </div>
          <div className="my-3 inline-block">
            <a href="/"><IoGlobe size="1.5em" className="inline mr-3 hover:text-orange-700 hover:scale-110"/></a>
            <a href="/facebook"><IoLogoFacebook size="1.5em" className="inline mr-3 hover:text-orange-700 hover:scale-110"/></a>
            <a href="/linkedin"><IoLogoLinkedin size="1.5em" className="inline mr-3 hover:text-orange-700 hover:scale-110"/></a>
            <a href="/instagram"><IoLogoInstagram size="1.5em" className="inline mr-3 hover:text-orange-700 hover:scale-110"/></a>
          </div>
          <a href="#contact" className="rounded-md inline-block ml-3 px-2 py-1 -rotate-1 font-semi-bold text-lg shadow-xl bg-orange-700 text-white hover:scale-105">
            <IoChatbox className="inline mr-2 align-middle h-6 w-6"/>
            Nous contacter
          </a>
        </div>  
      </div>
    </>
  )
}

export default Header
