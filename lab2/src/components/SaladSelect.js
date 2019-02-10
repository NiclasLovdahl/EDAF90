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
                >
                    {this.props.items.map(name => (
                        <option key={name} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

export default SaladSelect;
