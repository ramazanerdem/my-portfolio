import linkedin from '/linkedin-blue.svg'
import gmail from '/gmail.svg'
import github from '/github.svg'
import { NavLink } from 'react-router-dom'

const Contacts = () => {
  return (
    <section className="mt-12 my-20 w-11/12 md:w-2/4 flex flex-col gap-10">
      <h1 className="text-center font-bungee text-2xl md:text-4xl text-white">
        Contacts
      </h1>
      <div className="space-y-3 font-genos">
        <div className="bg-cyan-600 md:px-2 bg-opacity-10">
          <div className="flex items-center gap-4 md:gap-10 h-16 md:h-32 collapse-title font-medium">
            <img
              className="w-8 md:w-20"
              src={github}
              alt={github.substring(1, github.indexOf('.'))}
            />
            <div>
              <h2 className="text-gray-400 text-xl md:text-lg">Github</h2>
              <NavLink
                to="https://github.com/ramazanerdem"
                target="_blank"
                className="text-sm md:text-xl"
              >
                github.com/ramazanerdem
              </NavLink>
            </div>
          </div>
        </div>
        <div className="bg-cyan-600 md:px-2 bg-opacity-10">
          <div className="flex items-center gap-4 md:gap-10 h-16 md:h-32 collapse-title text-xl font-medium">
            <img
              className="w-8 md:w-20"
              src={linkedin}
              alt={linkedin.substring(1, linkedin.indexOf('.'))}
            />
            <div>
              <h2 className="text-blue-400 text-xl md:text-lg">Linkedin</h2>
              <NavLink
                to="https://www.linkedin.com/in/ramazanerdem/"
                target="_blank"
                className="text-sm md:text-xl"
              >
                linkedin.com/in/ramazanerdem
              </NavLink>
            </div>
          </div>
        </div>
        <div className="bg-cyan-600 md:px-2 bg-opacity-10">
          <div className="flex items-center gap-4 md:gap-10 h-16 md:h-32 collapse-title text-xl font-medium">
            <img
              className="w-8 md:w-20"
              src={gmail}
              alt={gmail.substring(1, gmail.indexOf('.'))}
            />
            <div>
              <h2 className="text-red-500 text-xl md:text-lg">E-Mail</h2>
              <NavLink
                to="mailto:info@ramo.network"
                target="_blank"
                className="text-sm md:text-xl"
              >
                info@ramo.network
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contacts
