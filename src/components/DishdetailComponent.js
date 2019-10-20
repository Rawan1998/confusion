import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }
  renderComments(comments) {
    if (comments != null) {
      const list = comments.map(comment => {
        const date = new Date(comment.date);
        return (
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>
              -- {comment.author} , {date.toDateString()}
            </p>
          </li>
        );
      });
      return <ul className="list-unstyled">{list}</ul>;
    } else {
      return <div></div>;
    }
  }
  renderDish(dish) {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top alt={dish.name} src={dish.image} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {this.renderComments(dish.comments)}
        </div>
      </div>
    );
  }
  render() {
    if (this.props.dish != null) {
      return <div>{this.renderDish(this.props.dish)}</div>;
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
