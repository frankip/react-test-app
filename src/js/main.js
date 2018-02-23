import React, { Component } from "react";
import { render } from 'react-dom';
import App from './app'

import '../css/main.css'; // import CSS


render (
    <App name="Frank"/>,
    document.getElementById('app')
);