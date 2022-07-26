import { Link, routes } from '@redwoodjs/router'

function Footer(props) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      {props.navList.map((nav) => (
        <div class="mb-3">
          <div className="uppercase font-bold">{nav.title}</div>
          {nav.links.map((link) => (
            <a href={link.to} className="hover:underline hover:text-green-900 block"><span className="inline-block mr-1">{link.icon}</span>{link.label}</a>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Footer
