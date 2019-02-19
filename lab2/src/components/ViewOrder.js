import React, { Component } from "react";

import "./ViewOrder.css";

class ViewOrder extends Component {
    render() {
        return (
            <>
                <ul className="list-group order-list">
                    {this.props.order.map((salad, index) => (
                        <li key={salad.id} className="list-group-item">
                            {index +
                                1 +
                                ": " +
                                salad.foundation +
                                "," +
                                salad.proteins +
                                salad.extras +
                                salad.dressing}
                            <span className="price">{salad.price + " :-"}</span>
                        </li>
                    ))}
                </ul>
                {this.props.order.length > 0 ? (
                    <>
                        <button
                            type="button"
                            className="btn btn-danger clear"
                            onClick={this.props.handleClickClear}
                        >
                            Rensa
                        </button>
                        <button
                            className="btn btn-primary place-order"
                            onClick={this.props.handleClickOrder}
                            data-toggle="modal"
                            data-target="#orderModal"
                        >
                            Slutför beställning
                        </button>
                    </>
                ) : (
                    <p>Din kundvagn är tom.</p>
                )}
            </>
        );
    }
}

export default ViewOrder;
