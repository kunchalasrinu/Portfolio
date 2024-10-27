import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaLinktree} from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const socials = [
  {icon: <FaGithub />, path: "https://github.com/kunchalasrinu"},
  {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/kunchalasrinu/"},
  {icon: <MdEmail />, path: "https://kunchalasrinu61@gmail.com"}
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>{socials.map((item, index)=>{
      return (
      <Link key={index} href={item.path} className={iconStyles} target="_blank">
        {item.icon}
        </Link>
        );
    })}</div>
  )
}

export default Social