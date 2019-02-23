import React, { Component } from "react";
import ReactDOM from "react-dom";

class Counter extends Component {
  state = {
    count: this.props.value,
    imageUrl: "https://picsum.photos/200",
    listtags: [
      {
        id: 1,
        value: "list 1"
      },
      {
        id: 2,
        value: "list 2"
      },
      {
        id: 3,
        value: "list 3"
      },
      {
        id: 4,
        value: "list 4"
      }
    ]
  };
  //   constructor() {
  //     super();
  //     this.handleClick = this.handleClick.bind(this); // binding this value to event in function we cant accesss this value we get undefined error
  //     // so that we can use bind
  //   }

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };
  render() {
    console.log(this);
    return (
      <div>
        <span style={this.styles} className={this.newMethod()}>
          {this.getCount()}
        </span>
        {/* <button
          className="btn btn-sm btn-danger"
          onClick={this.clickbuttonHandler}// without passing arguments 
        >
          Increment
        </button> */}
        <button
          className="btn btn-sm btn-primary m-2"
          onClick={() => this.clickbuttonHandler(1)} // passing arguments
        >
          Increments
        </button>
        {/* {this.props} */}
        <button className="btn btn-sm btn-danger m-2" onClick={() => this.props.onDelete(1)}>Delete</button>
        {/* <ul style={{ listStyle: "None" }}>
          {this.state.listtags.map(tag => (
            <li key={tag.id}>{tag.value}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  //   doHandler() {
  //     this.clickbuttonHandler(1);
  //   }
  clickbuttonHandler = prod => {
    console.log(prod, "handling click");
    this.setState({ count: this.state.count + 1 });
  };
  deleteHandler() {
    console.log("delete handler works")
  }
  handleClick() {
    // console.log("Increment is Clicked", this);// accessing this here we are getting undefined.
  }

  newMethod() {
    let myclass = "badge m-2 badge-";
    myclass += this.state.count === 0 ? "warning" : "success";
    return myclass;
  }

  getCount() {
    const { count } = this.state;
    return count === 0 ? "ZERO" : count;
  }
}

export default Counter;
