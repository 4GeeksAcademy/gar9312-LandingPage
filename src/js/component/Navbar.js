import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark">
            <div className="container-fluid justify-content-center"> {/* Ajustamos la clase para centrar horizontalmente */}
                <a className="navbar-brand" style={{ marginLeft: '3cm' }} href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" style={{ marginRight: '2cm' }} id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item dropdown ml-auto"> {/* Utilizamos ml-auto para alinear a la derecha */}
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Contact
                            </a>
                            <ul className="dropdown-menu dropdown-menu-start">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;