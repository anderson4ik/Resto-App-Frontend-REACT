const menuLoaded = (newMenu) => {
  return {
    type: "MENU_LOADED", // action - success, data accepted 
    payload: newMenu,
  };
};

const menuRequested = () => {
  return {
    type: "MENU_REQUESTED", // action - request sent to backend
  };
};

const menuError = () => {
  return {
    type: "MENU_ERROR", // action - error, data not accepted
  };
};

const addedToCart = (id) => {
  return {
    type: "ITEM_ADD_TO_CART", // action - item added to cart
    payload: id
  };
};

const deleteFromCart = (id) => {
  return {
    type: "ITEM_REMOVE_FROM_CART",
    payload: id
  };
};


export { menuLoaded, menuRequested, menuError, addedToCart, deleteFromCart };
