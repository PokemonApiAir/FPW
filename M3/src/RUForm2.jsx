import { useState } from "react";
import { useForm } from "react-hook-form";

export default function RUForm() {
  const [contact, setContact] = useState({
    name: "",
    age: 0,
    gender: false,
    hobbies: [],
  });
  const { register, handleSubmit } = useForm();

  function submitForm(data) {
    setContact({
        name: data.name,
        age: parseInt(data.age),
        gender: data.gender === "true",
        hobbies: data.hobbies,
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
          <tr>
            <td>Gender</td>
            <td>:</td>
            <td>{contact.gender ? "male" : "female"}</td>
          </tr>
          <tr>
            <td>Hobbies</td>
            <td>:</td>
            <td>
              <ul>
                {contact.hobbies.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <hr></hr>
      <form onSubmit={handleSubmit(submitForm)}>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>:</td>
              <td>
                <input {...register("name")}/>
                <br />
                <span></span>
              </td>
            </tr>
            <tr>
              <td>Age</td>
              <td>:</td>
              <td>
                <input {...register("age")}/>
                <br />
                <span></span>
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>:</td>
              <td>
                <input type="radio" {...register("gender")} value="true" />
                male <input type="radio" {...register("gender")} value="false" />
                female
              </td>
            </tr>
            <tr>
              <td>Hobbies</td>
              <td>:</td>
              <td>
              <input type="checkbox" {...register("hobbies")} value="Eating" />
                Eating
                <br />
                <input type="checkbox" {...register("hobbies")} value="Sleeping" />
                Sleeping
                <br />
                <input type="checkbox" {...register("hobbies")} value="Gaming" />
                Gaming
                <br />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <input type="submit" value="Update" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}