import React, { Component } from "react";

class SaladSelect extends Component {
    render() {
        return (
            <div className="form-group">
                <select
                    className="form-control"
                    value={this.props.init}
                    name={this.props.type}
                    onChange={this.props.handleChange}
                    required
                >
                    <option value="">Gör ett val...</option>
                    {this.props.items.map(name => (
                        <option key={name} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
                <div className="invalid-feedback">Du måste välja en vara.</div>
            </div>
        );
    }
}

export default SaladSelect;
