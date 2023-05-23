import { ThreeCircles } from 'react-loader-spinner';
import './styles.css';

const Loader = () => {
  return (
    <div className='loaderContainer'>
      <ThreeCircles
        height="80"
        width="80"
        color="tomato"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default Loader;
