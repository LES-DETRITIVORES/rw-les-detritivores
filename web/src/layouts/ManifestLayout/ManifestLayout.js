import { Transition } from '@headlessui/react'
import { useState, useEffect } from 'react'

import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

const ManifestLayout = ({ children }) => {
  let [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
  // Update the transition state after component mounting
      setIsShowing(true)
  });

  return <>
    <div className="p-6">
      <Transition
          appear={true}
          show={isShowing}
          enter="transition-opacity duration-[3000ms] ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave=" transition-opacity duration-[3000ms] ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
      >
        {children}
      </Transition>
    </div>
  </>
}

export default ManifestLayout