
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import BookMarks from './Component/BookMarks/BookMarks'
import Header from './Component/Header/Header'

function App() {


  return (
    <>
      <Header></Header>
       <div className='container mt-12 md:flex max-w-7xl mx-auto'> 
       <Blogs></Blogs>
       <BookMarks></BookMarks>
       </div>
    </>
  )
}

export default App
