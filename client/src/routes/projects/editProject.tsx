import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { mutate } from 'swr'
import { RootState } from '../../../redux/store'

const EditProject = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const URI = import.meta.env.VITE_SERVER_URI
  const { projectData } = useSelector((state: RootState) => state.project)

  const formik = useFormik({
    initialValues: projectData || {
      title: '',
      image: '',
      description: '',
      live_url: '',
      github_url: '',
    },
    onSubmit: async (values) => {
      try {
        await axios.put(`${URI}/editProject/${id}`, values)
        const { data: projects } = await axios.get(`${URI}/getProjects`)
        mutate(`${URI}/getProjects`, projects, false)
        navigate('/projects')
      } catch (err) {
        console.log(err)
      }
    },
  })

  return projectData ? (
    <section className="mt-12 my-20 w-5/6 md:w-2/4 font-sans flex flex-col gap-10">
      <h1 className="text-center font-bungee text-2xl md:text-4xl text-lime-400">
        Edit Project
      </h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label className="label">
            <span className="text-base label-text">Title</span>
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Title"
            className="w-full input input-bordered input-primary"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div>
        <div>
          <label className="label">
            <span className="text-base label-text">Image Url</span>
          </label>
          <input
            id="image"
            name="image"
            type="text"
            placeholder="https://..."
            className="w-full input input-bordered input-primary"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
        </div>
        <div>
          <label className="label">
            <span className="text-base label-text">Description</span>
          </label>
          <input
            id="description"
            name="description"
            type="text"
            placeholder="Description"
            className="w-full input input-bordered input-primary"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </div>
        <div>
          <label className="label">
            <span className="text-base label-text">Live Url</span>
          </label>
          <input
            id="live_url"
            name="live_url"
            type="text"
            placeholder="https://..."
            className="w-full input input-bordered input-primary"
            onChange={formik.handleChange}
            value={formik.values.live_url}
          />
        </div>
        <div>
          <label className="label">
            <span className="text-base label-text">Github Url</span>
          </label>
          <input
            id="github_url"
            name="github_url"
            type="text"
            placeholder="https://..."
            className="w-full input input-bordered input-primary"
            onChange={formik.handleChange}
            value={formik.values.github_url}
          />
        </div>
        <button type="submit" className="btn btn-block btn-primary">
          Submit
        </button>
      </form>
    </section>
  ) : (
    <div>failed to load</div>
  )
}
export default EditProject
