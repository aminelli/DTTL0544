import React from 'react';
import logo from './logo.svg';
import './App.css';

import { LoginClassComponent } from './components/LoginClassComponent';  

import { LoginFncComponent } from './components/LoginFncComponent';

export default class App extends React.Component {

  /*
  constructor(props)
  componentDidMount
  componentDidUpdate
  shouldComponentUpdate
  componentWillUnmount
  render()  
  */

  render() {
    console.log("APP -> render");
   return (
     <> 
      <div>
        <LoginClassComponent username="tonyminels" password="test" />
      </div>
      <div>
        <LoginFncComponent />
      </div>
     </>
   );
 }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log("APP -> componentDidUpdate");
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log("APP -> componentDidCatch");
  }

  componentDidMount(): void {
    console.log("APP -> componentDidMount");
  }

  componentWillUnmount(): void {
    console.log("APP -> componentWillUnmount");
  }

   

  forceUpdate(callback?: (() => void) | undefined): void {
    console.log("APP -> forceUpdate");
  }

 

}

/*
function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
