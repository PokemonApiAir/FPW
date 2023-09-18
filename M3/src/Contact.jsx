import { useState } from "react";

export default function Contact() {
  const [state, setState] = useState("default");
  return (
    <div style={{ display: state !== "deleted" ? "block" : "none" }}>
      Name : Heather
      <br />
      Phone : 08123456789
      <br />
      Action :
      <button
        onClick={() => 
          {
            if(state === "default"){
              setState("favorited");
            }else{
              setState("default");
            }
          }
        }
      >
        {state === "favorited" ? "💖" : "🖤"}
      </button>
      <button
        style={{ display: state !== "favorited" ? "inline" : "none" }}
        onClick={() => setState("deleted")}
      >
        🚮
      </button>
    </div>
  );
}