import { HashRouter, Route, Routes } from "react-router-dom";
import { WelcomePage, SettingPage } from "./pages";

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
