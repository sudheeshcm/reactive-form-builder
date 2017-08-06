const moveItems = (dragIndex, hoverIndex) => ({
  type: 'MOVE_ITEMS',
  payload: {
    dragIndex,
    hoverIndex
  }
});

export default moveItems;
