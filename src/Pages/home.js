import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
export default function Home() {
	return (
		<div>
			<title>Home</title>
			<Header />
			<div>
				<h1 style={{ margin: "auto", textAlign: "center" }}>Home Page</h1>
			</div>
			<Footer />
		</div>
	);
}
