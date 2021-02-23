import React from "react";
import { connect } from "react-redux";

import { deleteFromCart } from "../../actions";
import WithRestoService from '../hoc';
import "./cart-table.scss";

const CartTable = ({items, deleteFromCart, RestoService}) => {
    if(items.length === 0) {
        return (<div className="cart__title">Your Cart is Empty!</div>);
    }

    return (
      <>
        <div className="cart__title">Ваш заказ:</div>
        <div className="cart__list">
          {items.map((item) => {
            const { title, url, price, id, qtty } = item;
            return (
              <div key={id} className="cart__item">
                <img src={url} className="cart__item-img" alt={title}></img>
                <div className="cart__item-title">{title}</div>
                <div className="cart__item-price">{price}$ * {qtty}</div>
                <div className="cart__close" onClick={() => deleteFromCart(id)}>
                  &times;
                </div>
              </div>
            );
          })}
        </div>
        <button onClick={() => {RestoService.setOrder(generateOrder(items))}} className="order">Сheckout</button>
      </>
    );
  }

const generateOrder = (items) => {
    const newOrder = items.map(item => {
        return {
            id: item.id,
            qtty: item.qtty
        }
    });

    return newOrder;
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = {
  deleteFromCart,
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));
