import react from "react";
import Navbar from "./navbar";
function Header({currentPage,handlePageChange}){
    
    return (
        <header style={{width:"750px",margin:"0 auto"}}>
            <h2>Kamal Kaur Portfolio</h2>
            <Navbar currentPage={currentPage}handlePageChange={handlePageChange}/>
        </header>
    )
}
export default Header