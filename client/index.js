import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';
import './components/ThreeContainer';
import ThreeContainer from './components/ThreeContainer';

const App = () => {
  return (
  <div className="container">
    <h1></h1>
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