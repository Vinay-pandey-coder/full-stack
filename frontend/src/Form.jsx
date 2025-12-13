import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");


  const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/add"
    : "https://full-stack-fmqw.onrender.com/add";

    
  async function Submit(e) {
    e.preventDefault();
    if (!name || !password) {
      toast.error("please enter your details",{
        style:{
          background:"white",
          color:"black"
        }
      })
      return
    } else {
      let data = { name, password };
      let response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });
      let fdata = await response.json();
      console.log(fdata);
    }

    toast.success("data filed",{
      style:{
        background:"white",
        color:"black"
      }
    })
  }

  return (
    <>

      <ToastContainer/>
      <form onSubmit={Submit}>
        <input
          value={name}
          type="text"
          placeholder="enter your name"
          onChange={(e) => {
            setName(e.target.value.trim());
          }}
        />
        <input
          value={password}
          type="password"
          placeholder="enter your password"
          onChange={(e) => {
            setPassword(e.target.value.trim()); 
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
