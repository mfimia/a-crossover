import { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom'

const Messages = ({ messages, setMessages, getMessages }) => {
  // const navigate = useNavigate()
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput) {
      searchWord(searchInput);
    } else {
      getMessages();
    }
  };

  const searchWord = async (keyword) => {
    const res = await fetch(
      `${process.env.REACT_APP_FETCH_URL}/messages/search/${keyword}`
    );

    const data = await res.json();
    setMessages(data);
  };

  return (
    <article>
      <form onSubmit={handleSubmit} className="uk-form">
        <input
          onChange={(event) => setSearchInput(event.target.value)}
          className="uk-input"
          type="search"
          placeholder="Search messages..."
        />
      </form>
      <ul className="uk-list">
        {messages.map((message) => {
          return (
            <li key={message._id}>
              <Link className="uk-link-muted" to="/">
                <div
                  className="uk-card uk-card-hover uk-card-body"
                  style={{ border: "1px solid lightgray" }}
                >
                  <img
                    style={{ height: 100, borderRadius: "50%" }}
                    src={message.author.avatar}
                    alt="profile-pic"
                  />
                  <h3 className="uk-card-title">{message.text}</h3>
                  <p>
                    Author: {message.author.username} {message.author.handle}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </article>
  );
};
export default Messages;
