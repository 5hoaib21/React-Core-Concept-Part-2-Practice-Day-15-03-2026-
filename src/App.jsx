import Baller from "./Baller";
import Users from "./Users";
import Counter from "./counter";
import Batsman from "./Batsman";
import Friends from './Friends'
import { Suspense, useState } from "react";



const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())


const fetchFriends = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}




import "./App.css";

function App() {

  const friendsPromise = fetchFriends();


  const [count, setCount] = useState(0);

  function handleClick() {
    alert("i am john");
  }
  const handleClick3 = () => {
    alert("i am john 3");
  };


  const handleAdd5 = (num) =>{
   const newNum = num + 5;
   alert(newNum);
  };










  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>


        {/* <Suspense fallback={<h3>Loading...</h3>}>
          <Users fetchUsers ={fetchUsers}></Users>
        </Suspense> */}

        <Suspense fallback={<h3 className="card">Friends are coming for treat</h3>}>
          <Friends friendsPromise={friendsPromise}></Friends>
        </Suspense>
          
        <Baller></Baller>
        <Batsman></Batsman>
        <Counter></Counter>




        </div>
        
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <button className="counter" onClick={handleClick}>
          Click Me
        </button>
        <button
          className="counter"
          onClick={function handleClick2() {
            alert("i am john 2");
          }}
        >
          Click Me2
        </button>
        <button className="counter" onClick={handleClick3}>
          Click Me3
        </button>
        <button className="counter" onClick={() => alert('i am john 4')}>
          Click Me4
        </button>
        <button className="counter" onClick={()=> handleAdd5(10)}>Click Add 5</button>
      </section>
    </>
  );
}

export default App;
