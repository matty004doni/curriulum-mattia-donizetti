import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
            <nav className="flex items-center p-4 text-white">
                <ul className="flex-1 flex justify-center space-x-6">
                    <li><Link to={`/`}>Landing </Link></li>
                    <li><Link to={`/chisono`}>Chi sono & Contatti </Link></li>
                    <li><Link to={`/esperienze`}> Esperienze </Link></li>
                    <li><Link to={`/competenze`}>Skill & competenze</Link></li>
                    <li><Link to={`/progetti`}>Progetti</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;