import { useState } from 'react';
import './App.css';

function App() {
const [color, setColor] = useState(["orange", "green", "yellow", "pink", "red", "grey"]);
const [dispColor, setDispColor] = useState(0);



const handleClick = (e) => {
  console.log('e',e)
  if (dispColor <= color.length && e.target.innerText == "Next Color"){
      setDispColor(dispColor+1)
  }
  if (dispColor <= color.length && dispColor > 0 && e.target.innerText == "Previous Color"){
    setDispColor(dispColor-1)
}
  let index = parseInt((Math.random()* color.length)+1)
  document.getElementsByClassName('App')[0].style.backgroundColor=`${color[dispColor]}`
}
console.log(dispColor)

  return (
    <div className="App">
      <h1>Color Flipper</h1>
       <div className="flipper"></div>
       <button onClick={handleClick}>Previous Color</button>
       <button onClick={handleClick}>Next Color</button>
    </div>
  );
}

export default App;
