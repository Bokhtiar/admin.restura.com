import { Link } from "react-router-dom"

export const Four0Four : React.FC = ():JSX.Element => {
    return <>
        <section className="bg-gray-50 flex h-screen">
            <div className="mx-auto my-auto">
                <h2> <span className="text-red-600 text-4xl font-bold ">404</span> <span className="text-blue-400 text-semibold">Not found</span> </h2>
                <Link to="/" className="bg-pink-600 text-white rounded-md py-2 px-7">Go to home</Link>
            </div>
        </section>
    </>
}