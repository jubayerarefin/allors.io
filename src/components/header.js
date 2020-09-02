import React from "react";

const txtAlign = "center";
const txtPadding = "30px";
const borderRadius = "10px";
const bgColor = "#25c2a0";

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          textAlign: this.props.txtAlign ?? txtAlign,
          padding: this.props.txtPadding ?? txtPadding,
          backgroundColor: this.props.bgColor ?? bgColor,
          borderRadius: this.props.borderRadius ?? borderRadius,
        }}
      >
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
