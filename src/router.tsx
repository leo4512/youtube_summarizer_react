import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { SummaryPage } from "./pages/index";

const AppRouter: React.FC = () => {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<SummaryPage />} />
				</Routes>
			</div>
		</Router>
	);
};

export default AppRouter;
