import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit } = useForm();
  function submitForm(data){
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <input type="hidden" {...register("id")} />
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>:</td>
              <td>
                <input {...register("name")} />
              </td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>:</td>
              <td>
                <input {...register("phone")} />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <input type="submit" value="Update" />
                <button>Clear selection</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}