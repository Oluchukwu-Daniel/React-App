import React from 'react'
import Input from '../components/Input'

function Contact() {
  return (
    <div>
      <div className="w3-container w3-padding-32" id="contact">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
        <p>Lets get in touch and talk about your next project.</p>
        <form action="/action_page.php" target="_blank">
          <Input 
          type = "text"
          placeholder = "Name"
          name = "name"
          />
          <Input 
          type = "email"
          placeholder = "Email"
          name = "name"
          />
          <Input 
          type = "text"
          placeholder = "Subject"
          name = "subject"
          />
          <Input 
          type = "text"
          placeholder = "Comment"
          name = "comment"
          />
          <button className="w3-button w3-black w3-section" type="submit">
            <i className="fa fa-paper-plane"></i> SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
