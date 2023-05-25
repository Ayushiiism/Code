import React from 'react'
import './Practice.css'
import Navbar from '../Navbar/Navbar'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Topic from './Topic';
import {Array,TwoPointer,WindowSliding} from './Questions';
export default function Practice() {

  let topics=["Arrays","Two Pointers","Window Sliding"]
  // ,,"Stack",
  //             "Binary Search","Linked List","Trees","Heap/Priority Queue",
  //             "Backtracking","Graph","1D DP","2D DP",
  //             "Greedy","Bit Manipulation"]
  let topicsQuestion=[Array,TwoPointer,WindowSliding];
  return (
    <>
    <Navbar/>
    <div className='PracticeWrapper'> 
    {
      topics.map((cur,index)=>{
       return (
        <Topic topicName={cur} Sr={index} topicsQuestion={topicsQuestion} />
        )
      })
    }   
</div>

    </>
  )
}
