import React from 'react'
import { Link } from 'react-router-dom';

function ProjectCard({image, tag, id}) {


  const base_url = 'http://localhost:8000/storage/';
  return (
    <Link to={`/projects/${id}`} >
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">{tag}</div>
        <img src={`${base_url}${image}`} alt="House" style={{width:100+"%"}} />
      </div>
    </div>
    </Link>
  )
}

export default ProjectCard
