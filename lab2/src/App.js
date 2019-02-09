import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery"; // skip this if you do not use bootstrap modals
import Popper from "popper.js"; // skip this if you do not use bootstrap modals

import inventory from "./lib/inventory.ES6";
import ComposeSaladModal from "./components/ComposeSaladModal";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="jumbotron text-center">
                    <h1 className="display-4">EDAF90 - Web Programming</h1>
                    <p className="lead">
                        This is a template project for react + bootstrap.
                    </p>
                    <hr className="my-4" />
                    <p>This code is a good starting point for lab 2.</p>
                </div>

                <ComposeSaladModal inventory={inventory} />
            </div>
        );
    }
}

export default App;
