import { useEffect } from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleBookMark, readTimes}) => {
    const [Blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('../../../public/blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
           {
            Blogs.map(blog =><Blog 
            key={blog.id}
            handleBookMark={handleBookMark}
            readTimes={readTimes}
            blog={blog}
            ></Blog>)
           }
            
        </div>
    );
};
Blogs.propTypes = {
    handleBookMark: PropTypes.func,
    readTimes:PropTypes.func

}

export default Blogs;