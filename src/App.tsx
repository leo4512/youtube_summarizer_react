import { HashRouter, Route, Routes } from "react-router-dom";
import { WelcomePage, SettingPage } from "./pages";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div>
      {" "}
      <GlobalStyle />
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/setting" element={<SettingPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
