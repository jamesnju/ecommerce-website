import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="border-b border-red-200 hidden sm:block">
        <div className="container py-4 m-4">
            <div className="flex justify-between items-center">
                <div className="hidden lg:flex gap-1">
                    <div className="header_icon_wrapper">
                    <FaFacebook />
                    </div>
                    <div className="header_icon_wrapper">
                    <FaTwitter/>
                    </div>
                    <div className="header_icon_wrapper">
                    <FaLinkedin/>
                    </div>
                    <div className="header_icon_wrapper">
                    <FaInstagram />
                    </div>
                </div>
                <div className="text-gray-500 text-[12px">
                    <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $550
                </div>
                <div className="flex gap-4">
                    <select name="currency" id="currency" className="text-gray-500 text-[12px] w-[100px]">
                        <option value="select">Currency...</option>
                        <option value="KSH">KSH</option>
                        <option value="USD">USD</option>
                        <option value="EUR ">EURO</option>
                    </select>
                    {/* language */}
                    <div className="">
                        <select name="language" id="laguage" className="text-gray-500 text-[12px] w-[80px]">
                        <option value="English">ENGLISH</option>
                        <option value="Kiswahili">KISWAHILI</option>
                        <option value="France">FRANCE</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header