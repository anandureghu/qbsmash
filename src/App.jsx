import { Route, Routes } from "react-router-dom";
import LandingPage from "./modules/landing/pages/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
