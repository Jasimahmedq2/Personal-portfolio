import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
{/* document.querySelector('body').addEventListener('mousemove', eyeball)
function eyeball(){
  var eye = document.querySelectorAll('.eye')
  eye.forEach(function(eye){
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2)
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2)
    let radian = Math.atan2(event.pageX - x, event.pageY - y)
    let rot = (radian * (180 / PI) * -1) + 270;
    eye.style.transform = 'rotate('++')'

  }) 

*/}
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
