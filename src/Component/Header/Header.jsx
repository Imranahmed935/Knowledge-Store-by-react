import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header  className="container max-w-7xl mx-auto flex justify-between items-center p-5 border-b-2 max-w-9/12">
          <h1 className='text-3xl bg-lime-500 rounded p-4'>Knowledge</h1>
          <img src={profile} alt="" />
        </header>
    );
};

export default Header;