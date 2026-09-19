import { Link } from "react-router-dom";

function Navbar(){
  return(
    <header className="navbar">
      <Link className="brand" to='/'>STUD<span>.</span>Y</Link>
      <nav className="nav-links" aria-label="Main navigation">
        <Link className="nav-link" to='/'>Home</Link>
        <Link className="nav-link" to='/student'>Students</Link>
        <Link className="nav-link" to='/about'>About</Link>
      </nav>
    </header>
  )
}

export default Navbar;