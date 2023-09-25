import { useState } from "react";
export default function ContactItem({ contact, deleteContact }) {
  return (
    <>
      <div>
        Name:{contact.name}
        <br />
        Phone:{contact.phone}
        <br />
        Action:
        <button>{contact.favorite ? "💖" : "🖤"}</button>
        <button>📝</button>
        <button onClick={() => deleteContact(contact.id)}>🗑️</button>
      </div>
      <hr />
    </>
  );
}