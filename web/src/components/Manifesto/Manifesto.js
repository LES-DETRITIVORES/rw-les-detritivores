const Manifesto = () => {
  const logoUrl = "https://ik.imagekit.io/dttv/DETRITIVORES_-_Logo_blanc_D9gS55ZaO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655210481453"
  return (
    <>
      <div className="pt-3 max-w-lg mx-auto">
        <div className="space-y-6 leading-tight lg:-rotate-3 lg:mt-12">
          <p className="text-2xl font-semibold">
            Nous sommes <span className="p-1 bg-orange-700 font-bold">LES&nbsp;DETRITIVORES</span>.
          </p>
          <p>
            Pionnier.e.s de la gestion des biodéchets depuis 2015,
            nous trions, collectons et valorisons les restes alimentaires...
            pour en faire un compost nutritif et local.
          </p>
          <p>
            Coopérative d'insertion reconnue par l'Etat,
            nous accompagnons des parcours professionnels accessibles,
            utiles et durables au coeur des territoires urbains et ruraux.
          </p>
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
        <a href="/"><img className="transition mx-auto w-36 mt-6 lg:mt-12 lg:w-48 hover:scale-105 hover:drop-shadow-md" src={logoUrl} alt="LES DETRITIVORES"/></a>
      </div>
    </>
  )
}

export default Manifesto
