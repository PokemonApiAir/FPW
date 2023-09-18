// Import
import {useState} from "react";

// Function
// const hello = () => {
//     alert("Hello World");
//     console.log("Hello World");
// }

export default function EventDemo(){
    // let [counter, setCounter] = useState(0);
    let [favorite, setFavorite] = useState(null);

    // const plus = async() => {
    //     await setCounter(counter+=100);
    //     await setCounter(counter+=100);
    // }

    // return <button onClick={hello} onMouseEnter={plus}>Event Demo {counter}</button>;

    return <div>
        <button onClick={() => setFavorite(!favorite)}>
        {favorite ? <img src="../Share/pup.jpg" alt="" /> : <img src="../Share/pop.jpg" alt="" />}
      </button>
    </div>
}   