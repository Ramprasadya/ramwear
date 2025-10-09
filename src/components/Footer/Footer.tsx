import { Link } from "react-router-dom";
import Logo from "../../assets/log.png";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={Logo} className="mb-5 w-25" alt="" />
          <p className="w-full md:w-2/3 text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            alias quam repudiandae?
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-4">Company</p>
          <ul
            className="flex flex-col gap-1 text-gray-600
             "
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/orders">Delivery</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Get in touch</p>
          <ul
            className="flex flex-col gap-1 text-gray-600
             "
          >
            <li>
              <a href="tel:+91 9876543210">+91 9876543210</a>
            </li>
            <li>
              <a href="mailto:contact@wear.com">contact@wear.com</a>
            </li>
             <li>
              <a className="cursor-pointer hover:text-black" target="_blank" href="https://github.com/Ramprasadya">Contact To Developer....</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className=" py-5 text-sm text-center ">
          Copyright 2025@ wear.com - All Right Reserved &nbsp; - &nbsp; Developed By Ramprasad Yadav 
        </p>
      </div>
    </div>
  );
};

export default Footer;
