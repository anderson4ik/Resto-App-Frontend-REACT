const initialState = {
  menu: [],
  items: [],
  loading: true,
  error: false,
  totalPrice: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MENU_LOADED":
      return {
        ...state,
        menu: action.payload,
        loading: false,
      };
    case "MENU_REQUESTED":
      return {
        ...state,
      };
    case "MENU_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "ITEM_ADD_TO_CART":
      const id = action.payload;

       // the item already in the cart
       const itemInd = state.items.findIndex(item => item.id === id);
       if(itemInd >= 0) {
          const itemInState = state.items.find(item => item.id === id);
          const newItem = {
              ...itemInState,
              qtty: ++itemInState.qtty
          };

          return {
              ...state,
              items: [
                 ...state.items.slice(0, itemInd),
                 newItem,
                 ...state.items.slice(itemInd + 1)
              ],
              totalPrice: state.totalPrice + newItem.price
          };
       };
       

      // the item was not in the cart before
      const item = state.menu.find((item) => item.id === id);
      const newItem = { 
          ...item,
          qtty: 1
        };

      return {
        ...state,
        items: [...state.items, newItem],
        totalPrice: state.totalPrice + newItem.price
      };
    case "ITEM_REMOVE_FROM_CART":
      const index = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === index);
      const price = state.items[itemIndex]['price'] * state.items[itemIndex]['qtty'];

      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1),
        ],
        totalPrice: state.totalPrice - price
      };
    default:
      return state;
  }
};

export default reducer;
