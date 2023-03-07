import { Link } from "react-router-dom"

interface IHeader {
    title:string;
    another_page_title: string;
    another_page_link: string;
}

export const Header: React.FC<IHeader> = (props:IHeader): JSX.Element => {
    return <>
        <section className="py-3 px-4 flex items-center justify-between bg-slate-100">
            <span className="text-xl  font-semibold text-gray-600">{props.title}</span>
            <Link to={props.another_page_link}><span className="rounded-full p-1 bg-slate-500 text-white material-symbols-outlined">{props.another_page_title}</span></Link>
        </section>
    </>
}