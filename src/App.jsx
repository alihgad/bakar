import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./pages/card/card";
import LayOut from "./layOut";
import Tra from "./pages/transactions/transaction";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Card />} />
          <Route path="/transactions" element={<Tra />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
