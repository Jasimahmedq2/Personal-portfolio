import React from 'react';
import { motion } from 'framer-motion'

const Projects = () => {
  const projectDetails = [
    {
      name: 'doctors-portal',
      image: 'https://i.ibb.co/FmngGct/pc.jpg'

    },
    {
      name: 'realtime chat app',
      image: 'https://i.ibb.co/r7bVv73/Ram-1.jpg'
    },
    {
      name: 'currency generate',
      image: 'https://i.ibb.co/DDwYNtv/banner-2.jpg'
    }

  ]
  return (
    <div className='py-12 px-12'>
      <h2 className='text-secondary font-bold text-2xl my-4'>My Recent Projects</h2>



      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          projectDetails.map(project => {
            return (
              <div class="card lg:max-w-lg bg-base-100 shadow-xl image-full">
                <figure><img src={project.image} alt="Shoes" /></figure>
                <div class="card-body">
                
                    <h2 class="hover:card-title">{project.name}</h2>
                    <p className='font-bold text-xl'>If a dog chews shoes whose shoes does he choose?</p>
                    <button className='btn btn-outline btn-primary'>view more</button>
                 

                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Projects;