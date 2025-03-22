import React, { useState } from "react";
// import { MdPerson, MdOutlineMenuOpen, MdClose } from "react-icons/md";
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed top-0 inset-x-0 max-w-screen-lg w-full mx-auto h-12 flex flex-col justify-center items-center bg-neutral-800 bg-opacity-50 backdrop-blur-md text-neutral-100 z-30">
            <div className="w-full flex flex-row md:flex-col justify-between md:justify-center items-center px-4 max-w-[60rem] z-30">
                <div className="md:hidden text-2xl px-4 cursor-pointer z-30">
                    <Link to="home" smooth={true} duration={500}>
                        {/* <MdPerson /> */}
                        <span>LOGO</span>
                    </Link>
                </div>

                {/* menu */}
                <div className="text-base w-full max-w-[60rem]">
                    <ul className="hidden md:flex items-center justify-between gap-6">
                        <li className="hover:text-white hover:scale-[120%] duration-200">
                            <Link to="home" smooth={true} duration={500}>
                                {/* <MdPerson className="text-2xl" /> */}
                                <span className="text-2xl">LOGO</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="home" smooth={true} duration={500}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="skills" smooth={true} duration={500}>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} duration={500}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="resume" smooth={true} duration={500}>
                                Resume
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* hamburger menu */}

                <div
                    onClick={handleClick}
                    className="md:hidden z-10 text-2xl px-4 cursor-pointer"
                >
                    {/* {!nav ? <MdOutlineMenuOpen /> : <MdClose />} */}
                    {!nav ? <span>OPEN</span> : <span>CLOSE</span>}
                </div>

                {/* mobile menu */}

                <ul
                    className={
                        !nav
                            ? "hidden"
                            : "absolute top-0 left-0 w-full h-screen bg-neutral-800 backdrop-blur-md flex flex-col justify-center items-center"
                    }
                >
                    <li className="py-6 text-2xl">
                        <Link
                            onClick={handleClick}
                            to="home"
                            smooth={true}
                            duration={500}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="py-6 text-2xl">
                        <Link
                            onClick={handleClick}
                            to="about"
                            smooth={true}
                            duration={500}
                        >
                            About
                        </Link>
                    </li>
                    <li className="py-6 text-2xl">
                        <Link
                            onClick={handleClick}
                            to="skills"
                            smooth={true}
                            duration={500}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className="py-6 text-2xl">
                        <Link
                            onClick={handleClick}
                            to="projects"
                            smooth={true}
                            duration={500}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="py-6 text-2xl">
                        <Link
                            onClick={handleClick}
                            to="resume"
                            smooth={true}
                            duration={500}
                        >
                            Resume
                        </Link>
                    </li>
                    <li className="py-6 text-2xl">
                        <Link
                            onClick={handleClick}
                            to="contact"
                            smooth={true}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
