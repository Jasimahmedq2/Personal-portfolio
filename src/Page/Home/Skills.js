import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import ChangingProgressProvider from "./ChangingProgressProvider";
import 'react-circular-progressbar/dist/styles.css';


const parcentage = 80;
const parcentage2 = 90;
const parcentage3 = 70;

const Skill = () => (
<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-12 gap-5'>
<div className='text-start'>
  <div style={{width: '5rem'}}>
    <ChangingProgressProvider values={[0, 80]}>
      {percentage => (
        <CircularProgressbar value={parcentage} text={`${parcentage}%`} />
      )}
    </ChangingProgressProvider>
  </div>
  <h2 className='font-bold text-secondary text-xl mx-2 py-3'>REACT</h2>

</div>

<div className='text-start'>
  <div style={{width: '5rem'}}>
    <ChangingProgressProvider values={[0, 90]}>
      {percentage => (
        <CircularProgressbar value={parcentage2} text={`${parcentage2}%`} />
      )}
    </ChangingProgressProvider>
  </div>
  <h2 className='font-bold text-secondary text-xl mx-3 py-3'>NODE</h2>

</div> 
<div className='text-start'>
  <div style={{width: '5rem'}}>
    <ChangingProgressProvider values={[0, 70]}>
      {percentage => (
        <CircularProgressbar value={parcentage3} text={`${parcentage3}%`} />
      )}
    </ChangingProgressProvider>
  </div>
  <h2 className='font-bold text-secondary text-xl py-3'>MONGODB</h2>

</div>


<div className='text-start'>
  <div style={{width: '5rem'}}>
    <ChangingProgressProvider values={[0, 90]}>
      {percentage => (
        <CircularProgressbar value={parcentage2} text={`${parcentage2}%`} />
      )}
    </ChangingProgressProvider>
  </div>
  <h2 className='font-bold text-secondary text-xl  py-3'>EXPRESS</h2>

</div> 


<div className='text-start'>
  <div style={{width: '5rem'}}>
    <ChangingProgressProvider values={[0, 90]}>
      {percentage => (
        <CircularProgressbar value={parcentage2} text={`${parcentage2}%`} />
      )}
    </ChangingProgressProvider>
  </div>
  <h2 className='font-bold text-secondary text-xl  py-3'>JAVASCRIPT</h2>

</div> 


<div className='text-start'>
  <div style={{width: '5rem'}}>
    <ChangingProgressProvider values={[0, 90]}>
      {percentage => (
        <CircularProgressbar value={parcentage2} text={`${parcentage2}%`} />
      )}
    </ChangingProgressProvider>
  </div>
  <h2 className='font-bold text-secondary text-xl px-4  py-3'>HTML</h2>

</div> 

<div className='text-start'>
  <div style={{width: '5rem'}}>
    <ChangingProgressProvider values={[0, 90]}>
      {percentage => (
        <CircularProgressbar value={parcentage2} text={`${parcentage2}%`} />
      )}
    </ChangingProgressProvider>
  </div>
  <h2 className='font-bold text-secondary px-5 text-xl  py-3'>CSS</h2>

</div> 


<div className='text-start'>
  <div style={{width: '5rem'}}>
    <ChangingProgressProvider values={[0, 90]}>
      {percentage => (
        <CircularProgressbar value={parcentage2} text={`${parcentage2}%`} />
      )}
    </ChangingProgressProvider>
  </div>
  <h2 className='font-bold text-secondary text-xl  py-3'>TAILWIND</h2>

</div> 


<div className='text-start'>
  <div style={{width: '5rem'}}>
    <ChangingProgressProvider values={[0, 90]}>
      {percentage => (
        <CircularProgressbar value={parcentage2} text={`${parcentage2}%`} />
      )}
    </ChangingProgressProvider>
  </div>
  <h2 className='font-bold text-secondary text-xl py-3'>BOOTSTRAP</h2>

</div> 


<div className='text-start'>
  <div style={{width: '5rem'}}>
    <ChangingProgressProvider values={[0, 90]}>
      {percentage => (
        <CircularProgressbar value={parcentage2} text={`${parcentage2}%`} />
      )}
    </ChangingProgressProvider>
  </div>
  <h2 className='font-bold text-secondary px-6 text-xl  py-3'>API</h2>

</div>
</div> 
)

const Skills = () => {



  return (
    <>
    
 <Skill />

    </>
  );
};

export default Skills;