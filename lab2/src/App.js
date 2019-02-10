import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import inventory from "./lib/inventory.ES6";
import ComposeSaladModal from "./components/ComposeSaladModal";

class App extends Component {
    constructor() {
        super();

        this.state = {
            salads: []
        };
    }

    render() {
        return (
            <>
                <div className="jumbotron text-center">
                    <h1 className="display-4">EDAF90 - Web Programming</h1>
                    <p className="lead">Lab 2</p>
                </div>

                <ComposeSaladModal inventory={inventory} />
            </>
        );
    }
}

export default App;
