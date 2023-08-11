import React from 'react'

const Greet = (props) =>  {
 console.log(props)
 return<h1> {props.name} Jobdesc {props.job} </h1>
}

export default Greet
