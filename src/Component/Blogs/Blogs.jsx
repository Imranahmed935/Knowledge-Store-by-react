import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";



const Blogs = () => {
    const [Blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('../../../public/blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1>Blogs:{Blogs.length}</h1>
           {
            Blogs.map(blog =><Blog 
            key={blog.id}
            blog={blog}
            ></Blog>)
           }
            
        </div>
    );
};

export default Blogs;