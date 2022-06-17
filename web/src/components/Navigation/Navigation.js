import { Link, routes } from '@redwoodjs/router'

const Navigation = () => {
  const logoUrl =
    'https://ik.imagekit.io/dttv/logo_k7opAuX3K.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652281391081'
  const organicIcon =
    'https://ik.imagekit.io/dttv/PICTOS/PNG-orange/orange-petit/compostage_Tn4wjFG2E.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655411440172'
  const inclusiveIcon =
    'https://ik.imagekit.io/dttv/PICTOS/PNG-orange/orange-petit/emplois_-8tULXpF6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655411437988'
  const cooperativeIcon =
    'https://ik.imagekit.io/dttv/PICTOS/PNG-orange/orange-petit/exigence_oW0B1BrOL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655411439523'
  const routesList = [
    {
      image: logoUrl,
      alt: 'LES DETRITIVORES',
      to: routes.home(),
      type: 'logo',
    },
    {
      image: organicIcon,
      alt: 'Organique',
      to: routes.organic(),
      title: 'Organique',
      type: 'menu',
    },
    {
      image: inclusiveIcon,
      alt: 'Inclusif',
      to: routes.inclusive(),
      title: 'Inclusif',
      type: 'menu',
    },
    {
      image: cooperativeIcon,
      alt: 'Coopératif',
      to: routes.cooperative(),
      title: 'Coopératif',
      type: 'menu',
    },
  ]
  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-1 p-3 w-screen lg:h-screen lg:w-auto">
        {routesList.map((route) => (
          <>
            {route.type === 'logo' && (
              <Link to={route.to} className="hidden sm:inline">
                <img
                  className="w-28 md:w-36 mx-auto hover:scale-105 hover:drop-shadow-md"
                  src={route.image}
                  alt={route.alt}
                />
              </Link>
            )}
            {route.type === 'menu' && (
              <Link
                to={route.to}
                className="mx-auto text-white font-bold uppercase -rotate-6 hover:scale-105 hover:drop-shadow-md"
              >
                <img
                  src={route.image}
                  className="w-12 h-12 md:w-16 md:h-16 m-auto"
                  alt={route.alt}
                />
                <span className="bg-orange-600">{route.title}</span>
              </Link>
            )}
          </>
        ))}
      </div>
    </>
  )
}

export default Navigation
