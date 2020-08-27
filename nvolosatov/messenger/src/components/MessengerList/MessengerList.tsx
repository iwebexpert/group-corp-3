import React from "react";
import "./MessengerList.scss";
import * as Bootstrap from "react-bootstrap";

export function MessengerList() {
  const items = [
    "Messenger 1",
    "Messenger 2",
    "Messenger 3",
    "Messenger 4",
  ].map((item, index) => {
    return (
      <Bootstrap.ListGroup.Item as={"li"} active={index === 0} key={index}>
        {item}
      </Bootstrap.ListGroup.Item>
    );
  });

  return (
    <>
      <h2>Your messengers</h2>
      <Bootstrap.ListGroup>{items}</Bootstrap.ListGroup>
    </>
  );
}
