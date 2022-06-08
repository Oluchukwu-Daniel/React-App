import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectCardRow() {
  return (
    <div className="w3-row-padding">
      <ProjectCard 
        tag = "Summer House"
        image = "w3images/house5.jpg"
        />

        <ProjectCard 
        tag = "Brick House"
        image = "w3images/house2.jpg"
        />
        
        <ProjectCard 
        tag = "Renovated"
        image = "w3images/house3.jpg"
        />

        <ProjectCard 
        tag = "Barn House"
        image = "w3images/house4.jpg"
        />
    </div>
  )
}//was not used any longer as we needed to use it to practice fetching API

export default ProjectCardRow
