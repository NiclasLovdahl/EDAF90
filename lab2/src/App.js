import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import shortid from "shortid";

// import ComposeSaladModal from "./components/ComposeSaladModal";
import ComposeSalad from "./components/ComposeSalad";
import ViewOrder from "./components/ViewOrder";

const NotFound = () => <h1>Page Not Found</h1>;

class App extends Component {
    state = {
        salads: [],
        inventory: {}
    };

    composeSaladElem = params => (
        <ComposeSalad
            {...params}
            inventory={this.state.inventory}
            addSalad={this.addSalad}
        />
    );

    viewOrderElem = params => (
        <ViewOrder {...params} order={this.state.salads} />
    );

    addSalad = obj => {
        obj.id = shortid.generate();
        obj.price = this.calculatePrice(obj);

        this.setState({
            salads: [...this.state.salads, obj]
        });
    };

    calculatePrice = obj => {
        const price =
            this.state.inventory[obj.foundation].price +
            this.state.inventory[obj.dressing].price +
            obj.proteins.concat(obj.extras).reduce((pre, curr) => {
                return pre + this.state.inventory[curr].price;
            }, 0);
        return price;
    };

    componentDidMount() {
        let inventory = {};
        const urls = ["foundations", "proteins", "extras", "dressings"];
        Promise.all(
            urls.map(data => {
                const url = new URL(data, "http://localhost:8080/");
                return fetch(url, {
                    method: "GET",
                    headers: new Headers(),
                    mode: "cors",
                    cache: "default"
                })
                    .then(res => res.json())
                    .then(res => {
                        Promise.all(
                            res.map(key => {
                                const url2 = new URL(key, url.toString() + "/");
                                return fetch(url2, {
                                    method: "GET",
                                    headers: new Headers(),
                                    mode: "cors",
                                    cache: "default"
                                })
                                    .then(res => res.json())
                                    .then(res => {
                                        inventory = {
                                            ...inventory,
                                            [key]: res
                                        };
                                    });
                            })
                        ).then(() => {
                            this.setState({ inventory: inventory });
                        });
                    });
            })
        );
    }

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

                    <Switch>
                        <Route path="/" exact render={null} />
                        <Route
                            path="/compose-salad"
                            render={this.composeSaladElem}
                        />
                        <Route path="/view-order" render={this.viewOrderElem} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </>
        );
    }
}

export default App;
