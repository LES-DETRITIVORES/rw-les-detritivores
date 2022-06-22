import { Transition } from '@headlessui/react'
import { useState, useEffect } from 'react'

import Header from 'src/components/Header'
import Navigation from 'src/components/Navigation/Navigation'
import Manifesto from 'src/components/Manifesto/Manifesto'
import Footer from 'src/components/Footer'

const SiteLayout = ({ children }) => {
  const logoUrl = "https://ik.imagekit.io/dttv/DETRITIVORES_-_Logo_blanc_D9gS55ZaO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655210481453"
  let [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
  // Update the transition state after component mounting
      setIsShowing(true)
  });

  return <>
    <Transition
          appear={true}
          show={isShowing}
          enter="transition-opacity duration-[2000ms] ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave=" transition-opacity duration-[2000ms] ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
      >
      <div className="flex flex-col">
        {/*<div className="basis-full fixed top-0 left-0 right-0 bg-white/95 backdrop-grayscale z-50">*/}
        <div className="basis-full">
          <Navigation />
        </div>
        {/*<div className="basis-full mt-[100px] md:mt-[180px]">*/}
        <div className="basis-full max-w-7xl mx-auto">
          {children}
        </div>
        <div className="bg-green-900 text-white text-lg md:text-xl">
          <div className="p-6 max-w-lg mx-auto">
            <Manifesto />        
            <a href="/"><img className="w-36 lg:w-48 mt-6 block mx-auto hover:scale-105 hover:drop-shadow-md" src={logoUrl} alt="LES DETRITIVORES"/></a>
          </div>
        </div>
      </div>
      <div className="basis-full bg-green-800 text-white">
        <Footer />
      </div>
    </Transition>
  </>
}

export default SiteLayout