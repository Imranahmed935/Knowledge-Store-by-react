import PropTypes from 'prop-types';

const Blog = ({blog}) => {
  const {title, cover,author,author_img,posted_date,reading_time,hashtags}=blog
  console.log(author_img)
    return (
        <div className='mb-14'>
            <img className='w-full rounded-xl ' src={cover}alt="" />
            <div className='flex justify-between mt-4 mb-4'>
                <div  className='flex gap-4'>
                    <img className='w-10 h-10 rounded-full' src={author_img} alt="" />
                    <div>
                        <h4 className='text-2xl'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <h5>{reading_time} min read</h5>
                </div>
            </div>
            <h1 className='text-3xl'>{title}</h1>

            {
                hashtags.map((hash, idx)=><span className='mr-4' key={idx}>#{hash}</span>)
            }
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object
}

export default Blog;