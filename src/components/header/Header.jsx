

import { Link } from "react-router-dom";

const Header = () => {
      return (
            <div className="bg-gray-200  ">
                  <nav className="w-10/12 m-auto flex justify-between py-4">
                        <h1>CareerHub</h1>
                        <div className="flex gap-10">
                              <Link to={"/"}>Home</Link>
                              <Link to={"/pages"}>Pages</Link>
                              <Link to={"/jobs"}>Jobs</Link>
                        </div>
                  </nav>
                 
            </div>
      );
};

export default Header;