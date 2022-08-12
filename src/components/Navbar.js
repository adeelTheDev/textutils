import ModeHandler from "./ModeHandler"

const Navbar = props=>{

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a> 
                    <ModeHandler/>
                </div>
            </nav>
        </>
    )
}
export default Navbar