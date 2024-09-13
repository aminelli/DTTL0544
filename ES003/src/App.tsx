import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {

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

  render() {
     console.log("APP -> render");
    return (
      <>
        Test
      </>
    );
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
