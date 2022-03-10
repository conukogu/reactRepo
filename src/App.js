import logo from './logo.svg';
import './App.css';
import React from 'react';
import BaseIn from './BasicInfo';

class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={
      person:{}
    }

  }


render() {
  return (
    <>
    <div>
     <BaseIn />
    </div>
    </>
  )
}
}

export default App;
