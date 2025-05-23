import React from 'react'
import "./nopage.scss"
function NoPage() {
  return (
    
    <div className='nopage'>
        <title>no page</title>
       <p> NoPage</p>
       <Link to='/home'><button>Go Home</button></Link>

    </div>
  )
}

export default NoPage