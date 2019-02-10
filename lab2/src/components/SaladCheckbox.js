import React, { Component } from "react";

class SaladCheckbox extends Component {
    render() {
        return (
            <>
                {this.props.items.map(name => (
                    <div key={name} className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={name}
                            name={this.props.type}
                            checked={
                                this.props.itemList.includes(name) || false
                            }
                            onChange={this.props.handleChange}
                        />
                        <label className="form-check-label" htmlFor={name}>
                            {name}
                        </label>
                    </div>
                ))}
            </>
        );
    }
}

export default SaladCheckbox;
