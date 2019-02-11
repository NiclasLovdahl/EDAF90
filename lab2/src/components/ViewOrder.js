import React, { Component } from "react";

import "./ViewOrder.css";

class ViewOrder extends Component {
    render() {
        return (
            <ul className="list-group">
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
        );
    }
}

export default ViewOrder;
