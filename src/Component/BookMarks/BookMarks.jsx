import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';
const BookMarks = ({bookMarks}) => {
    return (
        <div className="md:w-1/3 ml-10 bg-slate-50 p-6 rounded-xl h-min">
            <h1 className='text-center text-2xl'>Bookmarks Blog:{bookMarks.length}</h1>
            {
                bookMarks.map(bookMark=> <BookMark 
                key={bookMark.id}
                bookMark={bookMark}
                ></BookMark>)
            }
        </div>
    );
};
BookMarks.propTypes = {
    bookMarks: PropTypes.object
}


export default BookMarks;