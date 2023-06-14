import { Link } from "react-router-dom";

interface NavBarElementProps {
    title: string;
    path: string;
}
const NavBarElement: React.FC<NavBarElementProps> = ({title, path}) => {
  return (
    <Link to={path} className="text-4xl hover:underline hover:opacity-60 cursor-pointer">{title}</Link>
  )
}
export default NavBarElement