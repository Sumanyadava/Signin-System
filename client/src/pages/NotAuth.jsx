import React from 'react'
import { Link } from 'react-router-dom'


const NotAuth = () => {
  return (
    <div className=' h-full flex flex-col justify-center items-center'>
      <h1 className='text-6xl  '>
        You are not authenticated to see this 
      </h1>
      

      <Link to="/" className="btn btn-warning mt-2" onClick={() => {navigate(-1)}}>
                  Go back
      </Link>
    </div>
  )
}

export default NotAuth