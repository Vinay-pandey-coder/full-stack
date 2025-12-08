import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  async function Submit(e) {
    e.preventDefault();
    if (!name || !password) {
      alert("please enter your details");
    } else {
      let data = { name, password };
      let response = await fetch("https://full-stack-fmqw.onrender.com/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });
      let fdata = await response.json();
      console.log(fdata);
    }
  }

  return (
    <>
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
