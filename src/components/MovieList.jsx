import PropTypes from 'prop-types';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1200, min: 600 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2
    }
  };


const MovieList = ({title, data}) => {
    return (
        <div className='my-10 px-10 max-w-full '>
            <h2 className='text-xl text-white uppercase mb-4'>{title}</h2>
            <Carousel responsive={responsive} className='flex items-center space-x-4'>
            {data.length > 0 && data.map(item => (
                    <div key={item.id} className='w-[200px] h-[300px] relative group'>
                        <img className='w-full h-full object-cover group-hover: scale-10 transition-transform duration-500 ease-in-out' src={`${import.meta.env.VITE_IMAGE_URL}${item.backdrop_path}`} alt="" />
                        <div className='absolute top-0 left-0 w-full h-full bg-black/40'></div>
                        <div className='absolute bottom-4 left-4'>
                            <p className='text-white uppercase'>{item.title}</p>
                        </div>     
                   </div>
                ))}
            </Carousel>
           
               
            </div>
        
    )
}

MovieList.propTypes = {
    title: PropTypes.string,
}

export default MovieList