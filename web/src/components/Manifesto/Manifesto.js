const Link = (props) => {
  return (
    <span className="bg-orange-600 hover:underline hover:cursor-pointer font-semibold">
      <a href={props.to}>{props.children}</a>
    </span>
  )
}

const Manifesto = () => {
  const logoUrl = "https://ik.imagekit.io/dttv/DETRITIVORES_-_Logo_blanc_D9gS55ZaO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655210481453"

  return (
    <>
      <div className="inline-block space-y-6 leading-tight md:leading-tight">
        <p>
          Nous sommes <Link to="/">LES&nbsp;DETRITIVORES</Link>.
          <a href="/" className="hidden"><img className="w-36 lg:w-48 ml-3 inline" src={logoUrl} alt="LES DETRITIVORES"/></a>
        </p>
        <p>Coopérative inclusive de gestion des <Link to="organique">biodéchets</Link>, nous trions, collectons et valorisons les restes alimentaires... 
          pour en faire un <Link to="organique">compost</Link> nutritif et local.
        </p>
        <p>
          A travers la vie <Link to="organique">organique</Link>, nous aimons surtout prendre soin de la vie <Link to="inclusif">humaine</Link>.
          C'est pourquoi nous portons des <Link to="inclusif">emplois</Link> accessibles, utiles et durables 
          au coeur des <Link to="cooperatif">territoires</Link> urbains ou ruraux.
        </p>
        <p>
          Face à l'épuisement, nous régénérons les <Link to="organique">sols</Link>. 
          Face aux exclusions, nous cultivons le <Link to="inclusif">respect</Link>.
          Face à l'appropriation, nous partageons des <Link to="cooperatif">valeurs</Link>.
        </p>
        <p>          
        <Link to="particuliers">Citoyens</Link>, <Link to="professionnels">professionnels</Link>, <Link to="collectivites">collectivités</Link>, 
          rejoignez notre mouvement pour des territoires <Link to="organique">organiques</Link>, <Link to="inclusif">inclusifs</Link> et <Link to="cooperatif">coopératifs</Link>&nbsp;!
        </p>
        <a href="/"><img className="w-36 lg:w-48 mt-6 block mx-auto hover:scale-105 hover:drop-shadow-md" src={logoUrl} alt="LES DETRITIVORES"/></a>
      </div>
    </>
  )
}

export default Manifesto
