import dollerImage from "../../assets/DoubleDollar.png";
import logo from "../../assets/logo.png";

const Navbar = ({ totalCoin }) => {
  console.log(totalCoin)
  return (
    <div className="bg-base-100 shadow-sm ">
      <div className="container mx-auto navbar py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="h-18">
            <img className="h-full" src={logo} alt="BPL Dream 11 logo" />
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
          <a className="cursor-default flex gap-2">
            {totalCoin} Coin <img src={dollerImage} alt="" />{" "}
          </a>
        </div>
        <div className="navbar-end lg:hidden flex">
          <a className="cursor-default flex gap-2">
            {totalCoin} Coin <img src={dollerImage} alt="" />{" "}
           
          </a>
           <p>{totalCoin}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
