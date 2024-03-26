import PropTypes from 'prop-types';

const BookMark = ({bookMark}) => {
    return (
        <div className='p-4 bg-slate-200 text-xl rounded-xl mt-2'>
          {bookMark.title}
        </div>
    );
};
BookMark.propTypes = {
    bookMark: PropTypes.object
}

export default BookMark;