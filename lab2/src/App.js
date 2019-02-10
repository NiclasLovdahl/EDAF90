import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import shortid from "shortid";

import inventory from "./lib/inventory.ES6";
import ComposeSaladModal from "./components/ComposeSaladModal";
import ViewOrder from "./components/ViewOrder";

class App extends Component {
    constructor() {
        super();

        this.state = {
            salads: []
        };
    }

    addSalad = obj => {
        obj.id = shortid.generate();
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
                <div className="App">
                    <ComposeSaladModal
                        inventory={inventory}
                        addSalad={this.addSalad}
                    />

                    <ViewOrder order={this.state.salads} />
                </div>
            </>
        );
    }
}

export default App;
