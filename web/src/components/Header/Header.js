import { Link, routes } from '@redwoodjs/router'
import {
  IoMenu,
  IoGlobe,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoChatbox,
} from 'react-icons/io5'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const Header = (props) => {
  const logoUrl =
    'https://ik.imagekit.io/dttv/logo_k7opAuX3K.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652281391081'

  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)
  return (
    <>
      <div className="grid gap-3 mt-3 grid-cols-2 md:grid-cols-6">
        <Link to="/" className="m-auto">
          <img
            className="w-36 hover:scale-105 transition"
            src={logoUrl}
            alt="LES DETRITIVORES"
          />
        </Link>
        {props.navList.map((nav, menuIdx) => (
          <>
            {nav.icon && (
              <Menu
                as="div"
                key={menuIdx}
                className="relative hidden md:inline-block"
                onMouseLeave={() => setOpenDropdown(false)}
              >
                <Menu.Button
                  onClick={() => {
                    if (openDropdown === menuIdx) {
                      setOpenDropdown(false)
                    } else {
                      setOpenDropdown(menuIdx)
                    }
                  }}
                  className="transition mx-auto my-4 leading-6 text-white font-bold uppercase -rotate-6 hover:scale-105 hover:cursor-pointer"
                >
                  {nav.icon}
                  <span className="bg-orange-700 transition leading-6 p-1 text-sm md:text-md">
                    {nav.title}
                  </span>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  show={openDropdown === menuIdx}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute w-96 z-10 p-2 bg-white drop-shadow-lg rounded-lg text-orange-700">
                    {nav.links.map((link, itemIdx) => (
                      <Menu.Item key={itemIdx}>
                        {({ active }) => (
                          <Link
                            to={link.to}
                            key={itemIdx}
                            aria-current={active ? 'page' : undefined}
                            className={`${
                              active
                                ? 'bg-orange-700 text-white'
                                : 'text-orange-700'
                            } flex items-center p-2 text-left transition rounded-md`}
                          >
                            <span className="inline-block my-auto mr-1">
                              {link.icon}
                            </span>
                            {link.label}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            )}
          </>
        ))}
        <div className="z-0 p-2 m-3 col-span-2 text-center leading-none my-auto rotate-1 border-orange-700 border-y-2 md:border-2 md:rounded-lg">
          <div className="text-black text-sm">
            Coopérative inclusive de gestion des biodéchets pour les
            particuliers, les professionnels et les collectivités.{' '}
            <span className="font-bold">#TousDETRITIVORES</span>
            <br />
          </div>
          <div className="my-3 inline-block">
            <Link to="/">
              <IoGlobe
                size="1.5em"
                className="inline mr-3 hover:text-orange-700 hover:scale-110"
              />
            </Link>
            <a href="http://facebook.com/lesdetritivores">
              <IoLogoFacebook
                size="1.5em"
                className="inline mr-3 hover:text-orange-700 hover:scale-110"
              />
            </a>
            <a href="https://fr.linkedin.com/company/les-d%C3%A9tritivores">
              <IoLogoLinkedin
                size="1.5em"
                className="inline mr-3 hover:text-orange-700 hover:scale-110"
              />
            </a>
            <a href="https://www.instagram.com/lesdetritivores/?hl=fr">
              <IoLogoInstagram
                size="1.5em"
                className="inline mr-3 hover:text-orange-700 hover:scale-110"
              />
            </a>
          </div>
          <a
            href="#contact"
            className="transition rounded-md inline-block ml-3 px-2 py-1 -rotate-1 font-semi-bold text-lg shadow-xl bg-orange-700 text-white hover:scale-105"
          >
            <IoChatbox className="inline mr-2 align-middle h-6 w-6" />
            Nous contacter
          </a>
        </div>
        <Menu
          as="div"
          className="fixed inline-block right-0 mr-3 md:hidden z-50"
          onMouseLeave={() => setIsOpen(false)}
        >
          <Menu.Button
            onClick={() => {
              if (!isOpen) {
                setIsOpen(true)
              } else {
                setIsOpen(false)
              }
            }}
            className="transition mx-auto my-4 leading-3 md:hidden text-white rotate-3 font-bold uppercase hover:scale-105 hover:cursor-pointer"
          >
            <IoMenu className="bg-orange-700 text-white rounded-full p-3 w-12 h-12 mx-auto mb-1" />
            <span className="text-orange-700 bg-white rounded-lg p-1 text-sm md:text-md">
              Menu
            </span>
          </Menu.Button>
          <Transition
            as={Fragment}
            show={isOpen}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute w-screen !z-50 right-0 -mr-3 bg-white drop-shadow-lg rounded-lg text-orange-700 divide-y divide-orange-700">
              {props.navList.map((nav, idx) => (
                <>
                  {nav.icon && (
                    <div className="p-3" key={idx}>
                      <div className="uppercase font-bold text-left">
                        {nav.title}
                      </div>
                      {nav.links.map((link, idx) => (
                        <Menu.Item key={idx}>
                          {({ active }) => (
                            <Link
                              to={link.to}
                              key={idx}
                              onClick={() => setIsOpen(false)}
                              aria-current={active ? 'page' : undefined}
                              className={`${
                                active
                                  ? 'bg-orange-700 text-white'
                                  : 'text-orange-700'
                              } flex items-center p-2 text-left transition rounded-md`}
                            >
                              <span className="inline-block mr-1">
                                {link.icon}
                              </span>
                              {link.label}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  )}
                </>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  )
}

export default Header
