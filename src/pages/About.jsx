import React from 'react'
import { Link , Outlet } from 'react-router-dom'

const About = () => {
  return (
    <>
    <h1>About</h1>
    <Link to="">Person 1</Link>
    <Link to="person2">Person 2</Link>
    <Link to="person3">Person 3</Link>
    <Outlet />
    </>
  )
}

export default About