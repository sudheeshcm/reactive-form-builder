import React from 'react';

import DraggableItem from './../components/form-tools/draggable-item';
import HDraggableItem from './../components/form-tools/horizontal-draggable-item';
import DraggableHBox from './../components/form-tools/draggable-hbox';
import HeaderItem from './../components/form-tools/header/header';
import LabelItem from './../components/form-tools/label/label';

export const getItem = item => {
  switch (item.element) {
    case 'Header':
      return <HeaderItem item={item} />;
    case 'Label':
      return <LabelItem item={item} />;
    default:
      /* TODO ***** REMOVE DEFAULT CASE ***** */
      return <HeaderItem item={item} />;
  }
};

export const getDraggableItem = (item, i, parentId, sortItems) => {
  let draggableItem;
  const dimensions = {
    width:
      item.styles.width +
      item.styles.marginLeft +
      item.styles.marginRight +
      item.styles.borderWidth * 2
  };
  if (item.element !== 'HBox' && !item.isChild) {
    draggableItem = (
      <DraggableItem
        key={item.id}
        index={i}
        itemData={item}
        moveItem={sortItems}
        dimensions={dimensions}
      >
        {getItem(item)}
      </DraggableItem>
    );
  } else if (item.isChild && item.parentId) {
    draggableItem = (
      <HDraggableItem
        key={item.id}
        index={i}
        itemData={item}
        parentId={parentId}
        moveHorizontalItem={sortItems}
        dimensions={dimensions}
      >
        {getItem(item)}
      </HDraggableItem>
    );
  } else {
    draggableItem = (
      <DraggableHBox
        key={item.id}
        index={i}
        itemData={item}
        moveItem={sortItems}
        dimensions={dimensions}
      />
    );
  }
  return draggableItem;
};
