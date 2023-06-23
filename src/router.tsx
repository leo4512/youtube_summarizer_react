import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { WelcomePage } from "./pages/index";

const AppRouter: React.FC = () => {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<WelcomePage />} />
				</Routes>
			</div>
		</Router>
	);
};

export default AppRouter;
