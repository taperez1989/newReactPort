
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {  FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


const NavBar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <img src={logo} alt='' />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <FaLinkedin />
                <a
                    href="https://github.com/taperez1989"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github profile"
                >
                    <FaGithub />
                </a>
                <FaTwitter />
                <FaInstagram />
            </div>
        </nav>
    );
};

export default NavBar