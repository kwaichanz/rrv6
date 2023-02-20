import './App.css'
import { Link, NavLink, Route, Routes, useLocation, useRoutes } from 'react-router-dom'
import { Home } from './components/Home'
import { NotFound } from './components/NotFound'
import { BookRoutes } from './BookRoutes'
import "./styles.css"

function App() {
  const location = useLocation()

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" >Home</NavLink>
          </li>
          <li>
            <NavLink end to="/books">Books</NavLink>
          </li>
        </ul>
      </nav>
      {location.state}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hi" element={<h3>Hi hi hi</h3>} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App