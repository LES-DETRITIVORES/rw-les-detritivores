const Link = (props) => {
  return (
    <span className="underline hover:cursor-pointer font-semibold">
      <a href={props.to}>{props.children}</a>
    </span>
  )
}

const Manifesto = () => {

  return (
    <>
      <div className="inline-block space-y-6 leading-tight md:leading-tight md:-rotate-3 md:pl-3">
        <p>
          Nous sommes <Link to="/">LES&nbsp;DETRITIVORES</Link>.
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
      </div>
    </>
  )
}

export default Manifesto
