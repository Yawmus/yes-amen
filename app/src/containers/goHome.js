import React from 'react'
import { Redirect } from 'react-router-dom'

//const GoHome = () => <h1>Not found</h1>
const GoHome = () => <Redirect to='/home' />
export default GoHome
