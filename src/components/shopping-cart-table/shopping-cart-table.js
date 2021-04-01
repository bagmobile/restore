import React from 'react';
import './shopping-cart-table.css'
import {connect} from "react-redux";
import {increaseCartItem, deleteCartItem, decreaseCartItem} from "../../actions";

const ShoppingCartTable = (props) => {
    const {total} = props;

    return (
        <div className="shopping-cart-table">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Count</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    <CarTableRow {...props} />
                </tbody>
            </table>
            <div className="total">
                Total: {total}
            </div>
        </div>
    );
};

const CarTableRow = ({items = [], onIncrease, onDecrease, onDelete}) => {

    return items.map((item, index) => {
        const {id, name, count, total} = item;

        return (
            <tr key={id}>
                <td>{++index}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>{total}</td>
                <td>
                    <button className="btn btn-outline-success" onClick={() => onIncrease(id)}>
                        <i className="fa fa-plus-circle"/>
                    </button>
                    <button className="btn btn-outline-warning" onClick={() => onDecrease(id)}>
                        <i className="fa fa-minus-circle"/>
                    </button>
                    <button className="btn btn-outline-danger" onClick={() => onDelete(id)}>
                        <i className="fa fa-trash-o"/>
                    </button>
                </td>
            </tr>
        );
    });
}

const mapDispatchToProps = {
    onIncrease: increaseCartItem,
    onDecrease: decreaseCartItem,
    onDelete: deleteCartItem
}

const mapStateToProps = (state) => {
    return {
        items: state.cart.items,
        total: state.cart.total
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);