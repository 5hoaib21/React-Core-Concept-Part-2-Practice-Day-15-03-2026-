import { useState } from "react";

export default function Baller () {
  const [balls, setBall] = useState(0);

  const handleBalls = ()=>{
    const updatedBalls = balls + 1;
    setBall(updatedBalls);
  }

return(
  <div>
  <h2>Bangu Baller</h2>
  {
    balls > 5 && <p>Your Over is Up, Drop the Ball</p>
  }
  <h1>Balls: {balls}</h1>
    <button onClick={handleBalls} className="counter">Ball..!</button>
  </div>
)
}


