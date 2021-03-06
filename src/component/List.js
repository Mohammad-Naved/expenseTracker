import React from "react";
import Item from "./Item";
import { MdDelete } from "react-icons/md";
const List = (props) => {
  return (
    <>
      <ul className="list">
        {props.expenses.map((expense) => {
          return (
            <Item
              handleDeleteOne={props.handleDeleteOne}
              handleEdit={props.handleEdit}
              key={expense.id}
              expense={expense}
            />
          );
        })}
      </ul>
      {props.expenses.length > 0 && (
        <button className="btn" onClick={props.handleDelete}>
          clear expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default List;
