import logo from "./assets/logo.png"
function Header() {
  return ( 
    <header className="flex justify-around items-center py-5">
      <img src={logo} alt="logo" />
    <nav className="text-zinc-400 flex gap-5">
    <a className="text-white" href="#">Home</a>
    <a className="hover:text-white" href="#">Explorer</a>
    <a className="hover:text-white" href="#">Genre</a>
    <a className="hover:text-white" href="#">News</a>
    <a className="hover:text-white" href="#">Movies</a>
    <a className="hover:text-white" href="#">TV Shows</a>
    </nav>

    </header>
   );
}

export default Header;