import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { WelcomePage, SummaryPage, SettingPage } from "./pages/index";

const AppRouter: React.FC = () => {
	return (
		<HashRouter>
			<div>
				<Routes>
					<Route path="/" element={<WelcomePage />} />
					<Route path="/summary" element={<SummaryPage />} />
					<Route path="/setting" element={<SettingPage />} />
				</Routes>
			</div>
		</HashRouter>
	);
};

export default AppRouter;
