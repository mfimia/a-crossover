const Footer = ({ users }) => {
  return (
    <ul className="uk-list">
      {users.map(user => {
        return (
          <li key={user._id} className="">
            <img className="uk-border-circle uk-width-1-4 uk-margin-small-right" src={user.avatar} alt={user.username}></img>
            <span>{user.username}</span>
          </li>
        )
      })}
    </ul>
  )
}
export default Footer
