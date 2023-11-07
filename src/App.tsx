import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homePage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
