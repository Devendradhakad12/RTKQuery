import { FormEvent, useState } from 'react'
import './App.css'
import PostCard from './components/PostCard'
import { useGetPostsQuery, useNewPostMutation } from './redux/api'
import { PostTypes } from './types'

function App() {
  const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery("")
  console.log(isLoading, isError, isSuccess, data, error)
  const [newPost] = useNewPostMutation()
  const [title, setTitle] = useState("");
  const [views, setViews] = useState(0);
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const post: PostTypes = {
      title, views, id: `${Date.now()}`
    }
    newPost(post)
    setTitle("")
    setViews(0)
  }
  return (
    <>
      <div>

        <form onSubmit={submitHandler}>
          <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="number" placeholder='Views' value={views} onChange={(e) => setViews(Number(e.target.value))} />
          <button>Add</button>
        </form>
        {
          data?.map((i, index) => (
            <PostCard title={i.title} views={i.views} id={i.id} key={index} />
          ))
        }
      </div>
    </>
  )
}

export default App
