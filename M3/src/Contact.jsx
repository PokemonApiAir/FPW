import { useState } from "react";

export default function Contact() {
  const [favorite, setFavorite] = useState(false);
  const [deleted, setDeleted] = useState(false);
  return (
    <div style={{ display: deleted ? "none" : "block" }}>
      Name : Heather
      <br />
      Phone : 08123456789
      <br />
      Action :
      <button onClick={() => setFavorite(!favorite)}>
        {favorite ? "💖" : "🖤"}
      </button>
      <button style={{ display: favorite ? "none" : "inline" }} onClick={() => setDeleted(true)}>🚮</button>
    </div>
  );
}