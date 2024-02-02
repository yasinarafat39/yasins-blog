import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <Navbar className="border-b-2">
      <Link to="/">
        <span>Yasins</span>
        Blog
      </Link>
    </Navbar>
  )
}
