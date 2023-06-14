"use client";

import styles from "@/app/styles/signup.module.css";
import { useState } from "react";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const updateform = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const getData = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `/api/getuser/[email]=${formData.email}`
      );
      console.log(response.status)
      if (response.status === 200) {
        const data = await response.json();
        const user = data.user;
        console.log(user);
        setFormData({
          name: "",
          email: "",
          password: "",
        });
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.log("Server error, please try again!");
    }
  };
  return (
    <>
      <div className={styles.head}>
        <form>
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
};

export default Signin;
