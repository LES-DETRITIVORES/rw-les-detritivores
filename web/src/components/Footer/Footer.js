import { Link, routes } from '@redwoodjs/router'

function Footer(props) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      {props.navList.map((nav, idx) => (
        <div key={idx} className="mb-3">
          <div className="uppercase text-lg font-extrabold text-green-900">{nav.title}</div>
          {nav.links.map((link, idx) => (
            <Link to={link.to} key={idx} className="hover:underline transition hover:text-green-900 block"><span className="inline-block mr-1">{link.icon}</span>{link.label}</Link>
          ))}
        </div>
      ))}
      <div className="text-sm text-gray-700 space-x-3 text-center md:col-span-2 lg:col-span-3">
        <Link to="/legal" className="hover:underline">Mentions légales</Link>
        <span>-</span>
        <Link to="/donnees" className="hover:underline">Données personnelles</Link>
        <span>-</span>
        <Link to="/presse" className="hover:underline">Presse</Link>
      </div>
    </div>
  )
}

export default Footer
