import lodash from 'lodash';
import update from 'immutability-helper';

const itemsReducer = (
  state = {
    error: null,
    items: [
      {
        id: 1,
        element: 'Header',
        text: 'Header Text',
        static: true,
        styles: {
          color: 'green'
        }
      },
      {
        id: 2,
        element: 'Header',
        text: 'Second Demo Heading',
        static: true,
        styles: {
          color: 'blue'
        }
      },
      {
        id: 3,
        element: 'Header',
        text: '3rd Demo Heading',
        static: true,
        styles: {
          color: 'black'
        }
      }
    ],
    lastSelectedItem: {
      id: 2,
      element: 'Header',
      text: 'Second Demo Heading',
      static: true,
      styles: {
        color: 'blue'
      }
    }
  },
  action
) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const updatedItems = update(state.items, { $push: [action.payload] });
      return {
        ...state,
        items: updatedItems
      };
    }
    case 'UPDATE_SELECTED_ITEM': {
      const updatedState = update(state, {
        lastSelectedItem: { $set: action.payload }
      });
      return updatedState;
    }
    case 'UPDATE_ITEM_IN_LIST': {
      const { items } = state;
      const itemIndex = lodash.findIndex(items, { id: action.payload.id });
      const updatedState = update(state, {
        items: {
          $splice: [[itemIndex, 1, action.payload]]
        }
      });
      return updatedState;
    }
    case 'ADD_ITEM_REJECTED': {
      return {
        ...state,
        error: action.payload
      };
    }
    case 'DELETE_ITEM_FULFILLED': {
      return {
        ...state
      };
    }
    case 'DELETE_ITEM_REJECTED': {
      return {
        ...state,
        error: action.payload
      };
    }
    case 'MOVE_ITEMS': {
      const { items } = state;
      const dragIndex = action.payload.dragIndex;
      const hoverIndex = action.payload.hoverIndex;
      const dragItem = items[dragIndex];
      const updatedState = update(state, {
        items: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragItem]]
        }
      });
      return updatedState;
    }
    default: {
      return state;
    }
  }
};

export default itemsReducer;
