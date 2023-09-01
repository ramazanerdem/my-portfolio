import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IProject } from '../../types/dataTypes'
import axios from 'axios'
import useSWR, { mutate } from 'swr'
import ProjectLoading from '../../components/ProjectLoading'
import { RootState } from '../../../redux/store'
import { editProject } from '../../../redux/projectSlice'

const Projects = () => {
  const URI = import.meta.env.VITE_SERVER_URI
  const EMAIL = import.meta.env.VITE_ADMIN_EMAIL
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { userData: user } = useSelector((state: RootState) => state.users)
  const [isToastVisible, setIsToastVisible] = useState(false)

  let toastTimer: ReturnType<typeof setTimeout>
  const handleButtonClick = () => {
    toastTimer && clearTimeout(toastTimer)
    setIsToastVisible(true)
    toastTimer = setTimeout(() => {
      setIsToastVisible(false)
    }, 4000)
  }

  const fetcher = async (URI: string) => {
    try {
      const { data } = await axios.get<IProject[]>(`${URI}/getProjects`)
      return data
    } catch (err) {
      console.log(err)
    }
  }
  const { data, error, isLoading } = useSWR<IProject[] | undefined>(
    URI,
    fetcher
  )

  const modalClick = (id: string) => {
    const modalId = `my_modal_${id}`
    const modal = document.getElementById(modalId) as HTMLFormElement
    if (modal) {
      modal.showModal()
    }
  }

  const handleDelete = async (id: string) => {
    try {
      const confirmed = window.confirm('Are you sure?')
      confirmed && (await axios.delete(`${URI}/deleteProject/${id}`))
      mutate(URI)
    } catch (err) {
      console.log(err)
    }
  }

  const handleEdit = async (id: string) => {
    try {
      const project = data?.find((project) => project._id === id)
      dispatch(editProject(project))
      user?.email === EMAIL && navigate('/projects/edit/' + id)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section className="mt-12 my-20 w-5/6 md:w-2/4 font-sans flex flex-col gap-10">
      <h1 className="text-center font-bungee text-2xl md:text-4xl text-lime-400">
        Projects
      </h1>
      {user?.email === EMAIL ? (
        <NavLink className="btn text-center" to="add">
          Add New Project
        </NavLink>
      ) : (
        <>
          <button onClick={handleButtonClick} className="btn text-center">
            Add New Project
          </button>
          {isToastVisible && (
            <div className="fixed end-4 top-24 p-4 pointer-events-none animate-pulse">
              <div className="alert">
                <span>You are not admin!</span>
              </div>
            </div>
          )}
        </>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {isLoading ? (
          <>
            <ProjectLoading />
            <ProjectLoading />
            <ProjectLoading />
            <ProjectLoading />
          </>
        ) : data ? (
          data.map((project) => (
            <article key={project._id}>
              <button
                className="bg-lime-600 bg-opacity-20 hover:bg-black hover:text-lime-400 transition-colors duration-300 rounded-md flex justify-center items-center w-full h-full p-0 overflow-hidden"
                onClick={() => modalClick(project._id)}
              >
                <div className="flex flex-col justify-between items-center w-full space-y-5">
                  <img
                    src={project.image}
                    alt={project.image.substring(1, project.image.indexOf('.'))}
                    loading="lazy"
                    className="w-full h-52 object-cover"
                  />
                  <div className="normal-case space-y-5">
                    <h2 className="font-blackOpsOne text-md">
                      {project.title}
                    </h2>
                    <p></p>
                  </div>
                </div>
              </button>
              <dialog id={`my_modal_${project._id}`} className="modal">
                <form method="dialog" className="modal-box">
                  <h3 className="font-bold text-xl text-pink-800">
                    {project.title}
                  </h3>
                  <p className="py-4">{project.description}</p>
                  <div className="md:flex md:items-center md:justify-between space-y-2 md:space-y-0">
                    <div className="p-2 md:flex md:items-center space-y-2 md:space-y-0 md:space-x-2 bg-base-200 rounded-box">
                      <NavLink
                        className="btn btn-outline w-full btn-neutral rounded-xl md:w-32"
                        to={project.live_url}
                        target="_blank"
                      >
                        Live
                      </NavLink>
                      <NavLink
                        className="btn btn-outline w-full btn-neutral rounded-xl md:w-32"
                        to={project.github_url}
                        target="_blank"
                      >
                        Github
                      </NavLink>
                    </div>
                    <div className="p-2 flex justify-between gap-2 bg-base-200 rounded-box">
                      {user?.email === EMAIL ? (
                        <>
                          <button
                            onClick={() => handleEdit(project._id)}
                            className="btn btn-ghost grow md:w-16 bg-lime-900 border-2 rounded-xl"
                          >
                            <img className="w-5" src="/edit.svg" alt="edit" />
                          </button>
                          <button
                            onClick={() => handleDelete(project._id)}
                            className="btn btn-ghost grow md:w-16 bg-pink-900 border-2 rounded-xl"
                          >
                            <img
                              className="w-5"
                              src="/delete.svg"
                              alt="delete"
                            />
                          </button>
                        </>
                      ) : (
                        <>
                          <span
                            onClick={handleButtonClick}
                            className="btn btn-ghost grow md:w-16 bg-lime-900 border-2 rounded-xl"
                          >
                            <img className="w-5" src="/edit.svg" alt="edit" />
                          </span>
                          <span
                            onClick={handleButtonClick}
                            className="btn btn-ghost grow md:w-16 bg-pink-900 border-2 rounded-xl"
                          >
                            <img
                              className="w-5"
                              src="/delete.svg"
                              alt="delete"
                            />
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </form>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </article>
          ))
        ) : (
          error && <div>failed to load</div>
        )}
      </div>
    </section>
  )
}
export default Projects
