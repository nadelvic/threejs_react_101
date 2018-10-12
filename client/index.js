import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';
import './components/ThreeContainer';
import ThreeContainer from './components/ThreeContainer';
const App = () => {
  return (
  <div className="container">
    <h1>First step in Three.js</h1>
    { /*<div id="canvas"></div>*/}
    <div className="canvasContainer">
    <ThreeContainer />
    </div>
   
  
  </div>
  
  )
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)