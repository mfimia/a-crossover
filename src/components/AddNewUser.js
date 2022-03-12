import React, { useState } from "react";

const AddNewUser = () => {
  const [user, setUser] = useState({
    username: "",
    handle: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const addUser = async () => {
      const res = await fetch(`${process.env.REACT_APP_FETCH_URL}/users/`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status !== 200) return; // error
    };
    addUser();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className="uk-form">
      <div className="uk-margin">
        <label htmlFor="username">Username</label>
        <input
          onChange={handleChange}
          name="username"
          className="uk-input"
          id="username"
          type="text"
          value={user.username}
        />
      </div>
      <div className="uk-margin">
        <label htmlFor="handle">Handle</label>
        <input
          onChange={handleChange}
          name="handle"
          className="uk-input"
          id="handle"
          type="text"
          value={user.handle}
        />
      </div>
      <button className="uk-button uk-button-default">Add user</button>
    </form>
  );
};

export default AddNewUser;
