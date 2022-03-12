import { Routes, Route, NavLink } from 'react-router-dom'
// import Search from './components/Search'
import Messages from './components/Messages'
import SingleView from './components/SingleView'
import Footer from './components/Footer'

const USERS = [
  {
    _id: '622a56dd966f50cec53a39f7',
    username: 'test',
    handle: '@handle',
    avatar: 'https://th.bing.com/th/id/OIP.sJhiNQZoqAiaGJusJ_M37wHaHa?pid=ImgDet&rs=1',
  },
  {
    _id: '622c61ef8d34524a5df041f8',
    username: 'someone',
    handle: '@example',
    avatar: 'https://th.bing.com/th/id/OIP.sJhiNQZoqAiaGJusJ_M37wHaHa?pid=ImgDet&rs=1',
  },
  {
    _id: '622c67bfc811d757585a26a0',
    username: 'susan',
    handle: '@jenkins',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    _id: '622c6802c811d757585a26a3',
    username: 'bob',
    handle: '@nobob',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
]

const MESSAGES = [
  {
    _id: '622c607e1ffdb1d1afdac085',
    text: 'example text',
    author: '622a56dd966f50cec53a39f7',
    created_at: '2022-03-12T08:57:34.636Z',
    updated_at: '2022-03-12T08:57:34.636Z',
  },
  {
    _id: '622c62458d34524a5df041fc',
    text: 'hello world!',
    author: '622c61ef8d34524a5df041f8',
    created_at: '2022-03-12T09:05:09.384Z',
    updated_at: '2022-03-12T09:05:09.384Z',
  },
  {
    _id: '622c62578d34524a5df041ff',
    text: 'example with a longer text',
    author: '622c61ef8d34524a5df041f8',
    created_at: '2022-03-12T09:05:27.101Z',
    updated_at: '2022-03-12T09:05:27.101Z',
  },
  {
    _id: '622c626b8d34524a5df04202',
    text: 'adding some special characters!!! what else?',
    author: '622c61ef8d34524a5df041f8',
    created_at: '2022-03-12T09:05:47.233Z',
    updated_at: '2022-03-12T09:05:47.233Z',
  },
]

function App() {
  return (
    <>
      <header className="uk-width-1-4@s">
        <h1 className="uk-h4">A Crossover</h1>
        <nav>
          <ul className="uk-list">
            <li>
              <span className="uk-icon uk-margin-small-right" data-uk-icon="home"></span>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/linkone">Link One</NavLink>
            </li>
            <li>
              <NavLink to="/linktwo">Link Two</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="">
        <Routes>
          <Route path="/" element={<Messages messages={MESSAGES} />} />
          <Route path="/:id" element={<SingleView />} />
        </Routes>
      </main>

      <footer className="uk-width-1-4@s">
        <Footer users={USERS} />
      </footer>
    </>
  )
}

export default App
