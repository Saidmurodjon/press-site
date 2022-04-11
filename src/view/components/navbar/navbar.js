import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">

                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                            <Link to={"./login"}>
                                login
                            </Link>
                            <button className="btn btn-success">Sign up</button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Navbar