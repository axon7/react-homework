import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <p>Hello from navbar</p>
      <Link to='/gallery'>Gallery</Link>
      <Link to='/profile'>Profile</Link>
    </div>
  );
}
