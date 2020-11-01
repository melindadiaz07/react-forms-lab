import React from "react";

class TwitterMessage extends React.Component {

  constructor(props) {
    super();
    this.state = {
      value: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value

    })
  }

  remainingChars = () => {
    return (this.props.maxChars) - (this.state.value.length)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} 
        value={this.state.value}
        type="text" 
        name="message" 
        id="message" />{this.remainingChars()}
      </div>
    );
  }
}

export default TwitterMessage;
