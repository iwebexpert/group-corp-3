import React from "react";
import "./MessengerList.scss";

export function MessengerList() {
  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item list-group-item-action active" >
        Messenger 1
      </li>
      <li className="list-group-item list-group-item-action">
        Messenger 2
      </li>
      <li className="list-group-item list-group-item-action">
        Messenger 3
      </li>
      <li className="list-group-item list-group-item-action">
        Messenger 4
      </li>
    </ul>
  );
}
