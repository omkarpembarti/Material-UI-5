import { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    //Mounting Phase
    super(props);
    this.state = { favoritecolor: "red" };
    console.log("Constructor Called");
  }
  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromProps(props, state) {
    //Mounting Phase
    console.log("getDerivedStateFromProps Called");
    return { favoritecolor: "red" };
  }

  render() {
    //Mounting Phase
    console.log("render called");
    return <div>This is class component</div>;
  }
  componentDidMount() {
    //Mounting Phase
    console.log("componentDidMount Called");
  }
}
