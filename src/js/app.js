import React, { Component } from "react";
import { render } from 'react-dom';

import '../css/main.css'; // import CSS
import image from  '../assets/library.jpg'; // Import image

export default class Hello extends Component {
    render() {
        return <div>
            Hello from react
            <div className="image">
              <img src={image} alt="image" />
            </div>
          </div>;
    }
}

render (<Hello/>, document.getElementById('app'));