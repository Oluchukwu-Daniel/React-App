import React from 'react'
import AboutCard from '../components/AboutCard'

function About() {
  return (
  <div>
    <div className="w3-container w3-padding-32" id="about">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>

    <div className="w3-row-padding w3-grayscale">
      <AboutCard 
      image = "w3images/team2.jpg"
      name = "John Doe"
      title = "CEO & Founder"
      />

      <AboutCard 
      image = "w3images/team1.jpg"
      name = "Jane Doe"
      title = "Architect"
      />

      <AboutCard 
      image = "w3images/team3.jpg"
      name = "Mike Ross"
      title = "Architect"
      />

      <AboutCard 
      image = "w3images/team3.jpg"
      name = "Dan Star"
      title = "Architect"
      />
    </div>

  </div>
  )
}

export default About
