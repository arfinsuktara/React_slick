
import './App.css'
import Image from './components/Image'
import Logo from '../src/assets/Logo (3).png'
import Container from './components/Container'
import Flex from './components/Flex'
import Menu from './components/Menu'
import { HiBars3BottomLeft } from "react-icons/hi2";
import Heading from './components/Heading'
import { FaSearch,FaCarSide,FaUndo   } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import BannerImg from './components/BannerImg'
import { PiNumberTwoBold } from "react-icons/pi";
import Ad_1 from './assets/Ad_1.jpg'
import Ad_2 from './assets/Ad_2.png'
import Ad_3 from './assets/Ad_3.jpg'
import Product from './components/Product'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import PrevArrow from './components/PrevArrow'
import NextArrow from './components/NextArrow'







function App() {
  var settings = {
  
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow/>,
    arrows: true,
    nextArrow: <NextArrow/>,
  };
  
  return (
   
  
    <>
    
   <Container className={"max-w-headerContainer"}>
   <Slider {...settings}>
      
      <div className='relative group w-[full] px-2'>
       <Product/>
      </div>

      <div className='relative group px-2'>
       <Product/>
      </div>

      <div className='relative group px-2'>
       <Product/>
      </div>

      <div className='relative group px-2'>
       <Product/>
      </div>

      <div className='relative group px-2'>
       <Product/>
      </div>
      
    </Slider>
   </Container>
    
   


    
    </>
  );
}

export default App
