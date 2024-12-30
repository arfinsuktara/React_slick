import React from 'react'
import Badge from './Badge'
import Image from './Image'
import cat from '../assets/cat.png'
import { FaHeart } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import Flex from './Flex'
import Heading from './Heading'


const Product = () => {
  return (
    <>
    <Badge badgeName={'New'} className={'absolute top-[25px] left-[25px]'}/>
    <Image imgsrc={cat}/>
    <div className='bg-white p-5 invisible group-hover:visible absolute bottom-[24px] left-0 w-full'>
      <Flex className={"justify-end items-center gap-x-2"}>
      Add to Wish List<FaHeart />
      </Flex>
      <Flex className={"justify-end items-center gap-x-2"}>
      Compare <FaArrowsRotate />
      </Flex>
      <Flex className={"justify-end items-center gap-x-2"}>
      Add to Cart<FaShoppingCart />
      </Flex>
    </div>
    <Flex className={"justify-between"}>
      <Heading as={"h3"} text={"Basic Crew Neck Tee"}/>
      <Heading as={"h3"} text={"$44.00"}/>

    </Flex>

  
    </>
   
  );
};

export default Product