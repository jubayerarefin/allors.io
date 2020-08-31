import React from "react";

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.txtAlign= "center";
    this.txtPadding= "30px";
    this.borderRadius= "10px";
    this.bgColor= "#25c2a0";
  }

  render() {
    return (
      <div
        style={{
          textAlign: this.txtAlign,
          padding: this.txtPadding,
          backgroundColor: this.bgColor,
          borderRadius: this.borderRadius,
        }}
      >
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
