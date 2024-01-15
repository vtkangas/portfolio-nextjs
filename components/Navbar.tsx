import Avatar from "./Avatar";

export default function Navbar() {
  return (
    <div className="navbar fixed top-0 right-0 z-50 flex-1 justify-center h-14 bg-white">
      <div className="navbar-start ml-2 h-full">
        <Avatar />
      </div>
      <div className="navbar-end mr-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-circle bg-white text-black border-none hover:bg-black hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box min-w-52"
          >
            <li className="rounded-lg hover:bg-black hover:text-white">
              <a>Home</a>
            </li>
            <li className="rounded-lg hover:bg-black hover:text-white">
              <a>About</a>
            </li>
            <li className="rounded-lg hover:bg-black hover:text-white">
              <a>Projects</a>
            </li>
            <li className="rounded-lg hover:bg-black hover:text-white">
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
