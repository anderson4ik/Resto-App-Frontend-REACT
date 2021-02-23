import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./menu-list-item.scss";

const MenuListItem = ({ menuItem, categoryIcon, onAddToCart }) => {
  const { title, url, category, price } = menuItem;

  return (
    <li className="menu__item">
      <Link to={`/${menuItem.id}`} className="ancor">
        <div className="menu__title">
          <span className="iconSpan">
            <FontAwesomeIcon icon={categoryIcon} />
          </span>
          {title}
        </div>
        <img className="menu__img" src={url} alt={title}></img>
        <div className="menu__category">
          Category: <span>{category}</span>
        </div>
        <div className="menu__price">
          Price: <span>{price}$</span>
        </div>
      </Link>
        <button onClick={() => {onAddToCart()}} className="menu__btn">Add to cart</button>
    </li>
  );
};

export default MenuListItem;
