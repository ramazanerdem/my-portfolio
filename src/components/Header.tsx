import { NavLink } from 'react-router-dom'
import github from '/github.svg'
import linkedin from '/linkedin.svg'
import ramo from '/ramo-network.svg'

const Header = () => {
  return (
    <header className="fixed z-10 flex justify-between items-center w-full bg-black border-b-2 border-white border-opacity-20 h-20">
      <div className="max-w-6xl w-3/4 mx-auto flex justify-between">
        <nav className="mt-1">
          <NavLink to="/">
            <img className="w-64" src={ramo} />
          </NavLink>
        </nav>
        <nav className="flex gap-6 items-center">
          <div className="flex items-center gap-6 mt-1">
            <NavLink
              className="font-bungee text-sm text-white text-opacity-50 hover:text-opacity-40 transition-colors duration-200"
              to="info"
            >
              Who am i
            </NavLink>
            <NavLink
              className="font-bungee text-sm text-white text-opacity-50 hover:text-opacity-40 transition-colors duration-200"
              to="projects"
            >
              projects
            </NavLink>
            <NavLink
              className="font-bungee text-sm text-white text-opacity-50 hover:text-opacity-40 transition-colors duration-200"
              to="blog"
            >
              blog
            </NavLink>
            <NavLink
              className="font-bungee text-sm text-white text-opacity-50 hover:text-opacity-40 transition-colors duration-200"
              to="contacts"
            >
              contacts
            </NavLink>
          </div>
          <NavLink target="_blank" to="https://github.com/ramazanerdem">
            <img className="w-5" src={github} />
          </NavLink>
          <NavLink target="_blank" to="https://linkedin.com/in/ramazanerdem">
            <img className="w-6" src={linkedin} />
          </NavLink>

          <NavLink
            className="font-blackOpsOne text-xs border-2 border-pink-800 hover:border-cyan-500 transition-colors duration-200 text-pink-800 hover:text-cyan-500 px-5 py-2"
            to="tech"
          >
            technologies i use
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
export default Header
