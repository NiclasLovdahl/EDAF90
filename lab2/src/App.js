import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import shortid from "shortid";

import inventory from "./lib/inventory.ES6";
// import ComposeSaladModal from "./components/ComposeSaladModal";
import ComposeSalad from "./components/ComposeSalad";
import ViewOrder from "./components/ViewOrder";

class App extends Component {
    constructor() {
        super();

        this.state = {
            salads: []
        };

        this.composeSaladElem = params => (
            <ComposeSalad
                {...params}
                inventory={inventory}
                addSalad={this.addSalad}
            />
        );
        this.viewOrderElem = params => (
            <ViewOrder {...params} order={this.state.salads} />
        );
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
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link" to="compose-salad">
                                Komponera din egen sallad
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="view-order">
                                Order
                            </Link>
                        </li>
                    </ul>

                    <Route
                        path="/compose-salad"
                        render={this.composeSaladElem}
                    />
                    <Route path="/view-order" render={this.viewOrderElem} />
                </div>
            </>
        );
    }
}

export default App;
