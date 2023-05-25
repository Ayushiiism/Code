import React from 'react'
import './Practice.css'
import Navbar from '../Navbar/Navbar'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Array from './Questions';
export default function Topic({topicName,Sr}) {
    function getProgressbar() {
        const now = 25;
        return <ProgressBar now={now} label={`${now}%` } />;
      }
  return (
   <div class="accordion" id="accordionExample" >
      <div class="accordion-item">
    <h2 class="accordion-header" id={`${Sr}`}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${Sr}`} aria-expanded="false" aria-controls={`#flush-collapse${Sr}`}>
       
        <div className='btn-div'>
        <div>{topicName}</div>
        <div>
          {getProgressbar()}
        </div>
        </div>
      </button>
    </h2>
    <div id={`flush-collapse${Sr}`} class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
    </div>
  )
}
