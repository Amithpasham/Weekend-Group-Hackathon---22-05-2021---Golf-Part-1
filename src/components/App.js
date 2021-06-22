import React, {  useEffect, useState } from "react";
import '../styles/App.css';
const App = () => {

    const [renderBall,setRenderBall] = useState(false);
    const [posi,setPosi] = useState(0);
    const [ballPosition,setBallPosition] = useState({left:0,top:0});
    
    const handleListener =  (event)=>{
        if(event.keyCode===39){
                setBallPosition({
            left :ballPosition.left +5,
           
        })
        }
    };
    // bind ArrowRight keydown event
    useEffect(()=> {
        document.addEventListener("keydown",handleListener);
        return () => document.removeEventListener("keydown",handleListener);
    },[ballPosition]);
  
    const buttonClickHandler = () => {
        setRenderBall(true);
   };
    const renderBallOrButton = () => {
		if (renderBall) {
		    return <div className="ball" style={{
                left : ballPosition.left +"px",
            }}></div>
		} else {
		    return <button onClick={buttonClickHandler} >Click For One Ball</button>
		}
    };
    return  <div className="playground"> {renderBallOrButton()}</div>;
};


export default App;