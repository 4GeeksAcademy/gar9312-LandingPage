import React from "react";

function Card() {
    return (
        <div className="container mt-5">
            <div className="card-group d-flex justify-content-center" style={{ gap: "50px" }}>
                <div className="card border" style={{ width: "500px", height: "500px" }}>
                    <img src="..." className="card-img-top" alt="..." style={{ width: "100%", height: "50%" }} />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="mt-auto text-center">
                            <button className="btn btn-primary btn-block">
                                Go somewhere
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card border" style={{ width: "500px", height: "500px" }}>
                    <img src="..." className="card-img-top" alt="..." style={{ width: "100%", height: "50%" }} />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="mt-auto text-center">
                            <button className="btn btn-primary btn-block">
                                Go somewhere
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card border" style={{ width: "500px", height: "500px" }}>
                    <img src="..." className="card-img-top" alt="..." style={{ width: "100%", height: "50%" }} />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="mt-auto text-center">
                            <button className="btn btn-primary btn-block">
                                Go somewhere
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card border" style={{ width: "500px", height: "500px" }}>
                    <img src="..." className="card-img-top" alt="..." style={{ width: "100%", height: "50%" }} />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="mt-auto text-center">
                            <button className="btn btn-primary btn-block">
                                Go somewhere
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;


