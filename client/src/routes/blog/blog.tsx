import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import axios from 'axios'
import { IPost } from '../../types/postTypes'
import ProjectLoading from '../../components/ProjectLoading'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../../../redux/blogSlice'
import { RootState } from '../../../redux/store'

const Blog = () => {
  const URI: string = import.meta.env.VITE_SERVER_URI
  const EMAIL = import.meta.env.VITE_ADMIN_EMAIL

  const dispatch = useDispatch()
  const navigate = useNavigate()
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

  const postFetcher = async (URI: string) => {
    try {
      const { data } = await axios.get<IPost[]>(URI)
      return data
    } catch (err) {
      console.log(err)
    }
  }

  const { data, error, isLoading } = useSWR<IPost[] | undefined>(
    `${URI}/getPosts`,
    postFetcher
  )

  const toDetail = (id: string) => {
    const post = data?.find((post) => post._id === id)
    dispatch(getPost(post))
    navigate('/blog/post/' + id)
  }

  return (
    <section className="mt-12 my-20 w-5/6 md:w-2/4 flex flex-col gap-10">
      <h1 className="text-center font-bungee text-2xl md:text-4xl text-white text-opacity-50">
        Blog
      </h1>
      {user?.email === EMAIL ? (
        <NavLink className="btn text-center" to="add">
          Add New Content
        </NavLink>
      ) : (
        <>
          <button onClick={handleButtonClick} className="btn text-center">
            Add New Content
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
      <article className=" space-y-20">
        {isLoading ? (
          <>
            <ProjectLoading />
            <ProjectLoading />
            <ProjectLoading />
            <ProjectLoading />
          </>
        ) : data ? (
          data.map((post) => (
            <div
              onClick={() => toDetail(post._id)}
              key={post._id}
              className="border-4 border-white card glass cursor-pointer"
            >
              <figure className="h-80 bg-white/10 overflow-hidden">
                <img
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                  src={post.image}
                  alt={post.title}
                />
              </figure>
              <div className="h-20 card-body px-5 py-3">
                <h2 className="font-genos card-title text-2xl mt-2 ms-5">
                  {post.title}
                </h2>
              </div>
            </div>
          ))
        ) : (
          error && <div>failed to load</div>
        )}
      </article>
    </section>
  )
}
export default Blog
