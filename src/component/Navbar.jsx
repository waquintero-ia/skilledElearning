const Navbar = () => {
  return (
    <nav className='px-5 py-4 flex justify-between md:px-11 md:py-6 xl-custom:px-20 xl-custom:justify-center'>
      <div className="nav-container flex justify-between custom-344:w-full xs:w-full xl-custom:w-1120">
        <div className='flex justify-center items-center'>
          <img className='h-5 w-20 xl-custom:h-7 xl-custom:w-111' src='/assets/logo-dark.svg' loading='lazy' decoding='async' alt='skilled'/>
        </div>
        <a className='text-lg font-bold leading-normal w-168 h-59 flex justify-center items-center bg-blue-900 rounded-full text-white md:w-152 md:h-48  hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-600 cursor-pointer z-10' tabIndex={0}>Get Started</a>
      </div>
 </nav>
  )
}

export default Navbar