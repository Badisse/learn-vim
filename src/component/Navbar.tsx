import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-green-500 fixed w-full top-0 text-xl z-10" >
      <div className="flex justify-between items-center p-5">
        <div />
        <div className="flex justify-center items-center gap-20 ">
          <div>
            <Link href={"#"}>Temp</Link>
          </div>
          <div>
            <Link href={"#"}>Temp</Link>
          </div>
          <div>
            <Link href={"#"}>Temp</Link>
          </div>
          <div>
            <Link href={"#"}>Temp</Link>
          </div>
          <div>
            <Link href={"#"}>Temp</Link>
          </div>
        </div>
        <div>Login</div>

      </div>
    </nav >
  )
}

export default Navbar;
