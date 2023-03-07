import 'bootstrap/dist/css/bootstrap.css';
//creates a const called render that references react-doms render function
import React from "react";
import { render } from 'react-dom';
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";  


render(
//wrap App with router
<Router>
<App />, 
</Router>,
document.getElementById("root"));