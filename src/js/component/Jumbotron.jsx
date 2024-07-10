import React from "react";

function Jumbotron() {
    return (
        <div className="container-fluid bg-light p-5">
            <div className="row">
                <div className="col-md-15">
                    <p className="display-3">A WARM WELCOME!</p>
                    <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quas eveniet asperiores consectetur libero error voluptate reiciendis neque, corporis esse odit iusto ipsum cupiditate earum, qui blanditiis. Quisquam, magni earum.
                    </p>
                    <button className="btn btn-primary btn-lg">Call to action!</button>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;
