import React, { useState } from "react";

function ListItem(props) {
  const [editedItem, setEditedItem] = useState(props.item);
  const [editMode, setEditMode] = useState(false);
  const editedItemChanged = (evt) => {
    setEditedItem(evt.target.value);
  };
  const saveEditedItem = () => {
    props.editHandler(editedItem, props.idx);

    setEditMode(false);
  };

  return (
    <div className="list">
      {editMode ? (
        <>
          <textarea
            id="task"
            className="editTask"
            onChange={editedItemChanged}
            placeholder="Edit Task"
            value={editedItem}
          ></textarea>
          <button
            id="btn"
            className="saveTask"
            onClick={saveEditedItem}
            disabled={editedItem.trim().length === 0}
          >
            Save Task
          </button>
        </>
      ) : (
        <>
          {props.item}
          <button className="edit" onClick={() => setEditMode(true)}>
            edit
          </button>
          <button
            className="delete"
            onClick={() => props.deleteHandler(props.key)}
          >
            delete
          </button>{" "}
        </>
      )}
    </div>
  );
}

export default ListItem;