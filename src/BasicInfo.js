import logo from './logo.svg';
import './App.css';
import React from 'react';

class BaseIn extends React.Component{

    constructor(props){
        super(props)
    this.state =
    {
         Name: 'Chioma Onukogu',
         DoB: 'June 5, 1998',
         Number: '111-222-3333'
    }
}

    render(){
  return (
    <>
    <ul>
    {Object.values(this.state)}
    </ul>
    </>
  )
    }
}

export default BaseIn;
