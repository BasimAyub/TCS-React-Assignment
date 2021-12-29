import React from "react";
import { Route, Link } from "react-router-dom";
import "../Styles/header.css";

export default function Header() {
	return (
		<div>
			<nav class="navbar navbar-inverse">
				<div class="container-fluid">
					<div class="navbar-header">
						<button
							type="button"
							class="navbar-toggle"
							data-toggle="collapse"
							data-target="#myNavbar"
						>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<Link to="/">
							<a class="navbar-brand">Logo</a>
						</Link>
					</div>
					<div class="collapse navbar-collapse" id="myNavbar">
						<ul class="nav navbar-nav">
							<li>
								<a>
									<Link
										to="/"
										style={{ textDecoration: "none", color: "grey" }}
									>
										Home
									</Link>
								</a>
							</li>
						</ul>
						<ul class="nav navbar-nav navbar-right">
							<li>
								<a href="#">
									<span class="glyphicon glyphicon-log-in"></span>{" "}
									<Link
										to="/login"
										style={{ textDecoration: "none", color: "grey" }}
									>
										Login
									</Link>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
