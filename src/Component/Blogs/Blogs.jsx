import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [Blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('../../../public/blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            <h1>hello:{Blogs.length}</h1>
        </div>
    );
};

export default Blogs;