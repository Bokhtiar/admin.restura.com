import { Link } from "react-router-dom"

export const Navbar: React.FC = (): JSX.Element => {
    return <>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
    </>
}