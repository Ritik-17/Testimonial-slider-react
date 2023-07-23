import React, { useState } from 'react'
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Testimonials(props) {
  let  reviews = props.reviews;
  const [Index, setIndex] = useState(0);

  function leftShiftHandler(){
    if(Index -1 <0){
        setIndex(reviews.length-1);
    }
    else{
        setIndex(Index-1);
    }}

  function rigthShiftHandler(){
    if(Index +1 >=reviews.length){
        setIndex(0);
    }
    else{
        setIndex(Index+1);
    }}

  function surpriseHandler(){
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-lg rounded-md '>
        <Card review={reviews[Index]} />
        <div className='flex text-3xl mt-5 gap-5 text-violet-400 font-bold justify-center ' >
            <button className='cusor-pointer hover:text-violet-500 '
            onClick={leftShiftHandler} >
                <FiChevronLeft/>
            </button>
            <button className='cusor-pointer hover:text-violet-500 '
            onClick={rigthShiftHandler} >
                <FiChevronRight/>
            </button>
        </div>
        <div className='mt-7'>
            <button className='cusor-pointer bg-violet-400 hover:bg-violet-500 transition-all duration-200 px-10 py-2 rounded-md font-bold text-white text-lg ' 
            onClick={surpriseHandler} >
            Surprise Me
            </button>
        </div>       
    </div>
  )
}

export default Testimonials;