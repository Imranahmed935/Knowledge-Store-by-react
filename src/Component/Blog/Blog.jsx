import PropTypes from 'prop-types';
import { MdBookmarks } from "react-icons/md";

const Blog = ({blog, handleBookMark, readTimes}) => {
  const {title, cover,author,author_img,posted_date,reading_time,hashtags}=blog
    return (
        <div className='mb-14'>
            <img className='w-full rounded-xl ' src={cover}alt="" />
            <div className='flex justify-between items-center mt-4 mb-4'>
                <div  className='flex gap-4'>
                    <img className='w-10 h-10 rounded-full' src={author_img} alt="" />
                    <div>
                        <h4 className='text-2xl'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-3 '>
                    <h5>{reading_time} min read</h5>
                    <button className='text-yellow-500 text-xl' onClick={()=>handleBookMark(blog)}><MdBookmarks/></button>
                </div>
            </div>
            <h1 className='text-3xl'>{title}</h1>

            {
                hashtags.map((hash, idx)=><span className='mr-4' key={idx}>#{hash}</span>)
            }

           <h3 
           onClick={()=>readTimes(reading_time)}
           className='text-blue-500 mt-4 cursor-pointer pointer underline'
           >Mark as read</h3>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    handleBookMark:PropTypes.func,
    readTimes:PropTypes.func
}

export default Blog;