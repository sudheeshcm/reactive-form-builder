// import _ from 'lodash';
import update from 'immutability-helper';

const reducer = (
  state = {
    error: null,
    items: [
      {
        id: 1,
        text: 'This is a demo header'
      },
      {
        id: 2,
        text: 'Make it generic enough'
      },
      {
        id: 3,
        text: 'Write README'
      },
      {
        id: 4,
        text: 'Create some examples'
      }
    ]
  },
  action
) => {
  switch (action.type) {
    case 'ADD_ITEM_FULFILLED': {
      return {
        ...state,
        todos: action.payload
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
