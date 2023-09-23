

import { Link } from "react-router-dom";

const Header = () => {
      return (
            <div className="bg-gray-100  ">
                  <nav className="w-10/12 m-auto flex justify-between py-4">
                        <h1 className="text-2xl font-semibold">Career<span className="text-blue-400">H</span>ub</h1>
                        <div className="flex gap-10">
                              <Link to={"/"}>Home</Link>
                              <Link to={"/pages"}>Pages</Link>
                              <Link to={"/jobs"}>Jobs</Link>
                              <Link to={"/applied"}>Applied jobs</Link>
                        </div>
                  </nav> 
                 
            </div>
      );
};

export default Header;