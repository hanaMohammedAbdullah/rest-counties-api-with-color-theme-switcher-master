import React from "react";
import ThemeSwitch from "./ThemeSwitch";

function Header() {
  return (
    <>
      {" "}
      <nav className=' flex justify-between mx-28 my-4  '>
        <h1 className='sm:text-xl font-semibold'>Where in The World? </h1>

        <ThemeSwitch />
      </nav>
      <hr />
    </>
  );
}

export default Header;
