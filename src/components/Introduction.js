import React from 'react'
import About from '../Screen/About'
import Author from './Author'
import Popular from './Popular'
import Tags from './Tags'

function Introduction() {
  return (
    
    <div className="w3-col l4">
      <Author />
      <Popular />
      <Tags />

    </div>
  )
}

export default Introduction

