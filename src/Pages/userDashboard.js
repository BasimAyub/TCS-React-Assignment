import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import { useLocation } from "react-router-dom";
export default function Page1() {
	const { state } = useLocation();
	return (
		<div>
			<Header />
			<h1 style={{ margin: "auto", textAlign: "center" }}>
				Welcome {state.user}
			</h1>
			<Footer />
		</div>
	);
}
