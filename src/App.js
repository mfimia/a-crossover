import { Routes, Route, NavLink } from "react-router-dom";
// import Search from './components/Search'
import Messages from "./components/Messages";
import SingleView from "./components/SingleView";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import AddNewUser from "./components/AddNewUser";
import AddNewMessage from "./components/AddNewMessage";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    const res = await fetch(`${process.env.REACT_APP_FETCH_URL}/messages`);
    const data = await res.json();

    setMessages(data);
  };

  return (
    <>
      <header className="uk-width-1-4@s">
        <h1 className="uk-h4">A Crossover</h1>
        <nav>
          <ul className="uk-list">
            <li>
              <span
                className="uk-icon uk-margin-small-right"
                data-uk-icon="home"
              ></span>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
            <li>
              <NavLink to="/add-user">Add new user</NavLink>
            </li>
            <li>
              <NavLink to="/add-message">Add new message</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="">
        <Routes>
          <Route
            path="/"
            element={
              <Messages
                messages={messages}
                setMessages={setMessages}
                getMessages={getMessages}
              />
            }
          />
          <Route path="/:id" element={<SingleView />} />
          <Route path="/users" element={<Footer />} />
          <Route path="/add-user" element={<AddNewUser />} />
          <Route path="/add-message" element={<AddNewMessage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
