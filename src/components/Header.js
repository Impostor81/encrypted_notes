import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-dark p-2">
      <div className="container px-4">
        <div className="header-wraper d-flex justify-content-between align-items-center">
          <div className="text-white logo">EncryptedNotes</div>
          <nav>
            <ul className="d-flex justify-content-between mb-0 list-unstyled">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/note">Note</NavLink></li>
              <li><NavLink to="/create">Create</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
