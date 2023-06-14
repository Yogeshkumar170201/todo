"use client";

import styles from "@/app/styles/signup.module.css";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const updateform = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };
  const getData = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setFormData({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <div className={styles.head}>
        <form>
          <div className={styles.inputs}>
            <label for="name">Enter your name</label>
            <input
              type="text"
              id="name"
              name="name"
              autocomplete="off"
              value={formData.name}
              onChange={updateform}
            />
          </div>
          <div className={styles.inputs}>
            <label for="email">Enter your email</label>
            <input
              type="email"
              id="email"
              name="email"
              autocomplete="off"
              value={formData.email}
              onChange={updateform}
            />
          </div>
          <div className={styles.inputs}>
            <label for="password">Enter your password</label>
            <input
              type="password"
              id="password"
              name="password"
              autocomplete="off"
              value={formData.password}
              onChange={updateform}
            />
          </div>
          <div className={styles.submit}>
            <button type="submit" onClick={getData}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup