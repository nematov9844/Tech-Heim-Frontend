import FacebookIcon from "../assets/FacebookIcon";
import InstagramIcon from "../assets/InstagramIcon";
import TwitterIcon from "../assets/TwitterIcon";
import YoutubeIcon from "../assets/YoutubeIcon";

export default function Footer() {
    return (
        <div className="bg-[#021736] grid grid-cols-1 gap-4 nr:grid-cols-2 md:!grid-cols-4 text-white p-4">
            <ul className=" flex flex-col items-start gap-4">
                <li>Company</li>
                <li>about us</li>
                <li>blog</li>
                <li>returns</li>
            </ul>
            <ul className=" flex flex-col items-start gap-4"> 
                <li>Info</li>
                <li>How it works?</li>
                <li>our promises</li>
                <li>FAQ</li>
            </ul>
            <ul className=" flex flex-col items-start gap-4">
                <li>Contact us</li>
                <li>123 Main Street, Anytown,USA</li>
                <li>+1 (555) 123-4567</li>
                <li>TechHeimSupport@gmail.com</li>
            </ul>
            <ul className=" flex flex-col items-start gap-4">
                <li>Sign up for News and updates</li>
                <li>
                    <input type="text" placeholder="E-mail Address"  className="border border-white rounded-md bg-transparent py-1 px-3"/>
                </li>
                <li className="flex gap-4 items-center">
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <InstagramIcon/>
                    <YoutubeIcon/>
                </li>
            </ul>
        </div>
    )
}
