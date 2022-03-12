import React, { useState, useEffect } from "react";

const AddNewMessage = () => {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(`${process.env.REACT_APP_FETCH_URL}/users`);
      const data = await res.json();

      setUsers(data);
    };
    getUsers();
  }, []);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postMessage = async () => {
      const res = await fetch(`${process.env.REACT_APP_FETCH_URL}/messages/`, {
        method: "POST",
        body: JSON.stringify({ text, author }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status !== 200) return; // error
    };
    postMessage();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className="uk-form">
      <div className="uk-margin">
        <label htmlFor="text">Post</label>
        <input
          onChange={handleChange}
          name="text"
          className="uk-input"
          id="text"
          type="text"
          value={text}
        />
      </div>
      <select className="uk-select" name="author" id="author">
        {users.map((user) => (
          <option value={user._id}>{user.username}</option>
        ))}
      </select>
      <button onSubmit={handleSubmit} className="uk-button uk-button-default">
        Add user
      </button>
    </form>
  );
};

export default AddNewMessage;
