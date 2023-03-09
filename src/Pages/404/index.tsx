import { Link } from "react-router-dom"

export const Four0Four : React.FC = ():JSX.Element => {
    return <>
    go to home page  <br />
        <Link className="bg-gray-600 py-2 text-white rounded-lg px-4" to="/">Home page </Link>
    </>
}