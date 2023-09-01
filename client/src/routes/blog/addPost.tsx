import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddPost = () => {
  const navigate = useNavigate()
  const url = import.meta.env.VITE_SERVER_URI

  const formik = useFormik({
    initialValues: {
      title: '',
      image: '',
      content: '',
    },
    onSubmit: async (values) => {
      try {
        await axios.post(`${url}/createPost`, values)
        navigate('/blog')
      } catch (err) {
        console.log(err)
      }
    },
  })

  return (
    <section className="mt-12 my-20 w-5/6 md:w-2/4 font-sans flex flex-col gap-10">
      <h1 className="text-center font-bungee text-2xl md:text-4xl text-lime-400">
        Add New Content
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
            <span className="text-base label-text">Content</span>
          </label>
          <textarea
            id="content"
            name="content"
            placeholder="Once upon a time..."
            className="w-full h-52 py-4 input input-bordered input-primary"
            onChange={formik.handleChange}
            value={formik.values.content}
          />
        </div>

        <button type="submit" className="btn btn-block btn-primary">
          Submit
        </button>
      </form>
    </section>
  )
}
export default AddPost
