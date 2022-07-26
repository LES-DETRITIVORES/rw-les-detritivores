const Link = (props) => {
  return (
    <span className="underline hover:cursor-pointer font-semibold bg-orange-600">
      <a href={props.to}>{props.children}</a>
    </span>
  )
}

const Manifesto = () => {

  return (
    <>
      <div className="inline-block space-y-6 leading-tight md:leading-tight md:-rotate-3 md:pl-3">
        <p>
          Nous sommes <span className="p-1 bg-orange-600 font-bold">LES&nbsp;DETRITIVORES</span>.
        </p>
        <p>
          Pionnier de la gestion des biodéchets depuis 2015, 
          nous trions, collectons et valorisons les restes alimentaires... 
          pour en faire un compost nutritif et local.
        </p>
        <p>
          Entreprise d'insertion agrée par l'Etat, 
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
    </>
  )
}

export default Manifesto
