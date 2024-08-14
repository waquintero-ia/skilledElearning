const Hero = () => {
  return (
    <div className="hero-container px-5 py-16 md:flex md:flex-row md:px-11 md:py-16 gap-6 xl-custom:px-20 xl-custom:gap-8 xl-custom:justify-center md:justify-center">
      <div className="hero-content flex flex-col gap-12">
        <div className="content-description flex flex-col gap-40 md:py-41.5 xl-custom:py-110.5">
          <div className="content-description-tile flex flex-col gap-6 md:w-328 xl-custom:w-544 xl-custom:pr-87">
            <h1 className="font-extrabold text-4xl leading-tight pr-9 text-blue-900 md:p-0  xl-custom:w-full xl-custom:text-5xl">
              Maximize skill, minimize budget
            </h1>
            <p className="text-grey text-lg pr-9 md:p-0">
              Our modern courses across a range of in-demand skills will give you the 
              knowledge you need to live the life you want.
            </p>
          </div>
          <a className="relative bg-gradient-to-b from-custom-start to-custom-end w-168 h-59 rounded-full text-white flex justify-center items-center font-bold text-lg md:w-152 md:h-48 xl-custom:w-168 xl-custom:h-59 cursor-pointer z-10 overflow-hidden group" tabIndex={0}>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 group-focus:opacity-50 group-active:opacity-50 rounded-full transition-opacity duration-300 z-0"></div>
            <span className="relative z-10">Get Started</span>
          </a>
          </div>
        <div className="container-image-mobile flex justify-center items-center h-320 md:hidden z-0">
          <img className='mb-[-60px] scale-[128%] background' src='/assets/image-hero-mobile.png' loading='lazy' decoding='async' alt='women drinking coffee'/>
        </div>
      </div>

      <div className="hero-image-container w-328 h-400 custom-344:hidden xs:hidden md:block xl-custom:hidden z-0">
        <img className="scale-[210%] mt-[-50px] ml-[160px]" src="/assets/image-hero-tablet.png"/>
      </div>

      <div className="hero-image-container w-544 h-400 custom-344:hidden xs:hidden md:hidden xl-custom:w-544 xl-custom:block z-0">
        <img className="scale-[190%] mt-[-85px] ml-[240px]" src="/assets/image-hero-desktop.png"/>
      </div>

    </div>
  )
}

export default Hero