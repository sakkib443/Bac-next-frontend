import React from 'react'
import SectionHeading from '../sheard/SectionHeading'
import PopularCourseCard from './PopularCourseCard'
 

const PopularCourse = () => {
  return (
    <div> 
        <div className="py-16 w-11/12 mx-auto rounded-2xl">
        <SectionHeading
          title={"Popular Courses"}
          description={
            "At Bdcalling Academy, we provide skill-based training programs customized to meet the evolving needs of today’s job market. Whether you're just beginning your career or looking to upgrade your professional expertise, our flexible learning options are designed to help you stay competitive and confident in the digital workforce."
          }
        /> 
        <PopularCourseCard/>
        
      </div>
    </div>
  )
}   

export default PopularCourse