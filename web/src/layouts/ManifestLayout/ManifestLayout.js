import { Transition } from '@headlessui/react'
import { useState, useEffect } from 'react'

import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

const SiteLayout = ({ children }) => {
  let [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
  // Update the transition state after component mounting
      setIsShowing(true)
  });

  return <>
    <div className="p-6 min-h-screen bg-green-900 bg-cover bg-no-repeat bg-center">
      <Transition
          appear={true}
          show={isShowing}
          enter="transition-opacity duration-[1500ms] ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave=" transition-opacity duration-[1500ms] ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
      >
          {children}
      </Transition>
    </div>
  </>
}

export default SiteLayout