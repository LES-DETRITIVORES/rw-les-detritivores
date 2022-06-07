import { Link, routes } from '@redwoodjs/router'
import QuiSommesNousPage from 'src/pages/QuiSommesNousPage/QuiSommesNousPage'

const Header = () => {
  return (
    <div>
      <h2>{'Header'}</h2>
      <ul>
        <li><Link to={routes.quiSommesNous()}>Qui sommes-nous ?</Link></li>
        <li><Link to={routes.nosActions()}>Nos actions</Link></li>
        <li><Link to={routes.contact()}>Contact</Link></li>
        <li><Link to={routes.devis()}>Devis</Link></li>
      </ul>
      <hr/>
    </div>
  )
}

export default Header
