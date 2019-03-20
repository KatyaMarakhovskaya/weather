import React, { Component } from 'react';

const Form =(props)=>(
  <form onSubmit={props.weatherMethod}>
    <input type='text' name='city' placeholder='CITY'/>
    <button>Find out the weather</button>
  </form>
)

export default Form;
