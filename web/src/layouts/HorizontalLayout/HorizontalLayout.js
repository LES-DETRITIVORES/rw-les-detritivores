import { Link, animateScroll as scroll } from "react-scroll"

const HorizontalLayout = ({ children }) => {
  return <>
      <div className="text-white w-full p-6">
        <Link to="#1" smooth={true}>zone 1</Link> | <a href="#2">zone 2</a> | <a href="#3">zone 3</a> | <a href="#4">zone 4</a>
      </div>
      <div className="flex overflow-hidden w-max overflow-x-scroll">
        <span id="1" className="w-screen">{children}</span>
        <span id="2" className="w-screen">{children}</span>
        <span id="3" className="w-screen">{children}</span>
        <span id="4" className="w-screen">{children}</span>
      </div>
    </>
  }


export default HorizontalLayout
