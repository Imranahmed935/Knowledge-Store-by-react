import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';
const BookMarks = ({bookMarks, readingTimes}) => {
    return (
        <div className="md:w-1/3 ml-10 bg-slate-50 p-6 rounded-xl h-min">
             <h2 className='text-center p-4 rounded-xl text-2xl bg-green-300 mb-2'>reading time {readingTimes} mins</h2> 
            <h1 className='text-center text-3xl'>Bookmarks Blog:{bookMarks.length}</h1>
            {
                bookMarks.map((bookMark, idx)=> <BookMark 
                key={idx}
                bookMark={bookMark}
                ></BookMark>)
            }
        </div>
    );
};
BookMarks.propTypes = {
    bookMarks: PropTypes.array,
    readingTimes: PropTypes.number
}


export default BookMarks;