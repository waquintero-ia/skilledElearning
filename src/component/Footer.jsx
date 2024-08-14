const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content flex justify-between h-96 bg-blue-900 px-5 py-6 md:px-11 xl-custom:h-107 xl-custom:px-20 xl-custom:justify-center">
        <div className="footer-container flex justify-between xl-custom:w-1120 custom-344:w-full xs:w-full">
        <div className="container-image flex items-center">
          <img className="h-5 xl-custom:h-7 xl-custom:w-111" src="./assets/logo-light.svg" loading="lazy" decoding="async" alt="skilled"/>
        </div>

        <a className="relative bg-gradient-to-b from-another-start to-custom-end w-152 h-48 rounded-full text-white flex justify-center items-center font-bold text-lg md:w-152 md:h-48 xl-custom:w-168 xl-custom:h-59 cursor-pointer z-10 overflow-hidden group" tabIndex={0}>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 group-focus:opacity-50 group-active:opacity-50 rounded-full transition-opacity duration-300 z-0"></div>
            <span className="relative z-10">Get Started</span>
        </a>
        
        </div>
      </div>
    </div>
  )
}

export default Footer