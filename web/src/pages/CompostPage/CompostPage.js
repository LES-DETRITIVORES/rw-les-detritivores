import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { IoBag } from "react-icons/io5"

const CompostPage = () => {
  const compostUrl = "https://ik.imagekit.io/dttv/SHOOTING/DETRI_220516_0774_SvSc3HNGiJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655423313602"

  return (
    <>
      <MetaTags title="Compost" description="Collect page" />
      <h1 className="text-md md:text-lg text-green-900 font-semibold mb-6"><IoBag className="inline mr-2 align-middle h-6 w-6"/>Services organiques > Vente de compost</h1>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">Mais que faisons-nous de notre compost ?</h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>
              L’ensemble du compost est redistribué sur le territoire auprès de nos agriculteurs et de nos partenaires. 
              Il est aussi conditionné pour des particuliers dans des formats de 1 à 15 kilos et en gros volumes pour les projets plus conséquents. 
            </p>
          </div>
        </div>
        <div className="my-auto basis-full md:basis-1/2">
          <iframe className="w-full md:w-96 md:m-auto" height="216" src="https://www.youtube.com/embed/_X-pd2E-AxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-6 mb-6">
        <div className="my-auto basis-full md:basis-1/2">
          <img className="w-full md:w-96 md:m-auto" src={compostUrl}></img>
        </div>
        <div className="basis-full md:basis-1/2">
          <h2 className="text-xl md:text-3xl text-black font-bold">Comment utiliser notre compost ?</h2>
          <div className="my-3 space-y-3 text-sm md:text-md lg:text-lg font-light">
            <p>            
              Le compost vous permet de participer à la végétalisation de notre territoire et l’épanouissement de vos plantations en :
            </p>  
            <ol>
              <li><span className="font-bold">Fertilisant les sols</span></li>
              <li><span className="font-bold">Structurant la terre</span></li>
            </ol>
            <p>
              Il s’utilise de plusieurs manières :
            </p>
            <ul>
              <li><span className="font-bold">Pour rempoter vos plantes :</span> mélangez votre compost à du terreau en respectant les quantités suivantes (2/3 de terreau et 1/3 de compost)</li>
              <li><span className="font-bold">Pour nourrir vos plantes :</span> pour cela, il vous suffit d’ajouter 2 à 3 centimètres de compost sur la surface.</li>
              <li><span className="font-bold">Pour l’agriculture biologique :</span> rythmée par les saisons, l’utilisation de notre compost se fait tout au long de l’année.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompostPage
