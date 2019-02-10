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

        this.addSalad = this.addSalad.bind(this);
    }

    addSalad = obj => {
        this.setState({
            salads: [...this.state.salads, obj]
        });
    };

    render() {
        return (
            <>
                <div className="jumbotron text-center">
                    <h1 className="display-4">EDAF90 - Web Programming</h1>
                    <p className="lead">Lab 2</p>
                </div>

                <ComposeSaladModal
                    inventory={inventory}
                    addSalad={this.addSalad}
                />
            </>
        );
    }
}

export default App;
