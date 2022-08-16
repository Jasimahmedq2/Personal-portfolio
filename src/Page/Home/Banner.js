import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typical from 'react-typical'
import {motion} from 'framer-motion'
import './Banner.css'


const Banner = () => {
  const transition = {duration: 2, type: 'spring'}
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);

  };

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",

            },
            size: {
              value: { min: 10, max: 20 },
            },
          },
          detectRetina: true,
        }}
      />
      <div class=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="flex items-center justify-around py-12 lg:flex-row-reverse">
          <motion.div
          initial={{left:'-26%'}}
          whileInView={{left: '-10%'}}
          transition={transition}
          className="face">
            <div className="eyes">
              <div className="eye"></div>
              <div className="eye"></div>
            </div>
            </motion.div>

            <div className="text-start text-white">
              <h2 className='font-bold text-xl'>Hi I'm</h2>
              <h1 class="text-5xl font-bold">Jasim Ahmed</h1>
              <h2 className="font-bold text-2xl text-accent flex py-5"><span className="mr-2">I'm a </span>  <Typical
                steps={['Web developer', 1000,
                  'React developer!', 3000,
                ]}
                loop={Infinity}
                wrapper="p"
              /></h2>

              <button class="btn btn-secondary">About</button>
            </div>

          </div>
          </div>
          </div>
     
       );
};
export default Banner;