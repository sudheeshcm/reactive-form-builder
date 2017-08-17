export const addItem = item => ({
  type: 'ADD_ITEM',
  payload: item
});

export const updateSelectedItem = item => ({
  type: 'UPDATE_SELECTED_ITEM',
  payload: item
});

export const updateInList = item => ({
  type: 'UPDATE_ITEM_IN_LIST',
  payload: item
});

export const moveItems = (dragIndex, hoverIndex) => ({
  type: 'MOVE_ITEMS',
  payload: {
    dragIndex,
    hoverIndex
  }
});

export const moveHorizontalItems = (parentId, dragIndex, hoverIndex) => ({
  type: 'MOVE_HORIZONTAL_ITEMS',
  payload: {
    parentId,
    dragIndex,
    hoverIndex
  }
});
