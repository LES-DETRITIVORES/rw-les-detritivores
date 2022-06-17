import { Transition } from '@headlessui/react'
import { useState, useEffect } from 'react'

import Header from 'src/components/Header'
import Menu from 'src/components/Menu/Menu'
import Manifesto from 'src/components/Manifesto/Manifesto'
import Footer from 'src/components/Footer'

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
          enter="transition-opacity duration-[2000ms] ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave=" transition-opacity duration-[2000ms] ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
      >
      <div className="flex flex-col lg:flex-row">
        <div className="w-screen lg:h-screen lg:max-w-[128px]"><Menu /></div>
        <div className="flex flex-col md:flex-row">
          <div className="rounded-lg drop-shadow-lg p-3 md:p-6 md:rotate-1 md:w-2/3">{children}</div>
          <div className="rounded-lg drop-shadow-lg m-3 p-3 bg-green-900 text-white text-lg md:p-6 md:-rotate-1 md:h-full md:w-1/3 md:text-xl"><Manifesto /></div>
        </div>
      </div>
      <div className="mt-6 w-screen bg-yellow-500 text-black"><Footer /></div>
    </Transition>
  </>
}

export default SiteLayout