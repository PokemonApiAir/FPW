import { useRef, useState } from "react";

export default function RUForm() {
  const nameInput = useRef(null);
  const ageInput = useRef(null);
  
  const [contact, setContact] = useState({
    name: "",
    age: 0,
  });

  function submitForm() {
    setContact({
      name: nameInput.current.value,
      age: parseInt(ageInput.current.value),
    });
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>:</td>
            <td>{contact.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>:</td>
            <td>{contact.age}</td>
          </tr>
        </tbody>
      </table>
      <hr></hr>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>:</td>
            <td>
              <input type="text" name="name" ref={nameInput}/>
            </td>
          </tr>
          <tr>
            <td>Age</td>
            <td>:</td>
            <td>
              <input type="text" name="age" ref={ageInput}/>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button onClick={submitForm}>Update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}