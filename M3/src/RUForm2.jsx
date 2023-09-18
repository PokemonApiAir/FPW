import { useState } from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

export default function RUForm() {
  const [contact, setContact] = useState({
    name: "",
    age: 0,
    gender: false,
    hobbies: [],
  });

  const schema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
    gender: Joi.boolean().required(),
    hobbies: Joi.array(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });

  function submitForm(data) {
    setContact({
        name: data.name,
        age: data.age,
        gender: data.gender,
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
                <span>{errors.name?.message}</span>
              </td>
            </tr>
            <tr>
              <td>Age</td>
              <td>:</td>
              <td>
                <input {...register("age")}/>
                <br />
                <span>{errors.age?.message}</span>
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>:</td>
              <td>
                <input type="radio" {...register("gender")} value="true" /> male
                <input type="radio" {...register("gender")} value="false" /> female
                <br />
                <span>{errors.gender?.message}</span>
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