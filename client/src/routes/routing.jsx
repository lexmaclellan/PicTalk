import React, { useEffect, useContext } from "react";
import { Route, Routes, BrowserRouter, redirect } from "react-router-dom";


// import AuthenticatedRoutes from "./authenticatedRoutes";


import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Routing = () => {
	// const { state } = useContext(AuthContext);

	// check if we are already authenticated
	// useEffect(() => {
	// 	state.isAuthenticated ? <Redirect to="/" /> : <Redirect to="/login" />;
	// });
	redirect("/login");
	

	return (
		<BrowserRouter>
			<Routes>
				{/* Public routes */}
				<Route exact path="/login" component={Login} />
				{/* <Route exact path="/signup" component={Signup} /> */}

				{/* Separate the protected routes from public ones */}

				{/*<AutenticatedRoutes exact path="/explore" component={Home} />*/}

				{/* in case we want to handle the 404 page not found */}
				{/* <Route component={NotFound} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default Routing;