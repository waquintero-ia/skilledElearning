import PropTypes from 'prop-types';

const Card = ({svg, title, description, button}) => {  
  return (
    <div className="card-container">
      <img className='pl-8' src={svg} loading='lazy' decoding='async' alt={title}/>
      
      <div className='card-content px-8 pt-16 pb-10 -mt-28 flex flex-col gap-6 rounded-[15px] shadow-card-shadow bg-white md:h-322'>
        <h2 className='font-extrabold text-blue-900 text-xl leading-tight xl-custom:text-2xl'>
          {title}
        </h2>
        <p className='text-grey font-bold md:text-lg leading-normal md:font-medium md:h-118'>
          {description}  
        </p>
        <a className='text-pink-600 font-bold text-lg md:items-end hover:text-pink-300 focus:text-pink-300 active:text-pink-300 cursor-pointer' tabIndex={0}>
          {button}
        </a>
      </div>
    </div>
  )
}

// Definir las validaciones de las props
  Card.propTypes = {
  svg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};


export default Card