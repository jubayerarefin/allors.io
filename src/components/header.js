import React from "react";

export class Header extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {  
      return (
        <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#25c2a0', borderRadius: '10px' }}>
        <h1>{this.props.title}</h1>
        </div>
      );
    }
}
