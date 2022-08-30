import { Link, routes } from '@redwoodjs/router'

function Footer(props) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      {props.navList.map((nav) => (
        <div className="mb-3">
          <div className="uppercase text-lg font-extrabold text-green-900">{nav.title}</div>
          {nav.links.map((link) => (
            <a href={link.to} className="hover:underline hover:text-green-900 block"><span className="inline-block mr-1">{link.icon}</span>{link.label}</a>
          ))}
        </div>
      ))}
      <div className="text-sm text-gray-700 space-x-3 text-center md:col-span-2 lg:col-span-3">
        <a href="https://www.inoxia.com/mentions-legales" className="hover:underline">Mentions légales</a>
        <span>-</span>
        <a href="https://www.inoxia.com/donnees-personnelles" className="hover:underline">Données personnelles</a>
        <span>-</span>
        <a href="/press" className="hover:underline">Presse</a>
      </div>
    </div>
  )
}

export default Footer
