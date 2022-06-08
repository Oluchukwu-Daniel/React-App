import React from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectCardRow from '../components/ProjectCardRow'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router';

function Project() {
  const [data, setData] = useState([]);
  const {id} = useParams();

  const getAllProjects = () => {

    fetch('http://localhost:8000/api/projects')
    .then(res => res.json())
    .then(json => {

      localStorage.setItem('data', JSON.stringify(json));
      setData(json.data);
    })
  }

  useEffect(() => {
    getAllProjects();
    
  }, [])

  return (

    <div>
        
      <div className="w3-container w3-padding-32" id="projects">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
      </div>

      
      <div class = "w3-row-padding">

        {data.map((item) => (

          <ProjectCard 
          tag = {item.title}
          image = {item.file_path}
          id = {item.id}
          />

        ))}
      </div>
    </div>
    
  )
}

export default Project
