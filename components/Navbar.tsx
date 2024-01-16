import Avatar from "./Avatar";

export default function Navbar() {
  return (
    <div className="navbar fixed top-0 right-0 z-50 flex-1 justify-center h-14">
      <div className="navbar-start ml-2 h-full">
        <Avatar />
      </div>
      <div className="navbar-end mr-2">
      </div>
    </div>
  );
}