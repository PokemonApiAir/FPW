import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";
import EventDemo from "./EventDemo";
import Contact from "./Contact";
import RUForm2 from "./RUForm2";
import RUForm from "./RUForm";

import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([
    { id: "onhmq", name: "Ginny", phone: "08100000000", favorite: true },
    { id: "37occ", name: "Helen", phone: "08111111111", favorite: false },
    { id: "thi5i", name: "Isabel", phone: "08122222222", favorite: true },
  ]);

  const deleteContact = (id) => {
    setContacts(contacts.filter((x) => x.id != id));
  }

  // return <EventDemo></EventDemo>;
  return (
    <div>
      <div>
        {contacts.map((c) => (
          <ContactItem key={c.id} contact={c} deleteContact={deleteContact}/>
        ))}
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}

export default App
