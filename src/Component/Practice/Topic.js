import React, { useState } from 'react'
import './Practice.css'
import Navbar from '../Navbar/Navbar'
import ProgressBar from 'react-bootstrap/ProgressBar';

import { green, red } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
export default function Topic({topicName,Sr,topicsQuestion}) {

   const [progressCount,setProgress]=useState(0)
   const [checkedColor,setCheckedColor]=useState(0)
    function getProgressbar() {
        return <ProgressBar now={progressCount} label={`${Math.floor(progressCount)}%`} />;
      }
    const checkBoxHandle=(e,len)=>{
      const {checked } = e.target;
      if(checked){
        setProgress(prev=>prev+(100/len));
        setCheckedColor(1)
      }
      else{
        setCheckedColor(0)
        setProgress(prev=>prev-(100/len));
      }    
      
    }
  return (
   <div class="accordion" id="accordionExample" >
      <div class="accordion-item">
    <h2 class="accordion-header" id={`${Sr}`}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${Sr}`} aria-expanded="false" aria-controls={`#flush-collapse${Sr}`}>
       
        <div className='btn-div'>
        <div>{topicName}</div>
        
        <div className='btn-div'> 
        <div>Progress</div>
          {getProgressbar()}
        </div>
        </div>
      </button>
    </h2>
    <div id={`flush-collapse${Sr}`} class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
     
      <div class="accordion-body">
      {
       
       <div className="table">
       <div className="table-format">
         <table className="table">
           <thead className="thread1">
             <tr className="tableHeader">
               <th className="table-align-left" scope="col">
                 Status
               </th>
               <th className="table-align-left" scope="col">                    
                   Title                 
               </th>
               <th className="table-align-left" scope="col">
                 Difficulty
               </th>              
             </tr>
           </thead>
           <tbody >
             {
              topicsQuestion[Sr] &&
               topicsQuestion[Sr].map((ele,index) =>
                (
                
                   <tr style={checkedColor?{backgroundColor:'#D4F1F4'}:{backgroundColor:'#white'}}>
                     <th className="table-align-left">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e)=>checkBoxHandle(e,topicsQuestion[Sr].length)}/>
                     </th>
                     <td
                       className="pointer-to-profile"
                       title="View profile"
                       scope="row"                            
                     >
                     <a className='que-link' href={ele.Que}>{ele.Name}</a>
                     </td> 
                     <td>
                     <Chip label={ele.Level}  variant={"filled"} color={ele.Level=="Easy"?"success":ele.Level=="Hard"?"error":"warning"} />
                     </td>                        
                   </tr>
                  
                 ) 
               )}
           </tbody>
         </table>
       </div>
     </div>
     }
      </div>    
    </div>
    </div>
    </div>
  )
}
