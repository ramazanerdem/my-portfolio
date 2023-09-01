import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PostDetails = () => {
  const URI = import.meta.env.VITE_SERVER_URI
  const EMAIL = import.meta.env.VITE_ADMIN_EMAIL
  const navigate = useNavigate()
  const { postData: post } = useSelector((state: RootState) => state.post)
  const { userData: user } = useSelector((state: RootState) => state.users)

  const handleDelete = async (id: string) => {
    try {
      const confirmed = window.confirm('Are you sure?')
      confirmed && (await axios.delete(`${URI}/deletePost/${id}`))
      // mutate(URI)
      user?.email === EMAIL && navigate('/blog')
    } catch (err) {
      console.log(err)
    }
  }
  const handleEdit = async (id: string) => {
    try {
      user?.email === EMAIL && navigate('/blog/edit/' + id)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <section className="mt-12 my-20 w-5/6 md:w-2/4 font-sans flex flex-col gap-10">
      <div className="h-80 overflow-hidden flex items-center">
        <img
          className="w-full object-center"
          src={post?.image}
          alt={post?.title}
        />
      </div>
      {user?.email === EMAIL ? (
        <article className="space-y-2">
          <button
            onClick={() => handleEdit(post?._id!)}
            className="btn btn-ghost w-full grow bg-lime-900 border-2 rounded-xl"
          >
            <img className="w-5" src="/edit.svg" alt="edit" />
          </button>
          <button
            onClick={() => handleDelete(post?._id!)}
            className="btn btn-ghost w-full grow bg-pink-900 border-2 rounded-xl"
          >
            <img className="w-5" src="/delete.svg" alt="delete" />
          </button>
        </article>
      ) : null}
      <h1 className="font-bungee text-2xl md:text-3xl">{post?.title}</h1>
      <p className="whitespace-pre-line">{post?.content}</p>
    </section>
  )
}
export default PostDetails
