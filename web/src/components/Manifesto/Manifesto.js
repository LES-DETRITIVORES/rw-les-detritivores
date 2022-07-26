const Manifesto = () => {
  const logoUrl = "https://ik.imagekit.io/dttv/DETRITIVORES_-_Logo_blanc_D9gS55ZaO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655210481453"
  return (
    <>
      <div className="grid grid-cols-1 pt-3 md:grid-cols-2 gap-6">
        <p className="inline-block text-left text-2xl font-semibold md:mx-auto md:col-span-2 md:-rotate-3 md:pl-3">
          Nous sommes <span className="p-1 bg-orange-700 font-bold">LES&nbsp;DETRITIVORES</span>.
        </p>
        <div className="mt-6 inline-block space-y-6 leading-tight md:leading-tight md:-rotate-3 md:pl-3">
          <p>
            Pionnier.e.s de la gestion des biodéchets depuis 2015, 
            nous trions, collectons et valorisons les restes alimentaires... 
            pour en faire un compost nutritif et local.
          </p>
          <p>
            Entreprise d'insertion reconnue par l'Etat, 
            nous accompagnons des parcours professionnels accessibles, 
            utiles et durables au coeur des territoires urbains et ruraux.
          </p>
        </div>
        <div className="inline-block space-y-6 leading-tight md:leading-tight md:-rotate-3 md:pl-3">
          <p>
            Face à leur épuisement, nous régénérons les sols.<br/> 
            Face à la fragilité, nous cultivons les relations.<br/>
            Face à la démesure, nous partageons des valeurs.
          </p>
          <p>          
            Citoyens, professionnels, collectivités,<br/>
            rejoignez notre mouvement pour des territoires organiques, inclusifs et coopératifs&nbsp;!
          </p>
        </div>
        <a href="/" className="mx-auto md:col-span-2"><img className="w-36 lg:w-48 hover:scale-105 hover:drop-shadow-md" src={logoUrl} alt="LES DETRITIVORES"/></a>
      </div>
    </>
  )
}

export default Manifesto
