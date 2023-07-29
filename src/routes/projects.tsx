import { NavLink } from 'react-router-dom'
import { projects } from '../data/projects'
import { IProject } from '../types/dataTypes'

const Projects = () => {
  // const modalClick = () => {
  //   document &&
  //     (document.getElementById('my_modal_2') as HTMLFormElement).showModal()
  // }

  // const modalClick = (projectId: string) => {
  //   const modalId = `my_modal_${projectId}` // Generate unique modal ID based on project ID
  //   const modal = document.getElementById(modalId) as HTMLFormElement
  //   if (modal) {
  //     modal.showModal()
  //   }
  // }

  const modalClick = (id: string) => {
    const modalId = `my_modal_${id}`
    const modal = document.getElementById(modalId) as HTMLFormElement
    if (modal) {
      modal.showModal()
    }
  }
  return (
    <section className="mt-12 my-20 w-5/6 md:w-2/4 font-sans flex flex-col gap-10">
      <h1 className="text-center font-bungee text-2xl text-lime-400">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {projects.map((project: IProject) => (
          <article className="" key={project.id}>
            <button
              className="bg-lime-600 bg-opacity-20 hover:bg-black hover:text-lime-400 transition-colors duration-300 rounded-md flex justify-center items-center w-full h-full p-0 overflow-hidden"
              onClick={() => modalClick(project.id)}
            >
              <div className="flex flex-col justify-between items-center w-full space-y-5">
                <img
                  src={project.image}
                  alt=""
                  loading="lazy"
                  className="w-full transition-all duration-300"
                />

                <div className="normal-case space-y-5">
                  <h2 className="font-blackOpsOne text-md">{project.title}</h2>
                  <p></p>
                </div>
              </div>
            </button>
            <dialog id={`my_modal_${project.id}`} className="modal">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-xl text-pink-800">
                  {project.title}
                </h3>
                <p className="py-4">{project.description}</p>
                <NavLink
                  className="btn glass w-full md:w-28"
                  to={project.live_url}
                  target="_blank"
                >
                  Live
                </NavLink>
              </form>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </article>
        ))}
      </div>
    </section>
  )
}
export default Projects
