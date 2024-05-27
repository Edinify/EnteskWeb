import React from 'react'
import {Helmet} from "react-helmet";
import icon from '../../images/logoicon.png'

function HelmetFunction() {
  return (
    <Helmet>
      <title>Entesk</title>
      <link rel="icon" href={icon} />  
    </Helmet>
  )
}

export default HelmetFunction
