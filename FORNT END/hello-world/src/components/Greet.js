import React from 'react'

const Greet = (props) =>  {
 console.log(props)
 return (
    <div>
 <h1> {props.name} Jobdesc {props.job} </h1>
 {props.resigned}
 </div>
)}

export default Greet
