import React from 'react';
import react from '../../image/react.png'
import mongodb from '../../image/mongodb.png'
import node from '../../image/node.png'
import express from '../../image/express.png'
import {motion} from 'framer-motion'
import js from '../../image/js.png'


import './AboutMe.css'

const AboutMe = () => {
  return (
    <div className='flex justify-between items-center my-12  px-12' id='/about'>
      <div className='text-start w-1/2'>
        <h2 className='font-bold text-2xl text-secondary pb-12 '>About Me</h2>
        <div>
          <h2 className='text-xl text-natural font-bold pb-5'>I'm a Full Stack web developer</h2>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quisquam maiores mollitia dolorum ea obcaecati deleniti nostrum sequi! Iure assumenda laboriosam repudiandae voluptatem natus tenetur, blanditiis accusantium magni quo iste.</h2>
        </div>

      </div>

      <div className='right-side'>
        <motion.div
        initial={{rotate: 45}}
        whileInView={{rotate: 0}}
        viewport={{margin: '-40px'}}
        transition={{duration: 3.5, type: 'spring'}}        
        className='main-circle shadow-lg'>
          <div className='sec-circle shadow-lg'>
            <img src={mongodb} alt="" />
          </div>
          <div className='sec-circle shadow-lg'>
            <img src={node} alt="" />
          </div>
          <div className='sec-circle shadow-lg'>
            <img src={react} alt="" />
          </div>
          <div className='sec-circle shadow-lg'>
            <img src={js} alt="" />
          </div>
          <div className='sec-circle shadow-lg'>
            <img src={express} alt="" />
          </div>

         

        </motion.div>
        <div className='background-color blue-circle'>

</div>
<div className='background-color secondary-circle'>

</div>

      </div>
    </div>
  );
};

export default AboutMe;