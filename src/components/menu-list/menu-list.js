import React, { Component } from "react";
import MenuListItem from "../menu-list-item";
import { connect } from "react-redux";

import Error from "../error";
import Spinner from "../spinner";
import { menuLoaded, menuRequested, menuError, addedToCart } from "../../actions";
import WithRestoService from "../hoc";
import "./menu-list.scss";

class MenuList extends Component {
  componentDidMount() {
    this.props.menuRequested();

    const { RestoService } = this.props;
    RestoService.getMenuItems()
      .then((res) => this.props.menuLoaded(res)) //sending data from backend to redux store
      .catch((error) => this.props.menuError()); // catching the error and changing status in redux store
  }

  getCategoryIcon(cat) {
    switch (cat) {
      case "salads":
        return "carrot";
      case "pizza":
        return "pizza-slice";
      case "meat":
        return "drumstick-bite";
      default:
        return "hamburger";
    }
  };

  render() {
    const { menuItems, loading, error, addedToCart } = this.props;

    if (error) {
      return <Error />;
    }

    if (loading) {
      return <Spinner />;
    }

    const items = menuItems.map((menuItem) => {
      return (
        <MenuListItem
          key={menuItem.id}
          menuItem={menuItem}
          categoryIcon={this.getCategoryIcon(menuItem.category)}
          onAddToCart={() => addedToCart(menuItem.id)}
        />
      )
    });

    return (
      <View items={items} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menuItems: state.menu, //sending data to props of component, line 34
    loading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = {
  //sending action props of component, line 12
  menuLoaded,
  menuRequested,
  menuError,
  addedToCart
};

export default WithRestoService()(
  connect(mapStateToProps, mapDispatchToProps)(MenuList)
);
//connect - is hoc! it allows us to bind our component with redux store
//WithRestoService - using high order component that is wrapp component and give it accees to the context by consumer

//#View
const View = ({items}) => {
  return (
    <ul className="menu__list">
       {items}
    </ul>
  );
};
