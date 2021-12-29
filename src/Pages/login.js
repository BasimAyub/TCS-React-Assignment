import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import Dashboard from "./userDashboard";
import { useNavigate } from "react-router";
export default function Login() {
	let navigate = useNavigate();
	function handleClick() {
		var user = document.getElementById("username").value;
		var pass = document.getElementById("pwd").value;
		let udata = { user: user, pass: pass };
		navigate("/userDashboard", { state: udata });
	}

	return (
		<div>
			<title>Login</title>
			<Header />
			<div class="container">
				<form>
					<div class="form-group">
						<label for="email">Username:</label>
						<input
							type="text"
							class="form-control"
							id="username"
							placeholder="Enter Username"
							name="username"
						/>
					</div>
					<div class="form-group">
						<label for="pwd">Password:</label>
						<input
							type="password"
							class="form-control"
							id="pwd"
							placeholder="Enter password"
							name="pwd"
						/>
					</div>
					<button class="btn btn-default" onClick={handleClick}>
						Login
					</button>
				</form>
			</div>
			<Footer />
		</div>
	);
}
