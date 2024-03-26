import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import BookMarks from './Component/BookMarks/BookMarks'
import Header from './Component/Header/Header'

function App() {
  const [bookMarks, setBookmarks] = useState([]);

const handleBookMark = (blog)=>{
  const newBlog = [...bookMarks, blog]
  setBookmarks(newBlog)
}
  return (
    <>
      <Header></Header>
       <div className='container mt-12 md:flex max-w-7xl mx-auto'> 
       <Blogs handleBookMark={handleBookMark}></Blogs>
       <BookMarks bookMarks={bookMarks}></BookMarks>
       </div>
    </>
  )
}

export default App
