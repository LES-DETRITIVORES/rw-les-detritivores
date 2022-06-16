import { Link, routes } from '@redwoodjs/router'
import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { MetaTags } from '@redwoodjs/web'
import ManifestPage from 'src/pages/ManifestPage/ManifestPage'
import ContactPage from 'src/pages/ContactPage/ContactPage'

const MainPage = () => {
  let [nav, openNav] = useState(false);

  function toggleNav() {
    console.log("open nav")
  }

  return (
    <>
      <button onClick={() => openNav(!nav)} className="underline">{(!nav) ? 'MENU' : 'FERMER'}</button>
      <div className="flex flex-wrap lg:flex-nowrap gap-6 bg-white overflow-x-scroll">
        <Transition show={nav}>
          <div className="bg-white flex-none w-1/2 uppercase inline-block" onClick={() => openNav(!nav)}>
            <p className="hover:underline hover:cursor-pointer">#Organique</p>
            <p className="hover:underline hover:cursor-pointer">#Inclusif</p>
            <p className="hover:underline hover:cursor-pointer">#Coopératif</p>
          </div>
        </Transition>
        <div className="bg-orange-600 rounded-md flex-shrink w-screen"><ContactPage /></div>
        <div className="bg-green-900 rounded-md flex-shrink w-screen"><ManifestPage /></div>
      </div>
    </>
  )
}

export default MainPage
