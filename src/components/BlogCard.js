import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard({image, heading, description, content, date, commentsNo, id}) {

  const base_url = "http://localhost:8000/storage/"
  return (
    <div className="w3-card-4 w3-margin w3-white">
      <img
        src={`${base_url}/${image}`}
        alt="Nature"
        style={{ width: 100+"%" }}
      />
      <div className="w3-container">
        <h3>
          <b>{heading}</b>
        </h3>
        <h5>
          {description},{" "}
          <span className="w3-opacity">{date}</span>
        </h5>
      </div>
      <div className="w3-container">
        <p>
          {content}
        </p>
        <div className="w3-row">
          <div className="w3-col m8 s12">
            <p>
              <button className="w3-button w3-padding-large w3-white w3-border">
              <Link to={`/blogs/${id}`}><b>READ MORE »</b></Link>
              </button>
            </p>
          </div>
          <div className="w3-col m4 w3-hide-small">
            <p>
              <span className="w3-padding-large w3-right">
                <b>Comments &nbsp;</b> <span className="w3-tag">{commentsNo}</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default BlogCard
