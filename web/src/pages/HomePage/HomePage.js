import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  const imageUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_211202_223_qNNb-iKOBh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651843524959"

  return (
    <>
      <MetaTags title="Accueil" description="Home page" />
      <div className="mx-auto">
        <a href="/particuliers" class="text-3xl lg:text-6xl text-white opacity-80 font-extrabold uppercase absolute mt-16 lg:mt-32 px-4 hover:text-green-800 hover:cursor-pointer">
          Particuliers
        </a>
        <a href="/professionnels" class="text-3xl lg:text-6xl text-white opacity-80 font-extrabold uppercase absolute mt-24 lg:mt-48 px-4 hover:text-orange-600 hover:cursor-pointer">
          Professionnels
        </a>
        <a href="/collectivites" class="text-3xl lg:text-6xl text-white opacity-80 font-extrabold uppercase absolute mt-32 lg:mt-64 px-4 hover:text-yellow-500 hover:cursor-pointer">
          Collectivités
        </a>
      </div>
      <img className="h-full object-cover object-center" src={imageUrl}></img>
    </>
  )
}

export default HomePage
