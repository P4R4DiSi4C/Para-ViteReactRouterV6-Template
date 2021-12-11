import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/home";
import Dashboard from "./routes/dashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;