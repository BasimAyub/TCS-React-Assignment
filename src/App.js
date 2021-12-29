import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/home.js";
import Page1 from "./Pages/userDashboard";
import Login from "./Pages/login.js";
function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/userDashboard" element={<Page1 />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
