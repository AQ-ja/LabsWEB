import React from "react";
import "./Header.css"

export default class Header extends React.Component {
  render() {
    return (
        <header id="Header">
            <div id="intentos">Intentos: {this.props.numIntentos} </div>
        </header>
    );
  }
}

