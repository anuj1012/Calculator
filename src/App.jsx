import { useState } from 'react'
import Container from "./components/Container.jsx"
import Button from "./components/Buttons.jsx"
import Input from "./components/Input.jsx"
// import './App.css'

// const onKeyDown (event) =>{

// }

function App() {
  const [display, setDisplay] = useState(""); 
  let onButtonClick = (buttonText) => {
    if(buttonText==="C"){
      setDisplay("")
    }else if(buttonText === "="){
      const result =eval(display);
      setDisplay(result);
    }else{
      let add=display+buttonText;
      setDisplay(add);
    }
  };

  return (
    <>
    <Container>
    <h7 className="sign">Calculator</h7>
      <Input display={display} />
      <Button onButtonClick={onButtonClick} />
    </Container>
    
    </>
  )
}

export default App
