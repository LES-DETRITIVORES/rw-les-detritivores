import { Link, routes } from '@redwoodjs/router'

const NavLink = (props) => {
  return (
    <span className="bg-orange-600 hover:underline hover:cursor-pointer rotate-3">
      <Link to={props.to}>{props.children}</Link>
    </span>
  )
}

export default NavLink
