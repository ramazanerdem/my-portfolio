import { projects } from '../data/projects'
import { IProject } from '../types/dataTypes'

const Projects = () => {
  const modalClick = () => {
    document &&
      (document.getElementById('my_modal_2') as HTMLFormElement).showModal()
    // window.my_modal_2.showModal()
  }
  return (
    <section className="mt-12 my-20 w-5/6 md:w-2/4 font-sans flex flex-col gap-10">
      <h1 className="text-center font-bungee text-4xl">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        {projects.map((project: IProject) => (
          <article className="" key={project.id}>
            {/* Open the modal using ID.showModal() method */}
            <button
              className="btn flex justify-center items-center w-full h-full p-0 overflow-hidden"
              onClick={modalClick}
            >
              <div className="flex flex-col justify-between items-center w-full space-y-5">
                <img
                  src={project.image}
                  alt=""
                  loading="lazy"
                  className="h-full"
                />

                <div className="normal-case space-y-5">
                  <h2 className="font-bold text-lg">{project.title}</h2>
                  <p></p>
                </div>
              </div>
            </button>
            <dialog id="my_modal_2" className="modal">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="py-4">{project.description}</p>
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
