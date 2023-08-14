import { NavLink } from 'react-router-dom'
import github from '/github.svg'
import linkedin from '/linkedin.svg'
import ramo from '/ramo-network.svg'
import menu from '/menu.svg'

type IOpen = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<IOpen> = ({ isOpen, setIsOpen }) => {
  const isOpenClick = () => {
    setIsOpen(true)
  }
  const isCloseClick = () => {
    setIsOpen(false)
  }
  return (
    <header className="fixed z-20 flex justify-center md:justify-between items-center w-full bg-black border-b-2 border-white border-opacity-20 h-14 md:h-20">
      <div
        onClick={isCloseClick}
        className={`${
          isOpen ? 'md:hidden' : 'hidden'
        } absolute top-0 left-0 w-full min-h-screen bg-black opacity-70`}
      ></div>
      <div className="max-w-6xl w-3/4 mx-auto flex justify-center md:justify-between">
        <nav className="mt-1 flex justify-between items-center gap-10">
          <NavLink to="/">
            <img
              className="w-48 md:w-64"
              src={ramo}
              alt={ramo.substring(1, ramo.indexOf('.'))}
            />
          </NavLink>
          <button onClick={isOpenClick} className="md:hidden">
            <img src={menu} alt={menu.substring(1, menu.indexOf('.'))} />
          </button>
        </nav>
        <nav className="flex gap-6 items-center">
          <ul
            className={`${
              isOpen ? 'translate-x-0 ' : '-translate-x-full md:translate-x-0'
            } bg-black text-xs xl:text-sm absolute md:static min-h-screen md:min-h-0 flex-col md:flex-row px-5 md:px-0 pt-8 md:pt-0 left-0 top-0 z-10 w-2/3 md:w-auto md:flex md:justify-between md:items-center gap-2 lg:gap-6 space-y-10 md:space-y-0 transition-all duration-300`}
          >
            <li className="w-20">
              <NavLink
                className="font-bungee text-white text-opacity-50 hover:text-opacity-40 transition-colors duration-200"
                to="info"
              >
                Who am i
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-bungee text-white text-opacity-50 hover:text-opacity-40 transition-colors duration-200"
                to="projects"
              >
                projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-bungee text-white text-opacity-50 hover:text-opacity-40 transition-colors duration-200"
                to="blog"
              >
                blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-bungee text-white text-opacity-50 hover:text-opacity-40 transition-colors duration-200"
                to="contacts"
              >
                contacts
              </NavLink>
            </li>
            <li className="w-5">
              <NavLink
                className="w-5"
                target="_blank"
                to="https://github.com/ramazanerdem"
              >
                <img
                  className="w-5"
                  src={github}
                  alt={github.substring(1, github.indexOf('.'))}
                />
              </NavLink>
            </li>
            <li className="w-6">
              <NavLink
                target="_blank"
                to="https://linkedin.com/in/ramazanerdem"
              >
                <img
                  className="w-6"
                  src={linkedin}
                  alt={linkedin.substring(1, linkedin.indexOf('.'))}
                />
              </NavLink>
            </li>

            <li className="flex items-center">
              <NavLink
                className="font-blackOpsOne text-xs border-2 border-pink-800 hover:border-cyan-500 transition-colors duration-200 text-pink-800 hover:text-cyan-500 px-5 py-2"
                to="tech"
              >
                technologies i use
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header
