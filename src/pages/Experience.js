import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
            className='vertical-timeline-element--education' 
            date='2007 - 2013'
            iconStyle={{background: "#3e497a", color:"#fff"}}
            icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
             Elementary School | Pogo-Palua Elementary School
          </h3>
          <p> Elementary Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
            className='vertical-timeline-element--education' 
            date='2013 - 2016'
            iconStyle={{background: "#3e497a", color:"#fff"}}
            icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
             Junior High School | Mangaldan National Highschool 
          </h3>
          <p> High School Diploma </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
            className='vertical-timeline-element--education' 
            date='2016 - 2018'
            iconStyle={{background: "#3e497a", color:"#fff"}}
            icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
             Senior High School | PHINMA University of Pangasinan
          </h3>
          <p> 
            High School Diploma
            <br></br>With Honor
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
            className='vertical-timeline-element--education' 
            date='2014 -present'
            iconStyle={{background: "#fcba03", color:"#fff"}}
            icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
             College BSIT | PHINMA University of Pangasinan
          </h3>
          <p> BSIT focus of Web Development Full Stack </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience