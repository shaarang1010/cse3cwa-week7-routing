import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const CardComponent = ({ imageSrc, title, text, items }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {items.map((item, index) => {
          return (
            <ListGroupItem key={index}>
              {item[0]} : {item[1]}
            </ListGroupItem>
          );
        })}
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
