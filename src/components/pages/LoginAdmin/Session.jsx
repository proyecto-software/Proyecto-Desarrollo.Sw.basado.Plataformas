import React,{Fragment, useState} from 'react'
import HeaderHome from '../homePage/HeaderHome'
import Login from './Login'

const Session = (props) => {
  
  return (
      <Fragment>
        <HeaderHome/>
        <Login />
      </Fragment>
  )
}

export default Session
