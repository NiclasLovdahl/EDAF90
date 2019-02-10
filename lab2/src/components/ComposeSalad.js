import React, { Component } from "react";

import SaladCheckbox from "./SaladCheckbox";
import SaladSelect from "./SaladSelect";

class ComposeSalad extends Component {
    constructor(props) {
        super();

        this.state = {
            foundation: "Sallad",
            proteins: [],
            extras: [],
            dressing: "Ceasardressing"
        };

        const inventory = props.inventory;

        // test for correct ussage, the parent must send this datastructure
        if (!inventory) {
            alert("inventory is undefined in ComposeSalad");
        }

        this.foundations = Object.keys(inventory).filter(
            name => inventory[name].foundation
        );
        this.proteins = Object.keys(inventory).filter(
            name => inventory[name].protein
        );
        this.extras = Object.keys(inventory).filter(
            name => inventory[name].extra
        );
        this.dressings = Object.keys(inventory).filter(
            name => inventory[name].dressing
        );
    }

    handleSelectChange = event => {
        const name = event.target.getAttribute("name");
        const value = event.target.value;

        if (name === "foundation") {
            this.setState({ foundation: value });
        } else if (name === "dressing") {
            this.setState({ dressing: value });
        }
    };

    handleCheckboxChange = event => {
        const name = event.target.getAttribute("name");
        const value = event.target.value;
        let index;

        if (name === "protein") {
            if (event.target.checked) {
                this.setState({
                    proteins: [...this.state.proteins, value]
                });
            } else {
                index = this.state.proteins.indexOf(value);
                this.setState(this.state.proteins.splice(index, 1));
            }
        } else if (name === "extra") {
            if (event.target.checked) {
                this.setState({
                    extras: [...this.state.extras, value]
                });
            } else {
                index = this.state.extras.indexOf(value);
                this.setState(this.state.extras.splice(index, 1));
            }
        }
    };

    handleSubmit = event => {
        event.preventDefault();
        const salad = this.state;
        this.props.addSalad(salad);

        this.setState({
            foundation: "Sallad",
            proteins: [],
            extras: [],
            dressing: "Ceasardressing"
        });

        this.props.history.push("/view-order");
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Välj bas:</h4>
                <SaladSelect
                    type="foundation"
                    items={this.foundations}
                    init={this.state.foundation}
                    handleChange={this.handleSelectChange}
                />

                <h4>Välj protein:</h4>
                <SaladCheckbox
                    type="protein"
                    items={this.proteins}
                    handleChange={this.handleCheckboxChange}
                    itemList={this.state.proteins}
                />

                <h4>Välj extras:</h4>
                <SaladCheckbox
                    type="extra"
                    items={this.extras}
                    handleChange={this.handleCheckboxChange}
                    itemList={this.state.extras}
                />

                <h4>Välj dressing</h4>
                <SaladSelect
                    type="dressing"
                    items={this.dressings}
                    init={this.state.dressing}
                    handleChange={this.handleSelectChange}
                />

                <button type="submit" className="btn btn-primary">
                    Lägg till salad
                </button>
            </form>
        );
    }
}

export default ComposeSalad;
