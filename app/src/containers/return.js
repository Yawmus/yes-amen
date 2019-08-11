import React from 'react'
import { Redirect } from 'react-router-dom'

//const GoHome = () => <h1>Not found</h1>
const RedirectTo = (path) => {
  return <Redirect to={`${path}`} />
}
export default RedirectTo
