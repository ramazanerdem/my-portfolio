import { NavLink } from 'react-router-dom'
import { projects } from '../data/projects'
import { IProject } from '../types/dataTypes'
import { useState, useEffect } from 'react'

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
  const [isLoaded, setIsLoaded] = useState(false)
  const images = projects.map((project) => project.image)
  useEffect(() => {
    // mesh ve gif dosyalarını yükleme işlemleri
    // Eğer yükleme başarılıysa setIsLoaded(true) olarak ayarlanır
    images.map((image) => {
      const loadImage = new Image()
      loadImage.onload = () => {}
      setIsLoaded(true)
      loadImage.src = image
    })
  }, [])

  const modalClick = (id: string) => {
    const modalId = `my_modal_${id}`
    const modal = document.getElementById(modalId) as HTMLFormElement
    if (modal) {
      modal.showModal()
    }
  }
  return (
    <section className="mt-12 my-20 w-5/6 md:w-2/4 font-sans flex flex-col gap-10">
      <h1 className="text-center font-bungee text-2xl md:text-4xl text-lime-400">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {projects.map((project: IProject) =>
          isLoaded ? (
            <article className="" key={project.id}>
              <button
                className="bg-lime-600 bg-opacity-20 hover:bg-black hover:text-lime-400 transition-colors duration-300 rounded-md flex justify-center items-center w-full h-full p-0 overflow-hidden"
                onClick={() => modalClick(project.id)}
              >
                <div className="flex flex-col justify-between items-center w-full space-y-5">
                  <img
                    src={project.image}
                    alt={project.image.substring(1, project.image.indexOf('.'))}
                    loading="lazy"
                    className="w-full h-52"
                  />
                  <div className="normal-case space-y-5">
                    <h2 className="font-blackOpsOne text-md">
                      {project.title}
                    </h2>
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
                  <div className="menu menu-vertical lg:menu-horizontal space-y-2 md:space-y-0 md:space-x-2 bg-base-200 rounded-box">
                    <NavLink
                      className="btn btn-outline btn-neutral rounded-xl md:w-32"
                      to={project.live_url}
                      target="_blank"
                    >
                      Live
                    </NavLink>
                    <NavLink
                      className="btn btn-outline btn-neutral rounded-xl md:w-32"
                      to={project.github_url}
                      target="_blank"
                    >
                      Github
                    </NavLink>
                  </div>
                </form>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </article>
          ) : (
            <div className="w-full rounded-xl overflow-hidden">
              <div className="h-52 p-3 overflow-hidden bg-white bg-opacity-5 animate-pulse"></div>
              <div className="p-3 bg-lime-600 bg-opacity-10 animate-pulse">
                <div className="grid grid-cols-3 gap-2 mt-2 ">
                  <div className="h-3 bg-white bg-opacity-5 rounded animate-pulse"></div>
                  <div className="h-3 bg-white bg-opacity-5 rounded animate-pulse"></div>
                  <div className="h-3 bg-white bg-opacity-5 rounded animate-pulse"></div>
                  <div className="h-3 col-span-2 bg-white bg-opacity-5 rounded animate-pulse"></div>
                  <div className="h-3 bg-white bg-opacity-5 rounded  animate-pulse"></div>
                  <div className="..."></div>
                  <div className="col-span-2 ..."></div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}
export default Projects
