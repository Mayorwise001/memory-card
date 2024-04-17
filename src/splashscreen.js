import React from "react"
import start from './images/start.png'
import exit from './images/exit.png'
import { useState } from "react"

const Splash = () => {
    // const history = useNavigate();

    const handleExitGame = () => {
        // Handle exit game logic here
        console.log("Exit Game");
      };
const [isVisible, setVisible] = useState(true)
      const handleStartGame = (e) => {
        // Redirect to another page when the "Start Game" image is clicked
        // history.push("/"); // Change "/game" to the desired path
        setVisible(false)
        setVisible(false)
      };

    return ( 
        <div className="splash-screen ">
            <div className="overlay" style={{ visibility: isVisible ? 'visible' : 'hidden'}}>            
                    <h3>Welcome to My Game</h3>
                    <div className="button-container">
                        <img 
                        src={start} 
                        alt="Start Game" 
                        onClick={handleStartGame}
                        />
      
                        <img 
                        src={exit}
                        alt="Exit Game" 
                        onClick={handleExitGame}
                        />
                    </div>
   
            </div>

        </div>
     );
}

export default Splash;