import { IoMenu } from "react-icons/io5";
import Logo from "../../assets/logo.svg";
const NavMenu = [
  { id: 1, title: "HOME", link: "#home" },
  { id: 2, title: "ABOUT", link: "#about" },
  { id: 3, title: "SKILL", link: "#skill" },
  { id: 4, title: "PROJECTS", link: "#projects" },
  { id: 5, title: "EXPERIENCE", link: "#experience" },
  { id: 6, title: "CONTACT", link: "#contact" },
];

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50  border-white h-20 font-navbar tracking-wide text-white font-bold">
      <div className="container mx-auto flex items-center justify-between h-full pl-5 pr-2 lg:pr-5">
        {/* logo */}
        <div className="logo-container w-16 lg:w-20 overflow-hidden hover:scale-110 transition-all ease-in-out duration-700">
          <img src={Logo} className="object-contain"></img>
        </div>
        {/* dropdown ribet asem, khusus mobile. */}
        <nav className="md:hidden lg:hidden ">
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost hover:bg-emas hover:border-none"
            >
              <IoMenu size={25} />
            </div>

            <ul
              tabIndex={-1}
              className="dropdown-content menu mt-2 w-35 rounded-box bg-black/50 p-2 shadow-lg z-999 overflow-hidden "
            >
              {NavMenu.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="text-white hover:bg-emas/40  ">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Khusus Desktop, kenapa dipecah? gr-gr mobile harus pake hamburger */}
        <nav className="hidden md:flex lg:flex cursor-pointer">
          <ul className="flex flex-row gap-7">
            {NavMenu.map((item) => {
              return (
                <li key={item?.id}>
                  <a
                    href={item?.link}
                    className="relative after:content-[''] after:absolute after:left-1/2 after:bottom-[1px] after:w-0 after:h-[2px] after:bg-emas after:transition-all after:duration-500 hover:after:w-full hover:after:left-0"
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
