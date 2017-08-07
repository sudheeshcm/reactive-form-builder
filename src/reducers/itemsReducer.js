// import _ from 'lodash';
import update from 'immutability-helper';

const reducer = (
  state = {
    error: null,
    items: [
      {
        id: 1,
        element: 'Header',
        text: 'Header Text',
        static: true
      },
      {
        id: 2,
        element: 'Header',
        text: 'Second Demo Heading',
        static: true
      },
      {
        id: 3,
        element: 'Header',
        text: '3rd Demo Heading',
        static: true
      }
    ]
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
    case 'ADD_ITEM_REJECTED': {
      return {
        ...state,
        error: action.payload
      };
    }
    case 'DELETE_ITEM_FULFILLED': {
      return {
        ...state,
        todos: action.payload
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

export default reducer;
