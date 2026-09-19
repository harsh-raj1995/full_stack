import { Link } from "react-router-dom";

function Navbar(){
  return(
    <>
    <Link to='/'>HomePage</Link>
    <Link to='/student'>Student Page</Link>
    </>
  )
}

export default Navbar;