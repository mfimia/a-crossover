import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

const Messages = ({ messages }) => {
  // const navigate = useNavigate()
  const [searchInput, setSearchInput] = useState()
  return (
    <article>
      <form className="uk-form">
        <input onChange={event => setSearchInput(event.target.value)} className="uk-input" type="search" placeholder="Search messages..." />
      </form>
      <ul className="uk-list">
        {messages.map(message => {
          return (
            <li key={message._id}>
              <div>
                <div className="uk-card uk-card-hover uk-card-body">
                  <h3 className="uk-card-title">{message.text}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </article>
  )
}
export default Messages
