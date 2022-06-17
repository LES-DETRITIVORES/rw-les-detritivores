import { Transition, Popover } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/solid'

const Menu = () => {
  const logoUrl = "https://ik.imagekit.io/dttv/logo_k7opAuX3K.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652281391081"
  const organicIcon = "https://ik.imagekit.io/dttv/PICTOS/PNG-orange/orange-petit/compostage_Tn4wjFG2E.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655411440172"
  const inclusiveIcon = "https://ik.imagekit.io/dttv/PICTOS/PNG-orange/orange-petit/confiance_05TUm0nZY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655411438800"
  const cooperativeIcon = "https://ik.imagekit.io/dttv/PICTOS/PNG-orange/orange-petit/exigence_oW0B1BrOL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655411439523"

  return (
    <>
      <div className="grid grid-cols-4 lg:grid-cols-1 p-3 w-screen lg:h-screen lg:w-auto">
        <a href="/"><img className="w-36 mx-auto" src={logoUrl} alt="LES DETRITIVORES"/></a>
        <a href="/organique" className="mx-auto text-orange-600 font-bold hover:underline -rotate-6 uppercase"><img src={organicIcon} className="w-12 h-12 md:w-16 md:h-16 m-auto"></img><span className="bg-orange-600 text-white">Organique</span></a>
        <a href="/inclusif" className="mx-auto text-orange-600 font-bold hover:underline -rotate-6 uppercase"><img src={inclusiveIcon} className="w-12 h-12 md:w-16 md:h-16 m-auto"></img><span className="bg-orange-600 text-white">Inclusif</span></a>
        <a href="/cooperatif" className="mx-auto text-orange-600 font-bold hover:underline -rotate-6 uppercase"><img src={cooperativeIcon} className="w-12 h-12 md:w-16 md:h-16 m-auto"></img><span className="bg-orange-600 text-white">Coopératif</span></a>
      </div>
    </>
  )
}

export default Menu
