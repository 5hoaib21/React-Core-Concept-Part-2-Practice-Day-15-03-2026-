import { useState } from "react"

export default function Batsman (){
  const [runs, setRuns]= useState(0);
  const [sixes, setSixes] = useState(0);
  const [singles, setSingles] = useState(0);
  const [fours, setFours] = useState(0);

  const handleSingle = () => {
    const updatedRuns = runs +1;
    const updatedSingles = singles + 1;
    setSingles(updatedSingles);
      setRuns(updatedRuns);
  };

  const handleSix = () => {
    const updatedRuns = runs + 6;
    const updatedSixes = sixes + 1;
    setSixes(updatedSixes);
    setRuns(updatedRuns);
  }
  const handleFour = () => {
    const updatedRuns = runs + 4;
    const updatedFours = fours + 1;
    setFours(updatedFours);
    setRuns(updatedRuns);
  }





return (
  <div>
    <h3>player: Bangu Batsman</h3>
    <p><small>Total Six: {sixes}</small></p>
    <p><small>Total Single: {singles}</small></p>
    <p><small>Total Four: {fours}</small></p>
    {
      runs >50 && <p>Your score: 50 ups</p>
    }
    <h1>Score: {runs}</h1>
    <button onClick={handleSingle} className="counter">single</button>
    <br></br>
    <button onClick={handleFour} className="counter">four</button>
    <br></br>
    <button onClick={handleSix} className="counter">six</button>
    <br></br>
  </div>
)
}