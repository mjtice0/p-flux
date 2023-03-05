import 'bootstrap/dist/css/bootstrap.css';
//creates a const called render that references react-doms render function
import React from "react";
import { render } from 'react-dom';
import App from "./components/App";


render(<App />, 
document.getElementById("root"));