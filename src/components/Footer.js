import { useState, useEffect } from "react";

const Footer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(`${process.env.REACT_APP_FETCH_URL}/users`);
      const data = await res.json();

      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <ul className="uk-list">
      {users.map((user) => {
        return (
          <li key={user._id} className="">
            <img
              className="uk-border-circle uk-width-1-4 uk-margin-small-right"
              src={user.avatar}
              alt={user.username}
            ></img>
            <span>{user.username}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default Footer;
