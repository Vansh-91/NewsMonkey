import React, { Component } from 'react'
import loading from '../assets/loading.gif';
const Spinner=()=>{
    return (
      <div className="text-center">
        <img src={loading} alt="loading" style={{ width: "50px" }}></img>
      </div>
    )
  }

export default Spinner