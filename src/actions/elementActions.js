export default function moveItems(dragIndex, hoverIndex) {
  return function sort(dispatch) {
    dispatch({
      type: 'MOVE_ITEMS',
      payload: {
        dragIndex,
        hoverIndex
      }
    });
  };
}
